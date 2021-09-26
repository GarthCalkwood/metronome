import { useState, useEffect } from 'react'
import Search from './components/Search'
import NewTempoForm from './components/NewTempoForm'
import Typography from '@material-ui/core/Typography'
import Tempos from './components/Tempos'
import Metronome from './components/Metronome'
import click1 from './audio/click1.wav'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'
import tempoService from './services/tempos'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

const App = () => {
  const [tempos, setTempos] = useState([]) 
  const [search, setSearch] = useState('')
  const [newTempoFormOpen, setNewTempoFormOpen] = useState(false)
  const [newTempo, setNewTempo] = useState(120)
  const [newTempoName, setNewTempoName] = useState('')
  const [activeTempo, setActiveTempo] = useState(120)
  const [playing, setPlaying] = useState(false)
  const [clickInterval, setClickInterval] = useState(0)
  const [editTempoFormOpen, setEditTempoFormOpen] = useState(false)
  const [tempoBeingEdited, setTempoBeingEdited] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleSearch = event => setSearch(event.target.value)

  const handleNewTempoFormOpen = () => setNewTempoFormOpen(true)

  const handleNewTempoFormClose = () => {
    setNewTempoFormOpen(false)
    setNewTempo(120)
    setNewTempoName('')
  }

  const handleEditTempoFormOpen = (event, tempo) => {
    console.log("tempo: ", tempo)
    setEditTempoFormOpen(true)
    setNewTempo(tempo.tempo)
    setNewTempoName(tempo.name)
    setTempoBeingEdited(tempo)
  }

  const handleEditTempoFormClose = () => {
    setEditTempoFormOpen(false)
    setNewTempo(120)
    setNewTempoName('')
  }

  const handleNewTempoName = event => setNewTempoName(event.target.value)

  const handleNewTempoSlider = (event, newValue) => {
    setNewTempo(newValue)
  }

  const handleNewTempoInput = (event) => {
    setNewTempo(event.target.value)
  }

  const AddTempo = (event) => {
    let tempoToAdd = newTempo
    if (tempoToAdd > 200){
      tempoToAdd = 200
    }
    if (tempoToAdd < 40){
      tempoToAdd = 40
    }
    const newTempoObject = {
      name: newTempoName,
      tempo: tempoToAdd,
    }
    tempoService
      .create(newTempoObject)
      .then(returnedTempo => {
        setTempos(tempos.concat(returnedTempo))
      })
    handleNewTempoFormClose()
  }

  const EditTempo = (event) => {
    let tempoToAdd = newTempo
    if (tempoToAdd > 200){
      tempoToAdd = 200
    }
    if (tempoToAdd < 40){
      tempoToAdd = 40
    }
    const newTempoObject = {
      name: newTempoName,
      tempo: tempoToAdd,
    }
    const indexBeingEdited = tempos.findIndex(tempo => tempo.id === tempoBeingEdited.id)
    console.log("tempos 1: ", tempos)
    tempoService
      .update(tempoBeingEdited.id, newTempoObject)
      .then(returnedTempo => {
        const newTempos = tempos.slice()
        newTempos.splice(indexBeingEdited, 1, returnedTempo)
        setTempos(newTempos)
      })
    console.log(`Changing Tempo ${tempoBeingEdited.name}: ${tempoBeingEdited.tempo}BPM to ${newTempoName}: ${tempoToAdd}BPM`)
    handleEditTempoFormClose()
  }

  const handleDeleteTempo = (event, id) => {
    if(window.confirm("Are you sure?")) {
      tempoService
        .remove(id)
        .then(response => {
          setTempos(tempos.filter(tempo => tempo.id !== id))
        })
    }
  }

  const handleTempoChange = (event, newValue) => {
    if (playing) {
      // reset clickInterval
      clearInterval(clickInterval)
      setClickInterval(setInterval(play, (60/newValue) * 1000))
    }
    setActiveTempo(newValue)
    
  }

  const handlePlayButtonClick = (event) => {
    if (!playing) {
      setClickInterval(setInterval(play, (60/activeTempo) * 1000))
      play()
    }
    if (playing) {
      clearInterval(clickInterval)
    }
    setPlaying(!playing)
  }

  const click = new Audio(click1)
  const play = () => {
    click.play()
  }

  const filteredTempos = tempos.filter(
    tempo => tempo.name.toLowerCase().includes(search.toLowerCase())
  )

  const drawer = (
    <div>
      <Typography
        variant='h4'
        color='primary'
      >
        Saved Tempos
      </Typography>
      <NewTempoForm
        open={newTempoFormOpen}
        onClick={handleNewTempoFormOpen} 
        onClose={handleNewTempoFormClose}
        value={newTempoName}
        onChange={handleNewTempoName}
        sliderValue={newTempo}
        onSliderChange={handleNewTempoSlider}
        onInputChange={handleNewTempoInput}
        onSubmit={AddTempo}
      />
      <Search value={search} onChange={handleSearch}/>
      <Tempos 
        tempos={filteredTempos} 
        onClick={handleTempoChange} 
        onDelete={handleDeleteTempo}
        open={editTempoFormOpen}
        onEditButtonClick={handleEditTempoFormOpen} 
        onEditTempoFormClose={handleEditTempoFormClose}
        value={newTempoName}
        onChange={handleNewTempoName}
        sliderValue={newTempo}
        onSliderChange={handleNewTempoSlider}
        onInputChange={handleNewTempoInput}
        onSubmit={EditTempo}
      />
    </div>
  )

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
    tempoService
      .getAll()
      .then(initialTempos => {
        setTempos(initialTempos)  
      })
  }, [])

  return (
    <Grid container>
      <Grid item xs={2} md={4}>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          {drawer}
        </Drawer>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            sx={{
              display: { sm: 'none', md: 'block' },
            }}
            open
          >
            {drawer} 
          </Drawer>
        </Hidden>
      </Grid>
      <Grid item xs={8} md={4}>
        <Paper>
          <Typography
            variant='h3'
            color='primary'
            align='center'
            gutterBottom
          >
            Metronome
          </Typography>
          <Metronome 
            playing={playing} 
            activeTempo={activeTempo}
            onChange={handleTempoChange}  
            onClick={handlePlayButtonClick}
          />
        </Paper>
      </Grid>
      <Grid item xs={2} md={4}></Grid>
    </Grid>
  );
}

export default App;

import { useState, useEffect } from 'react'
import Search from './components/Search'
import NewTempoForm from './components/NewTempoForm'
import Typography from '@material-ui/core/Typography'
import Tempos from './components/Tempos'
import Metronome from './components/Metronome'
import click1 from './audio/click1.wav'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

const App = () => {
  const [tempos, setTempos] = useState([]) 
  const [search, setSearch] = useState('')
  const [newTempoFormOpen, setNewTempoFormOpen] = useState(false)
  const [newTempo, setNewTempo] = useState(120)
  const [newTempoName, setNewTempoName] = useState('')
  const [activeTempo, setActiveTempo] = useState(120)
  const [playing, setPlaying] = useState(false)
  const [clickInterval, setClickInterval] = useState(0)

  const handleSearch = event => setSearch(event.target.value)
  const handleClick = () => setNewTempoFormOpen(true)
  const handleClose = () => {
    setNewTempoFormOpen(false)
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
      id: tempos.length,
      name: newTempoName,
      tempo: tempoToAdd,
    }
    setTempos(tempos.concat(newTempoObject))
    handleClose()
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

  const drawerWidth = 300

  const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    metronome: {
      margin: 'auto',
    },
  })

  useEffect(() => {
    axios
      .get('http://localhost:3001/tempos')
      .then(response => {
        setTempos(response.data)
      })
  }, [])

  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography
          variant='h4'
          color='primary'
        >
          Saved Tempos
        </Typography>
        <NewTempoForm
          open={newTempoFormOpen}
          onClick={handleClick} 
          onClose={handleClose}
          value={newTempoName}
          onChange={handleNewTempoName}
          sliderValue={newTempo}
          onSliderChange={handleNewTempoSlider}
          onInputChange={handleNewTempoInput}
          onSubmit={AddTempo}
        />
        <Search value={search} onChange={handleSearch}/>
        <Tempos tempos={filteredTempos} onClick={handleTempoChange}/>
      </Drawer>
      <div className={classes.metronome}>
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
      </div>
    </div>
  );
}

export default App;

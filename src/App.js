import { useState } from 'react'
import Search from './components/Search'
import NewTempoForm from './components/NewTempoForm'
import { Typography } from '@material-ui/core'
import Tempos from './components/Tempos'

const App = () => {
  const [tempos, setTempos] = useState([]) 
  const [search, setSearch] = useState('')
  const [newTempoFormOpen, setNewTempoFormOpen] = useState(false)
  const [newTempo, setNewTempo] = useState(120)
  const [newTempoName, setNewTempoName] = useState('')

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
    const newTempoObject = {
      id: tempos.length,
      name: newTempoName,
      tempo: newTempo,
    }
    setTempos(tempos.concat(newTempoObject))
    handleClose()
  }

  const filteredTempos = tempos.filter(
    tempo => tempo.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Typography
        variant='h3'
        color='primary'
        align='center'
        gutterBottom
      >
        Metronome
      </Typography>
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
      <Tempos tempos={filteredTempos} />
    </div>
  );
}

export default App;

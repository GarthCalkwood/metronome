import { useState } from 'react'
import Search from './components/Search'
import { Typography } from '@material-ui/core'

const App = () => {
  const [tempos, settempos] = useState([
    {
      name: "Smash Mouth - All Star",
      tempo: 104
    },
    {
      name: "Rick Astley - Never Gonna Give You Up",
      tempo: 113
    },
    {
      name: "Gunther & The Sunshine Girls - Ding Dong Song",
      tempo: 132
    }
  ]) 
  const [search, setSearch] = useState('')

  const handleSearch = event => setSearch(event.target.value)

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
      <div>
        <Typography 
          variant='h4'
          color='primary'
        >
          Saved Tempos
        </Typography>
        <Search value={search} onChange={handleSearch}/>
        {filteredTempos.map(tempo => 
          <Typography
            variant='body1'
          >
            {tempo.name}: {tempo.tempo} BPM 
          </Typography>
        )}
      </div>
    </div>
  );
}

export default App;

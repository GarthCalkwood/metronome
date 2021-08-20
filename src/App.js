import { useState } from 'react'
import Search from './components/Search'

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
      <h1>Metronome</h1>
      <div>
        <h2>Saved Tempos</h2>
        <Search value={search} onChange={handleSearch}/>
        {filteredTempos.map(tempo => 
          <div> {tempo.name}: {tempo.tempo} BPM </div>
        )}
      </div>
    </div>
  );
}

export default App;

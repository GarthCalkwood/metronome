import React from 'react'
import Tempo from './Tempo'
import List from '@material-ui/core/List'

const Tempos = ({ tempos, onClick }) => {
  return (
    <List>
      {tempos.map(tempo => 
        <Tempo key={tempo.id} tempo={tempo} onClick={onClick}/>
      )}
    </List>
  )
}

export default Tempos
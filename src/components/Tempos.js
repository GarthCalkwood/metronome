import React from 'react'
import Tempo from './Tempo'
import List from '@material-ui/core/List'

const Tempos = ({ tempos, onClick, onDelete }) => {
  return (
    <List>
      {tempos.map(tempo => 
        <Tempo key={tempo.id} tempo={tempo} onClick={onClick} onDelete={onDelete}/>
      )}
    </List>
  )
}

export default Tempos
import React from 'react'
import Tempo from './Tempo'

const Tempos = ({ tempos }) => {
  return (
    tempos.map(tempo => 
      <Tempo key={tempo.id} tempo={tempo} />
    )
  )
}

export default Tempos
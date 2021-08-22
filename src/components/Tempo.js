import React from 'react'
import Typography from '@material-ui/core/Typography'

const Tempo = ({ tempo }) => {
  return (
    <Typography variant="body1" gutterBottom>
      {`Name: ${tempo.name}`}<br/>
      {`BPM: ${tempo.tempo}`}<br/>
    </Typography>
  )
}

export default Tempo
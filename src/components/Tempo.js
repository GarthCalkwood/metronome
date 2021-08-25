import React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

const Tempo = ({ tempo, onClick}) => {
  return (
    <ListItem button onClick={(event) => onClick(event, tempo.tempo)}>
      <Typography variant="body1" gutterBottom>
        {`Name: ${tempo.name}`}<br/>
        {`BPM: ${tempo.tempo}`}<br/>
      </Typography>
    </ListItem>
  )
}

export default Tempo
import React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

const Tempo = ({ tempo, onClick, onDelete }) => {
  return (
    <ListItem button onClick={(event) => onClick(event, tempo.tempo)}>
      <Typography variant="body1" gutterBottom>
        {`Name: ${tempo.name}`}<br/>
        {`BPM: ${tempo.tempo}`}<br/>
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        size="small" 
        startIcon={<DeleteIcon />}
        onClick={(e) => onDelete(e, tempo.id)}
      >
        Delete
      </Button>

    </ListItem>
  )
}

export default Tempo
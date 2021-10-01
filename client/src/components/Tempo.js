import React from 'react'
import EditTempoForm from './EditTempoForm'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';

const Tempo = ({ tempo, onClick, onDelete, open, onEditButtonClick, onEditTempoFormClose, value, onChange, sliderValue, onSliderChange, onInputChange, onSubmit }) => {
  return (
    <ListItem divider button onClick={(event) => onClick(event, tempo.tempo)}>
      <Typography variant="body1" gutterBottom>
        {`Name: ${tempo.name}`}<br/>
        {`BPM: ${tempo.tempo}`}<br/>
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        size="small" 
        startIcon={<DeleteIcon />}
        onClick={(e) => onDelete(e, tempo._id)}
      >
        Delete
      </Button>
      <EditTempoForm
        tempo={tempo}
        open={open}
        onClick={onEditButtonClick} 
        onClose={onEditTempoFormClose}
        value={value}
        onChange={onChange}
        sliderValue={sliderValue}
        onSliderChange={onSliderChange}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </ListItem>
  )
}

export default Tempo
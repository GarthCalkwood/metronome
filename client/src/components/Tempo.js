import React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditTempoForm from './EditTempoForm'

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
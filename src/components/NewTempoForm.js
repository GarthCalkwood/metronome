import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'

const NewTempoForm = ({ open, onClick, onClose, value, onChange, sliderValue, onSliderChange, onInputChange, onSubmit }) => {
  return (
    <div>
      <Fab 
        color="primary" 
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add New Tempo</DialogTitle>
        <DialogContent>
          <TextField
            value={value}
            onChange={onChange}
            placeholder="Name"
          />
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                max={300}
                value={sliderValue}
                onChange={onSliderChange}
              />
            </Grid>
            <Grid item xs>
              <Input 
                value={sliderValue}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item>
              <Typography>BPM</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  )
}

export default NewTempoForm
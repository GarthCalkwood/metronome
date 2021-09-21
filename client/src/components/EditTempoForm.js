import React from 'react'
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
import EditIcon from '@material-ui/icons/Edit';

const EditTempoForm = ({ tempo, open, onClick, onClose, value, onChange, sliderValue, onSliderChange, onInputChange, onSubmit }) => {
  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        size="small" 
        startIcon={<EditIcon />}
        onClick={(e) => onClick(e, tempo)}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Tempo</DialogTitle>
        <DialogContent>
          <TextField
            value={value}
            onChange={onChange}
            placeholder="Name"
          />
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                min={40}
                max={200}
                value={sliderValue}
                onChange={onSliderChange}
              />
            </Grid>
            <Grid item xs>
              <Input 
                value={sliderValue}
                onChange={onInputChange}
                inputProps={{
                  min: 40,
                  max: 200,
                  type: 'number'
                }}
              />
            </Grid>
            <Grid item>
              <Typography>BPM</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button 
            onClick={onSubmit}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog> 
    </div>
  )
}

export default EditTempoForm
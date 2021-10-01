import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import EditIcon from '@mui/icons-material/Edit';

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
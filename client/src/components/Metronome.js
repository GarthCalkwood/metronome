import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import Slider from '@mui/material/Slider'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
  slider: {
    width: 248,
    margin: 20
  }
})

const Metronome = ({ playing, activeTempo, onChange, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid item justifyContent='center'>
          <Typography
          variant='h3'
          align='center'
          color='primary'
          gutterBottom
          >
            Metronome
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>
            {activeTempo}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Slider 
            className={classes.slider}
            min={40}
            max={200}
            value={activeTempo}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Fab color='primary' onClick={onClick}>
            {playing ? <PauseIcon/> : <PlayArrowIcon/>}
          </Fab>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Metronome
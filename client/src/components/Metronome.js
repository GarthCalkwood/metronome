import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import Slider from '@mui/material/Slider'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    margin: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  slider: {
    width: 100,
    margin: 20
  }
})

const Metronome = ({ playing, activeTempo, onChange, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography>
        BPM: {activeTempo}
      </Typography>
      <Slider 
        className={classes.slider}
        min={40}
        max={200}
        value={activeTempo}
        onChange={onChange}
      />
      <Fab color='primary' onClick={onClick}>
        {playing ? <PauseIcon/> : <PlayArrowIcon/>}
      </Fab>
    </div>
  )
}

export default Metronome
import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import Slider from '@material-ui/core/Slider'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

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
        max={300}
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
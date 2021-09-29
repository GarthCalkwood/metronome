import React from 'react'
import Tempo from './Tempo'
import List from '@material-ui/core/List'

const Tempos = ({ tempos, onClick, onDelete, open, onEditButtonClick, onEditTempoFormClose, value, onChange, sliderValue, onSliderChange, onInputChange, onSubmit}) => {
  return (
    <List>
      {tempos.map(tempo => 
        <Tempo 
          key={tempo._id} 
          tempo={tempo} 
          onClick={onClick} 
          onDelete={onDelete}
          open={open}
          onEditButtonClick={onEditButtonClick}
          onEditTempoFormClose={onEditTempoFormClose}
          value={value}
          onChange={onChange}
          sliderValue={sliderValue}
          onSliderChange={onSliderChange}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
      )}
    </List>
  )
}

export default Tempos
import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ value, onChange}) => {
  return (
    <TextField 
      value={value} 
      onChange={onChange} 
      placeholder='Search'
      variant='outlined'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment> 
        ),
      }}
    />
  )
}

export default Search
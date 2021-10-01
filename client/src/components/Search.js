import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';

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
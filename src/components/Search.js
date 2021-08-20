import React from 'react'

const Search = ({ value, onChange}) => {
  return (
    <input value={value} onChange={onChange} placeholder="Search"/>
  )
}

export default Search
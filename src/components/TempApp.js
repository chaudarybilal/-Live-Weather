import React, { useState } from 'react';
// import { TextField } from '@mui/material';
import "../Style/Style.css"

const TempApp = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <>
    <div className='main-div'>
    <form onSubmit={handleSubmit}>
      <input
      className='input'
        label="Search"
        
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
    </div>
    </>
  );
};

export default TempApp;
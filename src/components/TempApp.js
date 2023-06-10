import React, { useState } from 'react';
// import { useContext } from 'react';
// import ThemeContext from '../ThemeContext';
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
  // const { theme } = useContext(ThemeContext);
  return (
    <>
    <div className='main-div' >
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
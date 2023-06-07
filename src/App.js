import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import {orange, blue} from '@mui/material/colors';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeContext from './ThemeContext';
import WeatherApp from './components/WeatherApp';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary:orange,
      secondary: blue,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
       <WeatherApp/>
        <Footer />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;

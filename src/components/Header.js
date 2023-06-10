import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness4 as DarkIcon, Brightness7 as LightIcon } from '@mui/icons-material';
import ThemeContext from '../ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    
      <Box sx={{ flexGrow: 1 }}>

     <AppBar position="static" color={theme === 'dark' ? 'default' : 'primary'} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Weather App
        </Typography>
        <IconButton color="inherit" onClick={handleThemeChange}>
          {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
        <Typography variant="body2" component="div" sx={{ marginLeft: 1 }}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Typography>
      </Toolbar>
      </AppBar>
      </Box>
    
  );
};

export default Header;

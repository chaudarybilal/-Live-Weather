// import React, { useContext } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
// import ThemeContext from '../ThemeContext';

const Footer = () => {
  // const { theme } = useContext(ThemeContext);

  return (
    <Box
      component="div"
      style={{ width: 'auto', marginTop: '100px'}}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">
              <ThermostatIcon />
            </Typography>
            <Typography variant="body2" >
              Life is a lot like the weather. Sometimes it's sunny, sometimes it's cloudy, but it's always worth
              embracing whatever comes your way.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ marginTop: '70px' }} >
              Email: chaudarybilal618@gmail.com
              <br />
              Phone: +92-344-0050334
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

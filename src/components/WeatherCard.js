import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import "../Style/Style.css"

const WeatherCard = ({ weather }) => {
  return (
    <>
    <Grid container justifyContent="center" >
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card variant="outlined" style={{ width: "100%", height: "35vh" }} >
      <CardContent>
        <Typography variant="h4" component="div">
          {weather.city}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Temperature: {weather.temperature}°C
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Weather: {weather.description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>


  </>
  );
};

export default WeatherCard;
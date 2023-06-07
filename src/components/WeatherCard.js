import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "../Style/Style.css"

const WeatherCard = ({ weather }) => {
  return (
    <>
    
    <Card variant="outlined" style={{ display:"flex",justifyContent:"center",marginLeft:"520px", padding:"20px" ,width:"450px",height:"40vh"}} >
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

  </>
  );
};

export default WeatherCard;
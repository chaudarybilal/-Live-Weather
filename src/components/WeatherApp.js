import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import TempApp from './TempApp';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = (searchTerm) => {
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=da7e4b90fabcdbb618df5d915c644c3c&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        const weatherData = {
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
        };
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log('Error:', error);
        setWeather(null);
      });
  };

  return (
    <div>
      <h1 style={{display:"flex",justifyContent:"center"}}>Weather App</h1>
      <TempApp onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default WeatherApp;

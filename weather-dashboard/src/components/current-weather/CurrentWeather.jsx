import { useEffect } from 'react';
import React, { useState } from 'react'
import { getWeatherIcon, getFormattedDate } from '../helper-functions/HelperFunctions';

function CurrentWeather({ selectedCity }) {
  const [currentWeather, setCurrentWeather] = useState();
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}` +
    `&current=weather_code,temperature_2m,apparent_temperature,rain,wind_speed_10m&timezone=Europe%2FBerlin&forecast_days=1`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setCurrentWeather(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching weather data: ", error);
        setCurrentWeather(null);
      });
  }, [selectedCity]);

  const formattedDate = (currentWeather) ? getFormattedDate(currentWeather.current.time) : "";
  const weatherIcon = (currentWeather) ? getWeatherIcon(currentWeather.current.weather_code) : "";

  return (
    <div className="weather-current-container">
      {currentWeather && (
        <>
          <h4>{formattedDate}</h4>
          <div className="current-temperature">
            <h5>{`${Math.floor(currentWeather.current.temperature_2m)}°`}</h5>
            <img className="weather-icon" src={`/icons/${weatherIcon}.png`} alt={weatherIcon} />
          </div>
          <p>{`Voelt als ${Math.floor(currentWeather.current.apparent_temperature)}°`}</p>
          <p>{`Neerslag ${currentWeather.current.rain} mm`}</p>
        </>
      )}
    </div>
  );
}

export default CurrentWeather;
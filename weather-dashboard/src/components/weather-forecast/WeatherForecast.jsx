import { useEffect } from 'react';
import React, { useState } from 'react'
import DayCard from './DayCard';

function WeatherForecast({ selectedCity }) {
  const [weatherForecast, setWeatherForecast] = useState();
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&forecast_days=6`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setWeatherForecast(data);
        console.log(data);
      })
      .catch(error => {
        console.log("Error fetching weather data: ", error);
        setWeatherForecast(null);
      });
  }, [selectedCity]);

  const dayForecasts = weatherForecast ? (
    <div className="days">
      {weatherForecast.daily.time.map((day, i) => (
        // start at the second day, because day 1 is also the current weather
        i > 0 && (
          <DayCard
            key={day}
            day={day}
            minTemperature={weatherForecast.daily.temperature_2m_min[i]}
            maxTemperature={weatherForecast.daily.temperature_2m_max[i]}
            rainSum={weatherForecast.daily.rain_sum[i]}
            weatherCode={weatherForecast.daily.weather_code[i]}
          />
        )
      ))}
    </div>
  ) : null;

  return weatherForecast && dayForecasts;
}

export default WeatherForecast;
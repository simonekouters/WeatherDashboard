import { useEffect } from 'react';
import React, { useState } from 'react'
import { getWeatherIcon, getFormattedDate } from '../helper-functions/HelperFunctions';

function WeatherForecast({ selectedCity }) {
    const [weatherForecast, setWeatherForecast] = useState();
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&forecast_days=6`;
    
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

    const dayForecast = weatherForecast ? (
        <div className="days">
           {weatherForecast.daily.time.map((day, i) => (
                // start at the second day, because day 1 is also the current weather
                i > 0 && (
                    <div className="weather-forecast-container" key={day}>
                        <h4>{getFormattedDate(weatherForecast.daily.time[i])}</h4>
                            <div className="day-details">
                            <img className="small-weather-icon" src={`/icons/${getWeatherIcon(weatherForecast.daily.weather_code[i])}.png`} alt={getWeatherIcon(weatherForecast.daily.weather_code)}/>
                                <div className="min-max-temperature">
                                    <p>{`${Math.floor(weatherForecast.daily.temperature_2m_min[i])}°/`}</p>
                                    <p>{`${Math.floor(weatherForecast.daily.temperature_2m_max[i])}°`}</p>
                                </div>
                            </div>
                        <p className="rain">{`${weatherForecast.daily.rain_sum[i]} mm`}</p>
                    </div>
                )
            ))}
        </div>
    ) : null;

    return weatherForecast && dayForecast;
}

export default WeatherForecast;
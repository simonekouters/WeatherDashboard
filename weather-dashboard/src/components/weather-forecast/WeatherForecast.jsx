import { useEffect } from 'react';
import React, { useState } from 'react'
import { getWeatherIcon, getFormattedDate } from '../helper-functions/HelperFunctions';

function WeatherForecast({ selectedCity }) {
    const [weatherForecast, setWeatherForecast] = useState();
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + selectedCity.latitude + "&longitude=" + selectedCity.longitude + "&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin&forecast_days=4";
    
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

    const days = weatherForecast ? (
        <div className="days">
           {weatherForecast.daily.time.map((_, i) => (
            // start at the second day, because day 1 is also the current weather
                i > 0 && (
                    <div className="weather-day-container" key={i}>
                        <h4>{getFormattedDate(weatherForecast.daily.time[i])}</h4>
                        <div className="day-details">
                            <div>
                                <p>{"Min " + Math.floor(weatherForecast.daily.temperature_2m_min[i]) + "°"}</p>
                                <p>{"Max " + Math.floor(weatherForecast.daily.temperature_2m_max[i]) + "°"}</p>
                            </div>
                            <img className="weather-icon" src={"/icons/" + getWeatherIcon(weatherForecast.daily.weather_code[i]) + ".png"} alt={getWeatherIcon(weatherForecast.daily.weather_code)}/>
                        </div>
                        <p className="precipication-details">{"Neerslag " + weatherForecast.daily.rain_sum[i] + " mm"}</p>
                    </div>
                )
            ))}
        </div>
    ) : null;

    return (
    <div className="weather-forecast-container">
        {weatherForecast && days}
    </div>
  )
}

export default WeatherForecast;
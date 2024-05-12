import React from 'react'
import { getWeatherIcon, getFormattedDate } from '../helper-functions/HelperFunctions';

function DayCard({ day, minTemperature, maxTemperature, rainSum, weatherCode }) {
    return (
        <div className="day-weather-card">
            <h4>{getFormattedDate(day)}</h4>
            <div className="day-details">
                <img className="small-weather-icon" src={`/icons/${getWeatherIcon(weatherCode)}.png`} alt={getWeatherIcon(weatherCode)} />
                <div className="min-max-temperature">
                    <p>{`${Math.floor(minTemperature)}°/`}</p>
                    <p>{`${Math.floor(maxTemperature)}°`}</p>
                </div>
            </div>
            <p className="rain">{`${rainSum} mm`}</p>
        </div>
    )
}

export default DayCard;
import { useState } from 'react'
import './App.css'
import SelectCity from './components/select-city/SelectCity'
import CurrentWeather from './components/current-weather/CurrentWeather';
import WeatherForecast from './components/weather-forecast/WeatherForecast';

function App() {
  const [selectedCity, setSelectedCity] = useState({ name: "Amsterdam", latitude: 52, longitude: 4 });

  return (
    <div>
      <h1>Weersverwachting</h1>
      <SelectCity selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <div className="weather-container">
        <div className="current-weather-container">
          <h2 className="city-name">{selectedCity.name}</h2>
          <div className="photo-div">
            <CurrentWeather selectedCity={selectedCity} />
            <img className="city-photo" src={`/${selectedCity.name.toLowerCase()}.jpg`} alt={selectedCity.name} />
          </div>
        </div>
        <h2 className="forecast-title">5-daagse verwachting</h2>
        <WeatherForecast selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default App

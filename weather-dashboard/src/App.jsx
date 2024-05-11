import { useState } from 'react'
import './App.css'
import SelectCity from './components/select-city/SelectCity'
import CurrentWeather from './components/current-weather/CurrentWeather';
import WeatherForecast from './components/weather-forecast/WeatherForecast';

function App() {
  const [selectedCity, setSelectedCity] = useState({name: "Amsterdam", latitude: 52, longitude: 4});

  return (
    <div className="app">
      <h1>Weersverwachting</h1>
      <SelectCity selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <div className="today">
        <CurrentWeather selectedCity={selectedCity} />
        <img className="city-photo" src={"/" + selectedCity.name.toLowerCase() + ".jpg"} alt={selectedCity.name} />
      </div>
      <WeatherForecast selectedCity={selectedCity} />
    </div>
  );
}

export default App

import React, { useState } from 'react';

function SelectCity({ selectedCity, setSelectedCity }) {
    const cities = [
        {name: "Amsterdam", latitude: 52, longitude: 4},
        {name: "Parijs", latitude: 48, longitude: 2},
        {name: "Londen", latitude: 51, longitude: 0},
        {name: "Stockholm", latitude: 59, longitude: 18},
        {name: "Berlijn", latitude: 52, longitude: 13},
        {name: "Rome", latitude: 41, longitude: 12}];

    const cityOptions = cities.map(city => (
        <option value={city.name} key={city.name}>{city.name}</option>
    ));

    function handleChange(e) {
        const selectedCityName = e.target.value;
        const selectedCityObject = cities.find(city => city.name === selectedCityName);
        setSelectedCity(selectedCityObject);
    }

  return (
    <>
        <h2>{selectedCity.name}</h2>
        <select value={selectedCity.name} onChange={handleChange}>{cityOptions}</select>
    </>
  );
}

export default SelectCity;

import React from 'react';

const WeatherComponent = ({ weatherData }) => {
    const { name, main, weather } = weatherData;

    return (
        <div>
            <h2>Weather Details</h2>
            <p>Location: {name}</p>
            <p>Temperature: {main.temp_max}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Description: {weather.map(v => v.description)}</p>
        </div>
    );
};

export default WeatherComponent;

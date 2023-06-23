const DetailComponent = ({ country, weather }) => {
    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ color: '#333' }}>Country Details</h2>

            <div>
                <h3 style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>Country:</h3>
                <p>Common Name: {country.name.common}</p>
                <p>Official Name: {country.name.official}</p>
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Population: {country.population}</p>
                <p>Area: {country.area}</p>
                <p>Languages: {Object.values(country.languages).join(', ')}</p>
                <img style={{ width: '100px', height: 'auto', marginTop: '10px' }} src={country.flags.svg} alt="Country Flag" />
            </div>

            <div>
                <h3 style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>Weather:</h3>
                <p>City: {country.capital}</p>
                <p>Main: {weather.main.temp}</p>
                <p>Description: {weather.weather[0].description}</p>
                <p>Temperature: {weather.main.temp} Celsius</p>
                <p>Feels Like: {weather.main.feels_like}</p>
                <p>Min Temperature: {weather.main.temp_min}</p>
                <p>Max Temperature: {weather.main.temp_max}</p>
                <p>Pressure: {weather.main.pressure}</p>
                <p>Humidity: {weather.main.humidity}</p>
                <p>Wind Speed: {weather.wind.speed}</p>
                <p>Wind Direction: {weather.wind.deg}</p>
                <p>Visibility: {weather.visibility}</p>
                <img style={{ width: '50px', height: 'auto', marginTop: '10px' }} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather?.[0].description}/>
            </div>
        </div>
    );
};

export default DetailComponent;


import React, {useState} from 'react';

const Basic = ({countries, filter, handleCardClick}) => {
    const limit = 10;

    // Filter countries based on name or official name
    const filteredCountries = countries.filter((country) => {
        const name = country.name.common.toLowerCase();
        const officialName = country.name.official.toLowerCase();
        const filterText = filter.toLowerCase();
        return name.includes(filterText) || officialName.includes(filterText);
    });

    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (countryName) => {
        setHoveredCard(countryName);
    };

    return (
        <div>
            <h2>Countries</h2>
            {   filteredCountries.length <= limit ?
                filteredCountries.map((country) => (
                <div key={country.name.common}
                     style={{
                         backgroundColor: hoveredCard === country.name.common ? '#e8e3e3' : '#ffffff',
                         borderRadius: '4px',
                         boxShadow: hoveredCard === country.name.common ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
                         padding: '16px',
                         marginBottom: '16px',
                         transition: 'box-shadow 0.3s ease',
                     }}>
                    <a
                        href={`#${country.name.common}`}
                        onClick={() => handleCardClick(country.name.common, country.capital[0])}
                        onMouseEnter={() => handleCardHover(country.name.common)}
                        onMouseLeave={() => handleCardHover(null)}

                    >
                        <h3>{country.name.common}</h3>
                        <p>Official Name: {country.name.official}</p>
                        <p>Capital: {country.capital}</p>
                    </a>
                </div>
            ))
                :
                <div></div>
            }
        </div>
    );
};

export default Basic;

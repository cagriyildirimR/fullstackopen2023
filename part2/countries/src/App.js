import {useEffect, useState} from "react";
import Basic from "./component/Country/Basic";
import {fetchAll, weather} from "./service/api";
import DetailComponent from "./component/Country/Detail";

function App() {

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [showDetail, setShowDetail] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [weathers, setWeathers] = useState(null);

    const submitHandler = () => {
        setCountries([])
    }

    const handleSetFilter = (e) => {
        setFilter(e.target.value)
        setShowDetail(false)
    }

    useEffect(() => {
        fetchAll().then(data => {
                setCountries(data)
            }
        )
    }, [])

    console.log(`Data: ${countries}`)
    console.log('Countries length:', countries.length); // Check the length of the countries array

    const handleCardClick = (countryName, capital) => {
        weather(capital).then(response => {
            setWeathers(response.data);
            setShowDetail(true);
        })
        const country = countries.find(
            (country) => country.name.common === countryName
        );
        setSelectedCountry(country);
    };

    console.log(`Weather: ${weathers}`)


    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                <label htmlFor="country">Countries:</label>
                <input id="country" type="text" value={filter} onChange={handleSetFilter}/>
                <input id="submit" type="button" value="Submit"/>
            </form>
            <h2>List</h2>
            {showDetail ? (
                <DetailComponent country={selectedCountry} weather={weathers}/>
            ) : (
                <Basic
                    countries={countries}
                    filter={filter}
                    handleCardClick={handleCardClick}
                />
            )}
        </div>
    );
}

export default App;

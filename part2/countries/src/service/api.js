import axios from "axios";

const URL = "https://studies.cs.helsinki.fi/restcountries/api/"

export const fetchAll = () => {
    return axios.get(URL + "all").then(response =>
        response.data
    )
}

// export const fetch = (country) => {
//     return axios.get(URL + `name/${country}`).then(response =>
//         response.data
//     )
// }

export const weather = (country) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=metric`)
}
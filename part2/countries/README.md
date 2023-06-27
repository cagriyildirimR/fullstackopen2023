# Countries App

The Countries App is a single-page application that allows users to search for countries and view detailed information about them. It provides a simple and intuitive interface for exploring different countries and their details.

## Installation

To get started with the Countries App, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Obtain an API key from the OpenWeather API. You can sign up for an API key at [OpenWeatherMap](https://openweathermap.org/).
5. Create a file named `.env` in the project root directory.
6. Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:

   ```
   REACT_APP_OPEN_WEATHER_API=YOUR_API_KEY
   ```

7. Save the `.env` file.
8. Start the application by running the following command:

   ```
   npm start
   ```

9. The Countries App will open in your default browser at `http://localhost:3000`.

## Usage

The Countries App provides a search bar at the top of the page. Users can enter the name of a country they are interested in and the app will display a list of at most 10 countries related to the search query.

1. Enter a country name in the search bar.
2. The app will dynamically update the list of countries below the search bar based on the search query.
3. Click on a country card to view detailed information about that country and weather of capital city.
4. To perform another search, simply enter a new query in the search bar.
5. The app will return to the listing of countries matching the new search query.

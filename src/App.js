import './App.css';
import React, { useState } from "react";
import axios from "axios";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
      .then((res) => {
        setWeatherData(res.data);
        setError(null);
      })
      .catch((err) => setError("Invalid city name"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>       
          <p>Temperature: {weatherData.main.temp} &#8451;</p>
          <p>{weatherData.weather[0].description}</p>
          <p>Feels like: {weatherData.main.feels_like} &#8451;</p>
        </div>
      )}
    </div>
  );
}
export default App;

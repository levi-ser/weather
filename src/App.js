import './App.css';
import React, { Component  } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

import WeatherData from "./components/WeatherData";

class App extends Component {
  state = {
    city: "",
    weatherData: null,
    error: null,
  };

  handleSubmit = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
      .then((res) => {
        this.setState({ weatherData: res.data, error: null });
      })
      .catch((err) => this.setState({ error: "Invalid city name" }));
  };

  render() {
    const { weatherData, error } = this.state;

    return (
      <div>
        <SearchBar onSearch={this.handleSubmit} />
        {error && <p>{error}</p>}
        {weatherData && <WeatherData data={weatherData} />}
      </div>
    );
  }
}

export default App;
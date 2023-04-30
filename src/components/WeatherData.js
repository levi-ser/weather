import React from "react";

function WeatherData({ data }) {
  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp} &#8451;</p>
      <p>{data.weather[0].description}</p>
      <p>Feels like: {data.main.feels_like} &#8451;</p>
    </div>
  );
}

export default WeatherData;
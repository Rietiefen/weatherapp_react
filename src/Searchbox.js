import React, { useState } from "react";
import "./searchbox.css";
import axios from "axios";
import App from "./App";
import Weekly from "./Weekly";

export default function Searchbox(props) {
  const [allWeatherData, setAllWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setAllWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temperature: Math.round(response.data.main.temp),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (allWeatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-12">
            <div className="searchBar">
              <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group mx-sm-3 mb-2 enteracity">
                  <input
                    type="search"
                    class="form-control"
                    autoFocus="on"
                    id="inputacity"
                    placeholder="Enter a city"
                    onChange={handleCityChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mb-2 submitbutton"
                >
                  🔍
                </button>
              </form>
              <button id="currentlocation"> Current </button>
            </div>
          </div>
        </div>
        <App data={allWeatherData} />
        <Weekly coordinates={allWeatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

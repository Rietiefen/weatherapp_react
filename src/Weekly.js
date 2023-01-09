import React, { useState, useEffect } from "react";
import "./weekly.css";
import axios from "axios";

import ForecastDay from "./ForecastDay";

export default function Weekly(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    // console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "a43564c91a6c605aeb564c9ed02e3858";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}

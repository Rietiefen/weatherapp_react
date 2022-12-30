import React from "react";
import "./App.css";
// import axios from "axios";
// import Searchbox from "./Searchbox";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4 main_city">
            <span className="cityname">{props.data.city}</span>
            <div className="col-5 dow_time lastUpdated">
              Last Updated: <span className="cityDate">Monday</span>
            </div>
            <div className="col-5 dow_time cityTime">13:30</div>
          </div>

          <div className="col-3 main_weather">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="0"
              id="icon"
            />
            <div className="temparature">
              <span id="mainTemp">{props.data.temperature}</span>{" "}
              <span className="tempC">℃</span>
            </div>
          </div>
          <div className="col-3 high_low_precipitaion">
            <div>
              <span className="red">↑</span> :{" "}
              <span className="highest_temp">33</span>℃
            </div>
            <div>
              <span className="blue">↓</span> :{" "}
              <span className="lowest_temp">24</span>℃
            </div>
            <div>
              🌬 : <span className="wind">{props.data.wind}</span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

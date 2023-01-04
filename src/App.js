import React from "react";
import "./App.css";
import DisplayDate from "./DisplayDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
// import Searchbox from "./Searchbox";
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
              Last Updated: <span className="cityDate"></span>
            </div>
            <div className="col-5 dow_time cityTime">
              <DisplayDate date={props.data.date} />
            </div>
          </div>
          <div className="col-2">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-3 main_weather">
            <Temperature celsius={props.data.temperature} />
          </div>
          <div className="col-3 high_low_precipitaion">
            <div>
              <span className="red">↑</span> :{" "}
              <span className="highest_temp">{props.data.maxTemp}</span>℃
            </div>
            <div>
              <span className="blue">↓</span> :{" "}
              <span className="lowest_temp">{props.data.minTemp}</span>℃
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

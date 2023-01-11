import React, { useState } from "react";
import "./temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span id="mainTemp">{Math.round(props.celsius)}</span>{" "}
        <span className="tempC">
          {" "}
          <span className="temp">
            <a href="/" onClick={showCelsius}>
              ℃
            </a>
          </span>
        </span>{" "}
        |{" "}
        <span className="tempF">
          <a href="/" onClick={showFahrenheit}>
            <span className="temp">°F</span>
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <span id="mainTemp">{Math.round(fahrenheit)}</span>{" "}
        <span className="tempC">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
        </span>{" "}
        |{" "}
        <span className="tempF">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}

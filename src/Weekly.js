import "./weekly.css";
import axios from "axios";

export default function Weekly() {
  function getForecast(coordinates) {
    let apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);
  }

  function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.getElementById("forecast");
    let forecastHTML = `<div className="row">`;

    function updateDate() {
      let date = new Date();
      let dayIndex = date.getDay();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let showDate = days[dayIndex];
      document.querySelector(".cityDate").innerHTML = showDate;
    }
    updateDate();

    function formatDay(timestamp) {
      let date = new Date(timestamp * 1000);
      let day = date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      return days[day];
    }

    forecast.forEach(function (forecastDay, index) {
      if (index > 0 && index < 7) {
        forecastHTML =
          forecastHTML +
          `
            <div className="col-2 weeklyweather_frame">
              ${formatDay(forecastDay.dt)}
              <div className="row">

                <div className="col-6 weeklydetails symbol"><img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42" />
        </div>
                <div className="col-6 weeklydetails"><small><b>${Math.round(
                  forecastDay.temp.max
                )}℃</b><br />${Math.round(forecastDay.temp.min)}℃</small></div>
              </div>
            </div>
            `;
      }
    });

    forecastHTML = forecastHTML + `<div />`;
    forecastElement.innerHTML = forecastHTML;
  }
}

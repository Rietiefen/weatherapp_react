import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-4 main_city">
            <span class="cityname">Tokyo, Japan</span>
            <div class="col-5 dow_time lastUpdated">
              Last Updated: <span class="cityDate">Monday</span>
            </div>
            <div class="col-5 dow_time cityTime">13:30</div>
          </div>

          <div class="col-3 main_weather">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="0"
              id="icon"
            />
            <div class="temparature">
              <span id="mainTemp">32</span> <span class="tempC">℃</span>
            </div>
          </div>
          <div class="col-3 high_low_precipitaion">
            <div>
              <span class="red">↑</span> : <span class="highest_temp">33</span>℃
            </div>
            <div>
              <span class="blue">↓</span> : <span class="lowest_temp">24</span>℃
            </div>
            <div>
              🌬 : <span class="wind">15</span> km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

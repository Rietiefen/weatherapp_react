import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Searchbox from "./Searchbox";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
// import Weekly from "./Weekly";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="borderline">
      <div class="container">
        <Searchbox />
        {/* <App /> */}
        {/* <Weekly /> */}
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

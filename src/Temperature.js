import React from "react";

export default function Temperature(props) {
  return (
    <div className="temperature">
      <span id="mainTemp">{Math.round(props.celsius)}</span>{" "}
      <span className="tempC">℃</span>
    </div>
  );
}

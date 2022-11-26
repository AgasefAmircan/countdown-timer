import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  return (
    <div className="container">
      <div className="timer">
        <h1>HAPPY NEW YEAR</h1>
        <p>T - MINUS:</p>
        <Countdown
          className="time"
          date={new Date("2022-12-31T00:00:00.896Z").getTime()}
        ></Countdown>
      </div>
    </div>
  );
};

export default Timer;

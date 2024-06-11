import React from "react";
import WeeklyDataMapping from "./WeeklyDataMapping";

const WeeklyWeatherData = ({ weatherReport }) => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="weekDataContainer">
      <div className="displayData">
        {arr.map((ele, i) => (
          <WeeklyDataMapping key={i} index={i} {...{weatherReport}} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeatherData;

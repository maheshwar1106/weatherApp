import React from "react";
import ImageLoading from "./ImageLoading";
import WeatherDescription from "./WeatherDescription";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let dayNo = d.getDay();

const WeeklyDataMapping = ({ index, weatherReport }) => {
  const day = days[(index + dayNo) % 7];
  const weatherDescData =
    Object.keys(weatherReport).length !== 0
      ? weatherReport.daily.weather_code[index]
      : "-1";
  const maxTemp =
    Object.keys(weatherReport).length !== 0
      ? `${weatherReport.daily.temperature_2m_max[index]}° - `
      : "";

  const minTemp =
    Object.keys(weatherReport).length !== 0
      ? `${weatherReport.daily.temperature_2m_min[0]}°`
      : "";

  return (
    <div className="dataMapping">
      <div className="dayDisplay">{day}</div>
      <div id="weatherImg" className="weather-pic">
        {/* {"Here is my image loading is done"} */}
        {
          <ImageLoading
            {...{ weatherReport }}
            index={index}
            singleData={false}
          />
        }
      </div>
      <WeatherDescription
        data={weatherDescData}
        index={index}
        singleData={false}
      />
      <div className="tempData">{` ${maxTemp}  ${minTemp}`}</div>
    </div>
  );
};

export default WeeklyDataMapping;

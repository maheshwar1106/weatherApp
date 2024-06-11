import React, { useState } from "react";
import wind from "../images/wind.svg";
import feels from "../images/feels-like.svg";
import humidity from "../images/humidity.svg";
import ImageLoading from "./ImageLoading";
import WeatherDescription from "./WeatherDescription";

const Midsection = ({ weatherReport }) => {
  const [unitType, setUnitType] = useState("C");
  const weatherDescData =
    Object.keys(weatherReport).length !== 0
      ? weatherReport.daily.weather_code[0]
      : "-1";
  console.log("My weather report is -->", weatherReport);
  return (
    <div className="midlevel-container">
      <div className="weatherNo">
        <h1>
          {Object.keys(weatherReport).length !== 0
            ? unitType === "C"
              ? Math.ceil(
                  (weatherReport.daily.temperature_2m_max[0] +
                    weatherReport.daily.temperature_2m_min[0]) /
                    2
                )
              : Math.round(
                  (9 / 5) *
                    ((weatherReport.daily.temperature_2m_max[0] +
                      weatherReport.daily.temperature_2m_min[0]) /
                      2) +
                    32
                )
            : " "}
        </h1>
        <ul>
          <li className="weatherUnit">
            <button
              onClick={() => setUnitType("C")}
              style={{ color: unitType == "C" ? "white" : "grey" }}
            >
              °C
            </button>{" "}
            <p>|</p>{" "}
            <button
              onClick={() => setUnitType("F")}
              style={{ color: unitType == "F" ? "white" : "grey" }}
            >
              °F
            </button>
          </li>
          <li>
            {
              <WeatherDescription
                data={weatherDescData}
                index={0}
                singleData={true}
              />
            }
          </li>
        </ul>
      </div>
      <div className="weatherDetails">
        <div className="weatherBlock">
          <div id="weatherImg" className="weather-pic">
            {/* {"Here is my image loading is done"} */}
            {<ImageLoading {...{ weatherReport }} index={0} singleData={true} />}
          </div>
          <ul>
            <li>
              <img src={feels} alt="feels" />
              <h4>{`Feels like: ${
                Object.keys(weatherReport).length !== 0 &&
                weatherReport.daily.temperature_2m_max[0]
              }`}</h4>
            </li>
            <li>
              <img src={humidity} alt="humidity" />
              <h4>{` Humidity: ${
                Object.keys(weatherReport).length !== 0 &&
                weatherReport.daily.precipitation_probability_mean[0]
              }%`}</h4>
            </li>
            <li>
              <img src={wind} alt="wind" />
              <h4>{`Wind: ${
                Object.keys(weatherReport).length !== 0 &&
                weatherReport.daily.wind_speed_10m_max[0]
              } km/h`}</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Midsection;

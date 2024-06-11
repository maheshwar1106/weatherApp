import React from "react";

const weatherCodes = [
  0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 61, 63, 65, 66, 67, 71, 73, 75,
  77, 80, 81, 82, 85, 86, 95, 96, 99,
];

const weatherDescription = [
  "Clear sky",
  "Mainly clear",
  "Partly cloudy",
  "Overcast",
  "Fog",
  "depositing rime fog",
  "Light drizzle",
  "Moderate drizzle",
  "Dense intensity drizzle",
  "Light freezing drizzle",
  "Dense Intensity drizzle",
  "Slight rain",
  "Moderate Rain",
  "Heavy intensity rain",
  "Light freezing rain",
  "Heavy intensity freezing rain",
  "Slight snow fall",
  "Moderate snow fall",
  "Heavy intensity snow fall",
  "Snow grains",
  "Slight rain showers",
  "Moderate rain showers",
  "Violent rain showers",
  "Snow showers slight",
  "snow showers heavy",
  "Slight thunderstorm",
  "Moderate thunderstorm",
  "Slight thunderstorm",
  "Heavy hail thunderstorm",
];
const WeatherDescription = ({ data,singleData }) => {
  const index = weatherCodes.indexOf(data);
  return <div className={singleData?"":"weatherDesc"}>{weatherDescription[index]}</div>;
};

export default WeatherDescription;

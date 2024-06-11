import React, { useState, useEffect } from "react";
import clearSkyDay from "../background-images/weather-icons/clearsky-day.svg";
import clearSkyNight from "../background-images/weather-icons/clearsky-day.svg";
import clearcloudDay from "../background-images/weather-icons/clearcloud-day .svg";
import clearcloudNight from "../background-images/weather-icons/clearcloud-night.svg";
import cloudyDay from "../background-images/weather-icons/cloudy-day.svg";
import cloudyNight from "../background-images/weather-icons/cloudy-night.svg";
import drizzle from "../background-images/weather-icons/drizzle.svg";
import overCastDay from "../background-images/weather-icons/overcast-day.svg";
import overCastNight from "../background-images/weather-icons/overcast-night.svg";
import rainyDay from "../background-images/weather-icons/rainy-day.svg";
import rainyNight from "../background-images/weather-icons/rainy-night.svg";
import snowDay from "../background-images/weather-icons/snow-day.svg";
import snowNight from "../background-images/weather-icons/snow-night.svg";
import thunderStorm from "../background-images/weather-icons/thunderstorm.svg";
import fogDay from "../background-images/weather-icons/fog-day.svg";
import fogNight from "../background-images/weather-icons/fog-night.svg";

const imgCodes = [
  "clearSky",
  "clearCloud",
  "cloudy",
  "overCast",
  "fog",
  "fog",
  "drizzle",
  "drizzle",
  "drizzle",
  "drizzle",
  "drizzle",
  "rainy",
  "rainy",
  "rainy",
  "rainy",
  "rainy",
  "snow",
  "snow",
  "snow",
  "snow",
  "rainy",
  "rainy",
  "rainy",
  "snow",
  "snow",
  "thunderStorm",
  "thunderStorm",
  "thunderStorm",
];

const weatherCodes = [
  0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 61, 63, 65, 66, 67, 71, 73, 75,
  77, 80, 81, 82, 85, 86, 95, 96, 99,
];

const d = new Date();
let period = d.getHours() > 6 && d.getHours() < 18 ? "AM" : "PM";

const ImageLoading = ({ weatherReport, index, singleData }) => {
  const [imageState, setImageState] = useState(thunderStorm);

  useEffect(() => {
    index =
      Object.keys(weatherReport).length !== 0
        ? weatherCodes.indexOf(weatherReport.daily.weather_code[index])
        : "";
    getImage(index);
  }, [weatherReport]);

  const getImage = (index) => {
    let weather = imgCodes[index] + period;

    switch (weather) {
      case "clearSkyAM":
        return setImageState(clearSkyDay);
      case "clearSkyPM":
        return setImageState(clearSkyNight);
      case "clearCloudAM":
        return setImageState(clearcloudDay);
      case "clearCloudPM":
        return setImageState(clearcloudNight);
      case "cloudyAM":
        return setImageState(cloudyDay);
      case "cloudyPM":
        return setImageState(cloudyNight);
      case "overCastAM":
        return setImageState(overCastDay);
      case "overCastPM":
        return setImageState(overCastNight);
      case "fogAM":
        return setImageState(fogDay);
      case "fogPM":
        return setImageState(fogNight);
      case "drizzleAM":
        return setImageState(drizzle);
      case "drizzlePM":
        return setImageState(drizzle);
      case "rainyAM":
        return setImageState(rainyDay);
      case "rainyPM":
        return setImageState(rainyNight);
      case "snowAM":
        return setImageState(snowDay);
      case "snowPM":
        return setImageState(snowNight);
      case "thunderStormAM":
        return setImageState(thunderStorm);
      case "thunderStormPM":
        return setImageState(thunderStorm);
    }
  };

  return (
    <img
      style={{
        width: singleData ? "240px" : "100px",
        height: singleData ? "240px" : "100px",
        
      }}
      className="iconImg"
      src={imageState}
      alt="state not working"
    />
  );
};

export default ImageLoading;

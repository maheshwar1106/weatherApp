import React, { useEffect, useRef, useState } from "react";
import Location from "../images/location-light .svg";
import axios from "axios";
import Midsection from "./Midsection";
import WeeklyWeatherData from "./WeeklyWeatherData";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
let time = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
  timeStyle: "short",
  hourCycle: "h12",
});

let dateformat = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  timeZoneName: "short",
});

let locDate = dateformat.format(new Date());
let locDateArr = locDate.split("/");
let getMonth = locDateArr[0];
let getYear = locDateArr[2].split(",");

let day = days[d.getDay()];
let month = months[parseInt(getMonth) - 1];
let year = getYear[0];
let date = locDateArr[1];

let isDay = d.getHours() > 6 && d.getHours() < 18 ? "AM" : "PM";

const WeatherApp = () => {
  const valueRef = useRef("Nandanam");
  const [location, setLocation] = useState(valueRef.current);
  const [coOrdinates, setCoOrdinates] = useState({});
  const [weatherReport, setWeatherReport] = useState({});

  useEffect(() => {
    const initialFetch = async () => {
      try {
        let response = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`
        );
        let co_ordinates = response.data.results[0];
        let weatherReport = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${co_ordinates.latitude}&longitude=${co_ordinates.longitude}&daily=temperature_2m_min&daily=temperature_2m_max&daily=precipitation_probability_mean&daily=weather_code&daily=wind_speed_10m_max`
        );
        setWeatherReport(weatherReport.data);
        setCoOrdinates(co_ordinates);
         time = new Date().toLocaleString("en-US", {
          timeZone: `${co_ordinates.timezone}`,
          timeStyle: "short",
          hourCycle: "h24",
        });
        let hour = parseInt(time[0] + time[1]);
        isDay = hour > 6 && hour < 18 ? "AM" : "PM";
        dateformat = new Intl.DateTimeFormat("en-US", {
          timeZone: `${co_ordinates.timezone}`,
          timeZoneName: "short",
        });
        locDate = dateformat.format(new Date());
        locDateArr = locDate.split("/");
        getMonth = locDateArr[0];
        getYear = locDateArr[2].split(",");
        day = days[d.getDay()];
        month = months[parseInt(getMonth) - 1];
        year = getYear[0];
        date = locDateArr[1];
        console.log("My coordinates are -->", co_ordinates);
      } catch (err) {
        console.log("There is an error in an location", err);
      }
    };

    initialFetch();
  }, [location]);

  const submitHandler = () => {
    const searchLoc = valueRef.current.value;
    setLocation(searchLoc);
  };

  return (
    <div className="container">
      <div className={isDay === "AM" ? "weather-app" : "weather-app-night"}>
        {/* Header section of the weather app */}
        <div className="weather-header">
          <div className="divisionOne">
            <div className="child">
              <h1>{coOrdinates.latitude ? coOrdinates.name : " "}</h1>
              <h2> {`${day} ${date} ${month} ${year} | ${time} PM`} </h2>
            </div>
          </div>
          <div className="divisionTwo">
            <div className="child">
              <form className="search-form">
                <input
                  name="location"
                  ref={valueRef}
                  type="text"
                  placeholder="Type a city or location"
                />
                <button
                  onClick={submitHandler}
                  type="button"
                  className="seachBar"
                >
                  Search
                </button>
              </form>
              {/* <button className="locationBar">
                <img src={Location} alt="location" />
              </button> */}
            </div>
          </div>
        </div>
        {/* mid section of our weather app */}
        <Midsection {...{ weatherReport }} />

        {/* Weekly weather report displayed here */}
        <WeeklyWeatherData {...{ weatherReport }} />
      </div>
    </div>
  );
};

export default WeatherApp;

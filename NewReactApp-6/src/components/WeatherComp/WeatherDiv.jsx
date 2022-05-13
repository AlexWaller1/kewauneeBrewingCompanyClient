import React from 'react'
import WeatherPage from './WeatherPage';
import { useState, useEffect} from "react";

 const WeatherDiv = () => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const getWeather = async() => {
        const apiWeather = await fetchWeather();

        setWeather(apiWeather);
        }

        getWeather();
    }, []);

    const fetchWeather = async () => {
     
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${"Kewaunee"}&units=imperial&appid=db880e70c46fa251bd18b9c84cfba4cc`);

        const data = await res.json();

        return data;
    }

    fetchWeather();

    console.log(weather);


  return (
    <WeatherPage weather={weather}/>
  )
}

export default WeatherDiv;

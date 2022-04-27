import React from 'react'
import WeatherPageHeader from './WeatherPageHeader';
import { useState, useEffect} from "react"

 const WeatherPage = () => {
  return (
    <div className='weather-page-div'>
        <WeatherPageHeader text="Check The Weather For Outdoor Dining Opportunities"/>
    </div>
  )
}

export default WeatherPage;

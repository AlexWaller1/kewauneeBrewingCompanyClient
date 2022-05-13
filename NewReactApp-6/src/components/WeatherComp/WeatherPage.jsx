import React from 'react'
import WeatherPageHeader from './WeatherPageHeader';
import { useState, useEffect} from "react"

 const WeatherPage = ({ weather }) => {

  let degree = "56°F";

  //let firstDayTemp = `${Math.round(weather["list"][0]["main"].temp)}°F`;

  if (1 === 1) {

  return (
     <div className='weather-page-div'>
         <WeatherPageHeader text="Check The Weather For Outdoor Dining Opportunities"/>

         {weather["list"] != undefined ? <div>
          <h2>{`${weather["city"].name} Weather For Next Seven Days`}</h2>
         <br />
         <ul id="weather-info-list">
          
           <div id="weather-list-div-1">
             <h4>{weather["list"][0]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][0]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
           
         

           </div>
         </ul>

         </div> : <h4>Weather Information Incoming</h4>}
         
         {/* <h2>{`${weather["city"].name} Weather For Next Seven Days`}</h2>
         <br />
         <ul id="weather-info-list">
          
           <div id="weather-list-div-1">
             <h4>{weather["list"][0]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][0]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
           
         

           </div>
         </ul> */}
     </div>
  )
        }
}

export default WeatherPage;

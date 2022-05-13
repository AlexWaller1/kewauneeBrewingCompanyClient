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
         <ul id="weather-info-list" >
          <li className="weather-list-item">
           <div id="weather-list-div-1">
             <h4>{weather["list"][0]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][0]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
             <h4>{`${Math.round(weather["list"][0]["main"].temp)}°F`}</h4>
             <h4>{weather["list"][0]["weather"][0].description}</h4>
           </div>
           </li>
           <li className='weather-list-item'>
           <div id="weather-list-div-2">
             <h4>{weather["list"][8]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][8]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
             <h4>{`${Math.round(weather["list"][8]["main"].temp)}°F`}</h4>
             <h4>{weather["list"][8]["weather"][0].description}</h4>
           </div>
           </li>
           <li className='weather-list-item'>
           <div id="weather-list-div-3">
             <h4>{weather["list"][16]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][16]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
             <h4>{`${Math.round(weather["list"][16]["main"].temp)}°F`}</h4>
             <h4>{weather["list"][16]["weather"][0].description}</h4>
           </div>
           </li>
           <li className="weather-list-item">
           <div id="weather-list-div-4">
             <h4>{weather["list"][24]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][24]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
             <h4>{`${Math.round(weather["list"][24]["main"].temp)}°F`}</h4>
             <h4>{weather["list"][24]["weather"][0].description}</h4>
           </div>
           </li>
           <li className='weather-list-item'>
           <div id="weather-list-div-5">
             <h4>{weather["list"][32]["dt_txt"]}</h4>
             <img src={`http://openweathermap.org/img/wn/${weather["list"][32]["weather"][0]["icon"]}@4x.png`} alt="weather image" />
             <h4>{`${Math.round(weather["list"][32]["main"].temp)}°F`}</h4>
             <h4>{weather["list"][32]["weather"][0].description}</h4>
           </div>
           </li>
         </ul>

         </div> : <h2>Weather Information Incoming</h2>}
         
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

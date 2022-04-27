import React from 'react'
import HomePageHeader from './HomePageHeader';
import HomePageParDiv from './HomePageParDiv';
import {useState, useEffect} from "react";

 const HomePage = () => {
  return (
    <div className='home-page-div'>
      <HomePageHeader text="Welcome to the Kewaunee Brewing Company"/>
      <HomePageParDiv />
    </div>
  )
}

export default HomePage;

import React from 'react'
import HomePageHeader from './HomePageHeader';
import {useState, useEffect} from "react";

 const HomePage = () => {
  return (
    <div className='home-page-div'>
      <HomePageHeader text="Welcome to the Kewaunee Brewing Company"/>
    </div>
  )
}

export default HomePage;

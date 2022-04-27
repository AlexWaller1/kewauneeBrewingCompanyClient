import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './HomeComp/HomePage';
import MenuPage from './MenuComp/MenuPage';
import ReviewsPage from './ReviewsComp/ReviewsPage';
import WeatherPage from './WeatherComp/WeatherPage';
import AboutPage from './AboutComp/AboutPage';
import ContactPage from './ContactComp/ContactPage';


 const RouterLinks = () => {
  return (
    
     <Routes>
       <Route  path="/" element={<HomePage />}/>
       <Route  path="/menu" element={<MenuPage />}/>
       <Route  path="/reviews" element={<ReviewsPage />}/>
       <Route  path="/weather" element={<WeatherPage />}/>
       <Route  path="/about" element={<AboutPage />}/>
       <Route  path="/contact" element={<ContactPage />}/>
     </Routes>
    
  )
}

export default RouterLinks;

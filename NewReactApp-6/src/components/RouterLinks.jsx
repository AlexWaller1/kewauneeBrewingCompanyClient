import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './HomeComp/HomePage';
import MenuPage from './MenuComp/MenuPage';
import ReviewsPage from './ReviewsComp/ReviewsPage';
import WeatherPage from './WeatherComp/WeatherPage';
import AboutPage from './AboutComp/AboutPage';
import ContactPage from './ContactComp/ContactPage';


 const RouterLinks = ({ userCart, cartCount}) => {
  return (
    
     <Routes>
       <Route  path="/" element={<HomePage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/menu" element={<MenuPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/reviews" element={<ReviewsPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/weather" element={<WeatherPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/about" element={<AboutPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/contact" element={<ContactPage userCart={userCart} cartCount={cartCount}/>}/>
     </Routes>
    
  )
}

export default RouterLinks;

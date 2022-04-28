import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './HomeComp/HomePage';
import MenuPage from './MenuComp/MenuPage';
import ReviewsPage from './ReviewsComp/ReviewsPage';
import WeatherPage from './WeatherComp/WeatherPage';
import AboutPage from './AboutComp/AboutPage';
import ContactPage from './ContactComp/ContactPage';
import CartPage from './CartComp/CartPage';


 const RouterLinks = ({ userCart, cartCount, appetizers, mainCourses, desserts, addToCart, addToCart2, addToCart3}) => {
  return (
    
     <Routes>
       <Route  path="/" element={<HomePage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/menu" element={<MenuPage userCart={userCart} cartCount={cartCount} appetizers={appetizers} mainCourses={mainCourses} desserts={desserts} addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3}/>}/>
       <Route  path="/reviews" element={<ReviewsPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/weather" element={<WeatherPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/about" element={<AboutPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/contact" element={<ContactPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/cart" element={<CartPage userCart={userCart} cartCount={cartCount}/>}/>
     </Routes>
    
  )
}

export default RouterLinks;

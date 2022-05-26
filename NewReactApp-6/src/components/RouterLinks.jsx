import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './HomeComp/HomePage';
import MenuPage from './MenuComp/MenuPage';
import ReviewsPage from './ReviewsComp/ReviewsPage';
import WeatherPage from './WeatherComp/WeatherPage';
import WeatherDiv from './WeatherComp/WeatherDiv';
import AboutPage from './AboutComp/AboutPage';
import ContactPage from './ContactComp/ContactPage';
import CartPage from './CartComp/CartPage';
import CartCheckoutDiv from './CartComp/CartCheckoutDiv';
import BeerDiv from './BeerComp/BeerDiv';


 const RouterLinks = ({ userCart, userCartNames, cartCount, appetizers, mainCourses, desserts, addToCart, addToCart2, addToCart3, deleteFromCart, takeFromCart, takeFromCart2, takeFromCart3, ales, lagers, porters, stouts, addBeerToCart, takeBeerFromCart}) => {
  return (
    
     <Routes>
       <Route  path="/" element={<HomePage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/menu" element={<MenuPage userCart={userCart} userCartNames={userCartNames} cartCount={cartCount} appetizers={appetizers} mainCourses={mainCourses} desserts={desserts} addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3} takeFromCart={takeFromCart} takeFromCart2={takeFromCart2} takeFromCart3={takeFromCart3}/>}/>
       <Route  path="/reviews" element={<ReviewsPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/weather" element={<WeatherDiv userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/about" element={<AboutPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/contact" element={<ContactPage userCart={userCart} cartCount={cartCount}/>}/>
       <Route  path="/cart" element={<CartPage userCart={userCart} cartCount={cartCount} deleteFromCart={deleteFromCart}/>}/>
       <Route  path="/checkout" element={<CartCheckoutDiv userCart={userCart}/>}/>
       <Route  path="/beers" element={<BeerDiv userCart={userCart} ales={ales} stouts={stouts} porters={porters} lagers={lagers} addBeerToCart={addBeerToCart} takeBeerFromCart={takeBeerFromCart}/>}/>
     </Routes>
    
  )
}

export default RouterLinks;

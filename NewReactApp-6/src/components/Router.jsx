import React from 'react'
import { Switch, Route} from "react-router-dom";
import HomePage from './HomeComp/HomePage';
import MenuPage from './MenuComp/MenuPage';
import ReviewsPage from './ReviewsComp/ReviewsPage';
import WeatherPage from './WeatherComp/WeatherPage';
import AboutPage from './AboutComp/AboutPage';
import ContactPage from './ContactComp/ContactPage';


 const Router = () => {
  return (
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/menu" component={MenuPage}/>
       <Route exact path="/reviews" component={ReviewsPage}/>
       <Route exact path="/weather" component={WeatherPage}/>
       <Route exact path="/about" component={AboutPage}/>
       <Route exact path="/contact" component={ContactPage}/>
     </Switch>
  )
}

export default Router;

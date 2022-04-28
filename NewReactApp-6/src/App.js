import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import RouterLinks from "./components/RouterLinks";
import { useState, useEffect } from "react";

function App() {

  const [userCart, setCart] = useState([]);

  const [cartCount, setCartCount] = useState({count: 0});

  const [appetizers, setAppetizers] = useState([
    {
        id: 1,
        name: "Buffalo Wings",
        img: "",
        price: 14.99
    },
    {
        id: 2,
        name: "Ultimate Stacked Nachos",
        img: "",
        price: 12.99
    },
    {
        id: 3,
        name: "Barria Tacos",
        img: "",
        price: 16.99
    },
    {
        id: 4,
        name: "Potstickers",
        img: "",
        price: 17.99
    }
])

const [mainCourses, setFoodMenu] = useState([
    {
        id: 1,
        name: "Cheese Burger and Fries",
        img: "",
        price: 15.99
    },
    {
        id: 2, 
        name: "Ultimate Turkey Club",
        img: "",
        price: 12.99
    },
    {
        id: 3,
        name: "Cowboy Ribeye",
        img: "",
        price: 34.99
    },
    {
        id: 4,
        name: "KBC Spare Ribs",
        img: "",
        price: 24.99
    }
]);

const [desserts, setDesserts] = useState([
    {
        id: 1,
        name: "Vanilla Sundae",
        img: "",
        price: 9.99
    },
    {
        id: 2,
        name: "Tiramasu",
        img: "",
        price: 14.99
    },
    {
        id: 3,
        name: "Chocolate Mousse Cake",
        img: "",
        price: 13.99
    },
    {
        id: 4,
        name: "Vanilla Lemon Cake",
        img: "",
        price: 12.99
    }
])

const addToCart = (id) => {
    console.log("Appetizer Added to Cart", "new", id);

    let newAppetizer = appetizers.filter(a1 => a1.id == id);

    setCart([...userCart, newAppetizer]);
}

const addToCart2 = (id) => {
    console.log("Main Course Added to Cart", "new", id);

    let newMainCourse = mainCourses.filter(m1 => m1.id == id);

    setCart([...userCart, newMainCourse]);
}

const addToCart3 = (id) => {
    console.log("Dessert Added to Cart", "new", id);

    let newDessert = desserts.filter(d1 => d1.id == id);

    setCart([...userCart, newDessert]);

}



  return (
    <Router>
      <div className="App">
      <Header text="Kewaunee Brewing Company" />
      
     
      </div>
      <NavLinks />

      <RouterLinks userCart={userCart} cartCount={cartCount} appetizers={appetizers} mainCourses={mainCourses} desserts={desserts} addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3}/>
      
    </Router>
  );
}

export default App;

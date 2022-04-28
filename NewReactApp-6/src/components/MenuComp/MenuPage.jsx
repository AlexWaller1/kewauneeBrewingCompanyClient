import React from 'react'
import MenuPageHeader from './MenuPageHeader'
import MenuListDiv from './MenuListDiv';
import MenuParagraphDiv from './MenuParagraphDiv';
import { useState, useEffect } from "react";

 const MenuPage = ({userCart, cartCount}) => {
    
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
        console.log("Appetizer Added to Cart", id);
    }

    const addToCart2 = (id) => {
        console.log("Main Course Added to Cart", id);
    }

    const addToCart3 = (id) => {
        console.log("Dessert Added to Cart", id);
    }



  return (
    <div className='menu-page-div'>
        <MenuPageHeader text="Take A Look At Our Menu"/>
        <MenuParagraphDiv />
        <MenuListDiv addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3} mainCourses={mainCourses} appetizers={appetizers} desserts={desserts} userCart={userCart} cartCount={cartCount}/>

    </div>
  )
}

export default MenuPage

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

    const addToCart = () => {
        console.log("Added to Cart");
    }

    const addToCart2 = () => {
        console.log("Added to Cart");
    }

  return (
    <div className='menu-page-div'>
        <MenuPageHeader text="Take A Look At Our Menu"/>
        <MenuParagraphDiv />
        <MenuListDiv addToCart={addToCart} mainCourses={mainCourses} appetizers={appetizers} userCart={userCart} cartCount={cartCount}/>

    </div>
  )
}

export default MenuPage

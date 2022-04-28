import React from 'react'
import MenuPageHeader from './MenuPageHeader'
import MenuListDiv from './MenuListDiv';
import MenuParagraphDiv from './MenuParagraphDiv';
import { useState, useEffect } from "react";

 const MenuPage = ({userCart, cartCount, appetizers, mainCourses, desserts, addToCart, addToCart2, addToCart3}) => {
    
    

  return (
    <div className='menu-page-div'>
        <MenuPageHeader text="Take A Look At Our Menu"/>
        <MenuParagraphDiv />
        <MenuListDiv addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3} mainCourses={mainCourses} appetizers={appetizers} desserts={desserts} userCart={userCart} cartCount={cartCount}/>

    </div>
  )
}

export default MenuPage

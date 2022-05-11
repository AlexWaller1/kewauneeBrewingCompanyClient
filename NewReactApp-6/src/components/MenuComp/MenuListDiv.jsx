import React from 'react'
import AppetizersHeader from './AppetizersHeader';
import AppetizersDiv from './AppetizersDiv';
import MainCourseDiv from './MainCourseDiv';
import DessertsDiv from './DessertsDiv';


 const MenuListDiv = ({ mainCourses, appetizers, desserts, addToCart, addToCart2, addToCart3, takeFromCart, takeFromCart2, takeFromCart3 }) => {
  return (
    <div id="menu-list-div">
      
      <AppetizersDiv  appetizers={appetizers} addToCart={addToCart} takeFromCart={takeFromCart} />
      
      <MainCourseDiv mainCourses={mainCourses} addToCart2={addToCart2} takeFromCart2={takeFromCart2} />
      <br />
      <DessertsDiv desserts={desserts} addToCart3={addToCart3} takeFromCart3={takeFromCart3}/>


    </div>
  )
}

export default MenuListDiv;

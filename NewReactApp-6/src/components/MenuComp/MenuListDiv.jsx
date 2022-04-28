import React from 'react'
import AppetizersHeader from './AppetizersHeader';
import AppetizersDiv from './AppetizersDiv';
import MainCourseDiv from './MainCourseDiv';
import DessertsDiv from './DessertsDiv';


 const MenuListDiv = ({ mainCourses, appetizers, desserts, addToCart, addToCart2, addToCart3 }) => {
  return (
    <div id="menu-list-div">
      
      <AppetizersDiv  appetizers={appetizers} addToCart={addToCart}/>
      
      <MainCourseDiv mainCourses={mainCourses} addToCart2={addToCart2}/>
      <br />
      <DessertsDiv desserts={desserts} addToCart3={addToCart3}/>


    </div>
  )
}

export default MenuListDiv;

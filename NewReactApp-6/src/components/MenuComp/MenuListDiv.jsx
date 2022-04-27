import React from 'react'
import AppetizersHeader from './AppetizersHeader';
import AppetizersDiv from './AppetizersDiv';
import MainCourseDiv from './MainCourseDiv';


 const MenuListDiv = ({ mainCourses, appetizers, addToCart, addToCart2 }) => {
  return (
    <div id="menu-list-div">
      
      <AppetizersDiv  appetizers={appetizers} addToCart={addToCart}/>
      

      <MainCourseDiv mainCourses={mainCourses} addToCart2={addToCart2}/>
    </div>
  )
}

export default MenuListDiv;

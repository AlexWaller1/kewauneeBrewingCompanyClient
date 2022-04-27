import React from 'react'
import AppetizersHeader from './AppetizersHeader';
import AppetizersDiv from './AppetizersDiv';
import MainCourseDiv from './MainCourseDiv';

 const MenuListDiv = ({ mainCourses, appetizers, addToCart }) => {
  return (
    <div id="menu-list-div">
      <AppetizersHeader />
      <AppetizersDiv  appetizers={appetizers} addToCart={addToCart}/>
      <MainCourseDiv mainCourses={mainCourses}/>
    </div>
  )
}

export default MenuListDiv;

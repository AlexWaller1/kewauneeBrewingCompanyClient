import React from 'react'
import MenuPageHeader from './MenuPageHeader'
import MenuListDiv from './MenuListDiv';
import MenuParagraphDiv from './MenuParagraphDiv';
import { useState, useEffect } from "react";

 const MenuPage = () => {
  return (
    <div className='menu-page-div'>
        <MenuPageHeader text="Take A Look At Our Menu"/>
        <MenuParagraphDiv />
        <MenuListDiv />

    </div>
  )
}

export default MenuPage

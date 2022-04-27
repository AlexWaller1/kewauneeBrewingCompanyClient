import React from 'react'
import { Link } from "react-router-dom";

 const NavLinks = () => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/menu">Our Menu</Link>
        </li>
        <li>
            <Link to="/reviews">Reviews</Link>
        </li>
        <li>
            <Link to="/weather">Outdoor Dining</Link>
        </li>
        <li>
            <Link to="/about">About KBS</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
    </ul>
  )
}

export default NavLinks;

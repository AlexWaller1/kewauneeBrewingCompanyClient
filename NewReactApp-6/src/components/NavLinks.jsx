import React from 'react'
import { Link } from "react-router-dom";

 const NavLinks = () => {
  return (
    <ul className="nav-links-list">
        <h4>
            <Link to="/">Home</Link>
        </h4>
        <h4>
            <Link to="/menu">Our Menu</Link>
        </h4>
        <h4>
            <Link to="/reviews">Reviews</Link>
        </h4>
        <h4>
            <Link to="/weather">Outdoor Dining</Link>
        </h4>
        <h4>
            <Link to="/about">About KBS</Link>
        </h4>
        <h4>
            <Link to="/contact">Contact Us</Link>
        </h4>
    </ul>
  )
}

export default NavLinks;

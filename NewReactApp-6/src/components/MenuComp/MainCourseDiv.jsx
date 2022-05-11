import React from 'react'
import AddMainCourseBtn from './AddMainCourseBtn';

const MainCourseDiv = ({ mainCourses, addToCart2, takeFromCart2 }) => {
  return (
    <div id="main-course-div">
        <h1 id="our-main-courses">Our Main Courses:</h1>
        <br />
        <ul>
            {mainCourses.map(m1 =>
                <div key={m1.id} id="main-course-div-2">
                    <h2>{m1.name}</h2>
                    <img src={m1.img} alt="Food Image" />
                    <h3>{m1.price}</h3>
                    <button className='btn btn-primary' id="main-course-btn" onClick={() => addToCart2(m1.id)}> Cart +</button>
                    <h3>{`Quantity: ${m1.quantity}`}</h3>
                    <button className="btn btn-primary" id="main-course-btn-2" onClick={() => takeFromCart2(m1.id)}>Cart -</button>
                    <h3>-------------------</h3>
                    
                </div>)}
        </ul>
    </div>
  )
}

export default MainCourseDiv;

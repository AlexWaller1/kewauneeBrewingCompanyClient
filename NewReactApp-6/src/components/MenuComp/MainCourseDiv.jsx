import React from 'react'
import AddMainCourseBtn from './AddMainCourseBtn';

const MainCourseDiv = ({ mainCourses, addToCart2 }) => {
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
                    <AddMainCourseBtn addToCart2={addToCart2}/>
                    
                </div>)}
        </ul>
    </div>
  )
}

export default MainCourseDiv;

import React from 'react'
import image from "../assets/education.jpeg"

const CourseCol = () => {
  return (
    <div className='course-col'>
            <img src={image} alt="" width="200px" height="150px"/>
            <h2 className='name'>name</h2>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae porro quaerat sunt dolorum quae, deleniti praesentium esse dignissimos ipsam?</p>
            <h3>stars</h3>
            <h3>price</h3>
    </div>
  )
}

export default CourseCol
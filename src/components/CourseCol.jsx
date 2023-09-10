import React from 'react'
import image from "../assets/education.jpeg"

const CourseCol = ({course}) => {
  const {image,courseName,reviews,price}=course
  return (
    <div className='course-col'>
            <img src={image} alt="" width="200px" height="130px" style={{
                "borderRadius":"5px",
                "border":'1px solid black'
            }}/>
            <h5 className='name'>{courseName}</h5>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae porro quaerat sunt dolorum quae, deleniti praesentium esse dignissimos ipsam?</p>
            <h5>Reviews : {reviews}</h5>
            <h5>Price : {price}</h5>
    </div>
  )
}

export default CourseCol
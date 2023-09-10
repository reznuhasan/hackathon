import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Course from './Course'
import { Link } from 'react-router-dom'
import CourseCol from './CourseCol'
import EduCarousel from './education/EduCarousel'

const Education = () => {
    const courses = [
        {
          courseName: "Web Development Fundamentals",
          mentorName: "John Smith",
          reviews: 92,
          price: "$49.99",
          image:"https://shorturl.at/fDEXZ"
        },
        {
          courseName: "Data Science for Beginners",
          mentorName: "Emily Johnson",
          reviews: 78,
          price: "$59.99",
          image:"https://shorturl.at/mEJP2"
        },
        {
          courseName: "Mobile App Development",
          mentorName: "Michael Brown",
          reviews: 85,
          price: "$69.99",
          image:"https://shorturl.at/uvRS3"
        },
        {
          courseName: "Machine Learning Mastery",
          mentorName: "Sophia Davis",
          reviews: 97,
          price: "$79.99",
          image:"https://shorturl.at/mquB1",
        },
        {
          courseName: "Digital Marketing Strategies",
          mentorName: "David Wilson",
          reviews: 88,
          price: "$54.99",
          image:"https://shorturl.at/fkPTW",
        },
        {
          courseName: "Graphic Design Essentials",
          mentorName: "Emma White",
          reviews: 64,
          price: "$44.99",
          image:"https://shorturl.at/mqIU1"
        },
        {
          courseName: "JavaScript Programming",
          mentorName: "Robert Lee",
          reviews: 76,
          price: "$59.99",
          image:"https://shorturl.at/fmq79"
        },
        {
          courseName: "Artificial Intelligence Fundamentals",
          mentorName: "Olivia Johnson",
          reviews: 93,
          price: "$89.99",
          image:"https://shorturl.at/tzS36"
        },
        {
          courseName: "Financial Planning and Investment",
          mentorName: "William Davis",
          reviews: 82,
          price: "$74.99",
          image:"https://shorturl.at/dwNX3"
        },
        {
          courseName: "Photography Masterclass",
          mentorName: "Sophie Brown",
          reviews: 70,
          price: "$64.99",
          image:"https://shorturl.at/chBO6"
        }
      ];
    return (
        <div className='home'>
            <div>
                <EduCarousel />
            </div>
            <div>
                <h1 className='text-center'>All Courses</h1>
            </div>
            <div className='videos-row'>
                {
                    courses.map(course => <Link to="/course-details"><Course course={course} key={course.courseName}></Course></Link>)
                }
            </div>
            <h1 className='text-center'>Standard Tutorial</h1>
            <div className="videos-col">
                {
                    courses.map(course => <Link to="/course-details"><CourseCol course={course} key={course.courseName}></CourseCol></Link>)
                }
            </div>
        </div>
    )
}

export default Education
import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Course from './Course'
import { Link } from 'react-router-dom'
import CourseCol from './CourseCol'

const Home = () => {
    const [videos,setVideos]=useState([1,2,3,4,5,6,7])
  return (
    <div className='home'>
        <div>
            <h1>All Courses</h1>
        </div>
        <div className='videos-row'>
            {
                videos.map(video=><Link to="/order"><Course key={video}></Course></Link>)
            }
        </div>
        <div className="videos-col">
            {
                videos.map(video=><Link to="/order"><CourseCol key={video}></CourseCol></Link>)
            }
        </div>
    </div>
  )
}

export default Home
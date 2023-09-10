import React from 'react'
import image from "../assets/education.jpeg"
const CourseDetails = () => {
    return (
        <div className='courseDetails'>
            <h1 className='text-center' style={{
                "textDecoration":"underline",
                "marginBottom":"20px"
            }}>Course Details</h1>
            <div className="context-box">
                <div className='image-box'>
                    <img src={image} alt="" />
                </div>
                <div className='content-text'>
                    <h5>Course Name: React Advanced Tutorial</h5>
                    <h5>Mentor Name: Habibullah</h5>
                    <h5>Reviews: 5 starts</h5>
                    <p><span style={{
                        "fontSize": "20px",
                        "fontWeight": "700"
                    }}>Description :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est quae in placeat soluta nobis ipsa molestias magnam nesciunt, culpa blanditiis nihil mollitia ab rem quas odio voluptas enim, fugiat quos dignissimos! Magnam nisi nemo sequi error vel tempore eveniet deserunt perspiciatis sit voluptatibus. Quo quod harum tempore ea quam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus omnis quidem dicta totam? Repudiandae quidem ea dolor rem dolore!
                    </p>
                    <h4>Price:$400</h4>
                </div>
            </div>
            <div className="learn-part">
                <h1>What you'll learn</h1>
                <div className="list-part">
                    <ul>
                        <li>Learn React from the ground up and finish the course as an advanced React developer</li>
                        <li>Join more than 750,000 students in this course & more than 2,500,000 students I taught across all my courses</li>
                        <li>Follow along locally or in a cloud development environment</li>
                        <li>Manage complex state efficiently with React's Context API & React Redux</li>
                        <li>
                            Learn about routing & route-related data fetching with React Router
                        </li>
                        <li>
                            Build fullstack React apps with NextJS
                        </li>
                    </ul>
                    <ul>
                        <li>Build multiple high-quality demo apps, including a fullstack app built with NextJS</li>
                        <li>Build multiple demo projects & explore realistic examples</li>
                        <li>Learn all about React Hooks and React Components</li>
                        <li>Build standalone React apps & applications connected to a backend via HTTP</li>
                        <li>
                            Implement user authentication in React apps
                        </li>
                        <li>
                            Get started with React Unit Testing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
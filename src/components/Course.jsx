import React from 'react'
import { Card, Col } from 'react-bootstrap'
// import image from "../assets/education.jpeg"

const Course = ({course}) => {
    const {courseName,mentorName,reviews,price,image}=course
    console.log(image)
    return (
        <Col className='video'>
            <Card>
                <Card.Img variant="top" src={image} style={{
                    "height":"180px",
                }}/>
                <Card.Body>
                    <Card.Title style={{"fontSize":"16px"}}>{courseName}</Card.Title>
                    <Card.Text className='video-text' style={{
                        "display":"flex",
                        "flexDirection":"column"
                    }}>
                        Mentor:{mentorName}<br/>
                        Reviews:{reviews}<br/>
                        Price:{price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Course
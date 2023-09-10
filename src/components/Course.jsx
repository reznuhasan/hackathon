import React from 'react'
import { Card, Col } from 'react-bootstrap'
import image from "../assets/education.jpeg"

const Course = () => {
    return (
        <Col className='video'>
            <Card>
                <Card.Img variant="top" src={image} style={{
                    "height":"180px",
                }}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text className='video-text'>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Course
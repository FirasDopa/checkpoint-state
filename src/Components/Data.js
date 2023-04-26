import React from 'react'
import {Button, Card} from 'react-bootstrap';
import PropTypes from 'prop-types'; 
const Info = (props) => {
    return (
        <div>
            <div>
                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Info.jpg" style={{width:"287px", height:"300px"}} />
                <Card.Body>
                    <Card.Title>{props.fullName}</Card.Title>
                    <Card.Text>
                    <h2>{props.bio}</h2>
                    <h2>{props.profession}</h2>
                    </Card.Text>
                    <Button variant="primary"><a href="https://www.facebook.com/F.silini/" alt="facebook">Facebook Page</a></Button>
                </Card.Body>
                </Card>
            </div>
        </div>
        
    )
}

export default Info
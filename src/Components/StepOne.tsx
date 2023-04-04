import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function View() {
  return (
    <div className="Blackcontainer">
      <div className="rectangle">
        <div className="inner-rectangle">
            <Container>
            <Row>
              <Col>
                <h1 className='text-center mt-5 main-title'>Busy Bee!</h1>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <p className='text-center top-text'>Hi Ulises!</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className='text-center top-text'>Busy Bee works based on a<br/>Task Reward System</p>
              </Col>
            </Row>

            <Row>
              <Col className='d-flex justify-content-center mt-1'>
                <img className='image-radius' src={require('../Assets/Email1.png')} width={100 } height={100} alt="Logo" />
                <img className='image-radius' src={require('../Assets/Email1.png')} width={100} height={100} alt="Logo" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p className='text-center top-text'>Step 1</p>
                <p className='text-center top-text'>We need to create a<br/> User for Your Little Bee('s) </p>
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col className='text-center'>
                {/* Button */}
                <Link to="/BoyGirl">
                  <button className='mx-3 bg-black btn-rounded'>Create Bee!</button>
                </Link>
              </Col>
            </Row>
            </Container>
        </div>
      </div>
    </div>
  )
}
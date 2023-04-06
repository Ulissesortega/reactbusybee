import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function StepTwo() {
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
                <p className='text-center top-text'>Our Little Bee is Ready!</p>
              </Col>
            </Row>

            <Row>
              <Col className='d-flex justify-content-center mt-1'>
                <img className='image-radius' src={require('../Assets/BeeGirl.png')} width={125} height={125} alt="Logo" />
              </Col>
            </Row>

            <Row>
              <Col>
                <p className='text-center top-text-bold mt-3'>Step 2</p>
                <p className='text-center top-text'>Let's assign some Task<br/>and Start Rewards <br/>for Emily</p>
                <p className='text-center top-text'></p>
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col className='text-center'>
                {/* Button */}
                <Link to="/TaskAssigner">
                  <button className='mx-3 bg-black btn-rounded'>Next</button>
                </Link>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
    </div>
  )
}

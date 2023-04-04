import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function EmailInfo() {
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
                <p className='text-center mt-1 top-text'>A Copy of your<br />information<br />has been sent<br />to your email!</p>
              </Col>
            </Row>

            <Row>
              <Col className='d-flex justify-content-center mt-1'>
                <img className='image-radius' src={require('../Assets/Email1.png')} width={200} height={200} alt="Logo" />
              </Col>
            </Row>

            <Row className='mt-5'>
              <Col className='text-center'>
                {/* Button */}
                <Link to="/StepOne">
                  <button className='mx-3 bg-black btn-rounded' >Let's Start!</button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function AdminInfo() {


  
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
                <p className='top-text text-center'>Please Enter you<br />Your Information</p>
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <Form.Label className='input-label' htmlFor='firstName'>First Name:</Form.Label>
                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="" />
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <Form.Label className='input-label' htmlFor='LastName'>Last Name:</Form.Label>
                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="" />
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <Form.Label className='input-label' htmlFor='Email'>Email Address:</Form.Label>
                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="" />
              </Col>
            </Row>
            
            <Row>
              <Col className='text-center'>
                <Form.Label className='input-label' htmlFor='Password'>Password:</Form.Label>
                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="password" placeholder="" />
              </Col>
            </Row>

            <Row className='mt-4'>
              <Col className='text-center'>
                {/* Button */}
                <Link to="/BeeKeeper">
                  <button className='mx-3 bg-black btn-rounded' >Create User</button>
                </Link>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
    </div>
  )
}

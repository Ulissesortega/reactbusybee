import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function AdminInfo() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center mt-5 main-title'>Busy Bee!</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className='top-text text-center'>Please Enter<br />Your Information</p>
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
          <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="" />
        </Col>
      </Row>


    </Container>
  )
}

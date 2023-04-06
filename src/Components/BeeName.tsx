import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BeeName() {
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
                                <p className='text-center top-text'>Awesome!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <img className='image-radius' src={require('../Assets/BeeBoy.png')} width={125} height={125} alt="Logo" />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='text-center top-text mt-2'>Let's give our Bee a name:</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='input-label' htmlFor='firstName'>My Little Bee Name:</Form.Label>
                                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='input-label' htmlFor='Password'>Password:</Form.Label>
                                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="password" placeholder="" />
                            </Col>
                        </Row>

                        <Row className='mt-3'>
                            <Col className='text-center'>
                                {/* Button */}
                                <Link to="/StepTwo">
                                    <button className='mx-3 bg-black btn-rounded'>Confirm</button>
                                </Link>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </div>
    )
}

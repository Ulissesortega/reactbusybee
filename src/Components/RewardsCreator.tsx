import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RewardsCreator() {
    return (
        <div className="Blackcontainer">
            <div className="rectangle">
                <div className="inner-rectangle">
                    <Container>
                        <Row>
                            <Col className='text-center top-text mt-5 ms-4'>
                                <h3 className='ms-4 text-dark'>Emily's Rewards</h3>
                            </Col>

                            <Col>
                                <img className='image-radius mt-5' src={require('../Assets/BeeBoy.png')} width={75} height={75} alt="Logo" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center mt-3'>
                                <Form.Label className='input-label' htmlFor='firstName'>Reward Name:</Form.Label>
                                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="Clean Room" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center mt-1'>
                                <Form.Label className='input-label' htmlFor='firstName'>Star Reward Amount:</Form.Label>
                                <div className='d-flex justify-content-center'>
                                    <Form.Select aria-label="Default select example" className="rounded-10 w-75 d-flex justify-content-center">
                                        <option className='text-center'>Star Rewards</option>
                                        <option className='text-center rounded-10' value="1">1 Star  Reward</option>
                                        <option className='text-center rounded-10' value="2">2 Stars Reward</option>
                                        <option className='text-center rounded-10' value="3">3 Stars Reward</option>
                                        <option className='text-center rounded-10' value="4">4 Stars Reward</option>
                                        <option className='text-center rounded-10' value="5">5 Stars Reward</option>
                                    </Form.Select>
                                </div>
                            </Col>
                        </Row>

                        <div className='d-flex justify-content-center'>
                            <Row className='mt-3'>
                                <Col className='text-center'>
                                    {/* Button */}
                                    <Link to="/">
                                        <button className=' bg-black btn-rounded-smaller'>Add </button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>


                        <Row className='mt-3'>
                            <Col className='text-center'>
                                {/* Button */}
                                <Link to="/RewardsCreator">
                                    <button className='mx-3 bg-black btn-rounded'>Dashboard</button>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center mt-3'>
                                <img className='image-radius' src={require('../Assets/Medal.png')} width={125} height={125} alt="Logo" />
                            </Col>
                        </Row>


                    </Container>
                </div>
            </div>
        </div>
    )
}

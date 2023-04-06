import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
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
                            <Col className='d-flex justify-content-center mt-3'>
                                <img className='image-radius' src={require('../Assets/Logo.png')} width={200} height={150} alt="Logo" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center mt-3'>
                                <Form.Label className='input-label' htmlFor='firstName'>Email:</Form.Label>
                                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="text" placeholder="" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='input-label' htmlFor='Password'>Password:</Form.Label>
                                <Form.Control className='text-input rounded-pill w-75 mx-auto border border-primary text-center' type="password" placeholder="" />
                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col className='text-center'>
                                {/* Button */}
                                <Link to="/BeeKeeper">
                                    <button className='mx-3 bg-black btn-rounded' >Login</button>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='top-text text-center'></p>
                            </Col>
                        </Row>


                    </Container>
                </div>
            </div>
        </div>
    )
}

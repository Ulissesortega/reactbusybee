import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BoyGirl() {
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
                                <p className='text-center top-text'>Choose one<br /> of the options bellow</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <img className='image-radius' src={require('../Assets/BeeBoy.png')} width={125} height={125} alt="Logo" />
                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col className='text-center'>
                                {/* Button */}
                                <Link to="/BeeName">
                                    <button className='mx-3 bg-black btn-rounded-small'>Boy!</button>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center mt-3'>
                                <img className='image-radius' src={require('../Assets/BeeGirl.png')} width={125} height={125} alt="Logo" />
                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col className='text-center'>
                                {/* Button */}
                                <Link to="/BeeName">
                                    <button className='mx-3 bg-black btn-rounded-small'>Girl!</button>
                                </Link>
                            </Col>
                        </Row>

                        

                    </Container>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function BeeKeeper() {
    return (
        <div className="Blackcontainer">
            <div className="rectangle">
                <div className="inner-rectangle">
                    <Row>
                        <Col>
                            <h1 className='text-center mt-5 main-title'>Busy Bee!</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='top-text text-center'>Awesome!<br />You have become<br /> A Bee Keeper Admin!</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-flex justify-content-center mt-1'>
                            <img className='image-radius' src={require('../Assets/Bkeeper.png')} width={200} height={250} alt="Logo" />
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col className='text-center'>
                            {/* Button */}
                            <Link to="/EmailInfo">
                                <button className='mx-3 bg-black btn-rounded'>Next</button>
                            </Link>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    )
}

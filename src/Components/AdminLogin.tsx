import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button,Form } from 'react-bootstrap';
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

                  
                    </Container>
                </div>
            </div>
        </div>
    )
}

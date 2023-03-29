import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png'
import AdminInfo from './AdminInfo';

export default function Login() {
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
                <img className='image-radius' src={Logo} width={200} height={150} alt="Logo" />
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col className='text-center'>
                <p className='mb-0 sub-title'>New to Our App?</p>
                {/* Button */}
                <Link to="/AdminInfo">
                  <button className='mx-3 bg-black btn-rounded' >Create User</button>
                </Link>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col className='text-center'>
                <p className='mb-0 sub-title'>I'm a BeeKeeper</p>
                {/* Button */}
                <button className='mx-3 bg-black btn-rounded'>Parent's Login</button>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col className='text-center'>
                <p className='mb-0 sub-title'>I'm a Bee</p>
                {/* Button */}
                <button className='mx-3 bg-black btn-rounded'>Kid's Login</button>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
    </div>
  )
}

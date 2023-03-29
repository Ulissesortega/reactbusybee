import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import { Container, Row, Col,Nav } from 'react-bootstrap';
import Login from './Components/Login';
import AdminInfo from './Components/AdminInfo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="Blackcontainer">
          <div className="rectangle">
            <div className="inner-rectangle">
              <Login />
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/AdminInfo' element={<AdminInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

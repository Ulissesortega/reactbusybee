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
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/AdminInfo' element={<AdminInfo />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;

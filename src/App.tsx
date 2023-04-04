import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Login from './Components/Login';
import AdminInfo from './Components/AdminInfo';
import BeeKeeper from './Components/BeeKeeper';
import EmailInfo from './Components/EmailInfo';
import StepOne from './Components/StepOne';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/AdminInfo' element={<AdminInfo />} />
          <Route path='/BeeKeeper' element={<BeeKeeper />} />
          <Route path='/EmailInfo' element={<EmailInfo />} />
          <Route path='/StepOne' element={<StepOne />} />


        </Routes>
    </BrowserRouter>
  );
}

export default App;

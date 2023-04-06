import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import AdminInfo from './Components/AdminInfo';
import BeeKeeper from './Components/BeeKeeper';
import EmailInfo from './Components/EmailInfo';
import StepOne from './Components/StepOne';
import BoyGirl from './Components/BoyGirl';
import BeeName from './Components/BeeName';
import StepTwo from './Components/StepTwo';
import TaskAssigner from './Components/TaskAssigner';
import RewardsCreator from './Components/RewardsCreator';
import AdminLogin from './Components/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/AdminInfo' element={<AdminInfo/>} />
        <Route path='/BeeKeeper' element={<BeeKeeper/>} />
        <Route path='/EmailInfo' element={<EmailInfo/>} />
        <Route path='/StepOne' element={<StepOne/>} />
        <Route path='/BoyGirl' element={<BoyGirl/>} />
        <Route path='/BeeName' element={<BeeName/>} />
        <Route path='/StepTwo' element={<StepTwo/>} />
        <Route path='/TaskAssigner' element={<TaskAssigner/>} />
        <Route path='/RewardsCreator' element={<RewardsCreator/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

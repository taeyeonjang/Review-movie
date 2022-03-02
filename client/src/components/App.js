import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import NavBar from './views/NavBar/NavBar';
import RegisterPage from './views/RegisterPage/RegisterPage';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path ="/" element = {<LandingPage />} />
    <Route path ="/login" element = {<LoginPage />} />
    <Route path ="/register" element = {<RegisterPage />} />
   


    </Routes>

    </BrowserRouter>



  );
}

export default App;

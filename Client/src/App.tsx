
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/login'} element={<Login/>} />
          <Route path={'/signup'} element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

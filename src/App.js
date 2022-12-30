import React from 'react';
import Login from './components/Login';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (

    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>

  )
}

export default App;

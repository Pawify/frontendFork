import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './app/components/login/login';
import Register from './app/components/registerUser/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Agrega otras rutas según sea necesario */}
        <Route path="/" element={<Login />} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;

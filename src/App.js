import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/product'  element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

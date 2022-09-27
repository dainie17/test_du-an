import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from './Screen/Login'
import Signup from './Screen/Signup'
import Navigate from './Screen/Navigate';
import Navbar from './Screen/Navbar';
import Home from './Screen/Home';
import Introduce from './Screen/Introduce';
import Product from './Screen/Product';
import './Screen/Introduce.css'
import './Screen/Home.css'
import './Screen/Product.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Navigate' element={<Navigate />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Introduce' element={<Introduce />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

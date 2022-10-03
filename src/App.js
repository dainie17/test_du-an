import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from './Screen/Login'
import Signup from './Screen/Signup'
import Navigate from './Screen/Navigate';
import Navbar from './Screen/Navbar';
import Home from './Screen/Home';
import Introduce from './Screen/Introduce';
import Product from './Screen/Product';
import Detail from './Screen/Detail';
import Person from './Screen/Personal';
import Cart from './Screen/Cart';
import Personal from './Screen/Personal'
import Order from './Screen/Order';
import './Screen/Introduce.css'
import './Screen/Home.css'
import './Screen/Product.css'
import './Screen/Detail.css'
import './Screen/Cart.css'
import './Screen/Order.css'

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
        <Route path='/Detail' element={<Detail />} />
        <Route path='/Personal' element={<Person/>}/>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Personal' element={<Personal />} />
        <Route path='/Order' element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;

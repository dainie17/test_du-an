import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Navigate from './Navigate';
import Navbar from './Navbar';
import Home from './Home';
import Introduce from './Introduce';
import Product from './Product';
import Detail from './Detail';
import Person from './Personal';
import Cart from './Cart';
import Personal from './Personal'
import Order from './Order';
import Login_1 from './Login_1.js';

import '../CSS/Introduce.css'
import '../CSS/Home.css'
import '../CSS/Product.css'
import '../CSS/Detail.css'
import '../CSS/Cart.css'
import '../CSS/Order.css'
import '../CSS/Login_1.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login_1 />} />
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

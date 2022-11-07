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
import Login_1 from './Screen/Login_1.js';
import Bao1 from './Screen/home1';
import New1 from './Screen/News1'
import Confifential from './Policy/Confidential';
import Lie from './Policy/Lie';
import Pay from './Policy/Pay'
import Introduce1 from './Screen/Introduce1';

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
        <Route path='/News' element={<Bao1 />} />
        <Route path='/Contact' element={<Introduce1 />} />
        <Route path="/ItemNews/:id" element={<New1 />} />

        <Route path='/baomat' element={<Confifential />} />
        <Route path='/doitra' element={<Lie />} />
        <Route path='/thanhtoan' element={<Pay />} />
        <Route path='/vanchuyen' element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;

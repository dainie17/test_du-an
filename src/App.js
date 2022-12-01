import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Signup from './Screen/Signup'
import Navigate from './Screen/Navigate';
import Home from './Screen/Home';
import Introduce from './Screen/Introduce';
import Product from './Screen/Product';
import Detail from './Screen/Detail';
import Cart from './Screen/Cart';
import Personal from './Screen/Personal'
import Order from './Screen/Order';
import Login from './Screen/Login.js';
import Bao1 from './Screen/Slide_Home';
import New1 from './Screen/News'
import Confifential from './Policy/Confidential';
import Lie from './Policy/Lie';
import Pay from './Policy/Pay'
import Paycp from './Policy/Transport'
import Contact from './Screen/Contact';
import SliderHome from './Screen/slideHome';
import Error from './Screen/Error';

function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         {/* Đăng nhập */}
        <Route path='/login' element={<Login />} />
        {/* Đăng ký */}
        <Route path='/Signup' element={<Signup />} />
        {/* Ưu đãi */}
        <Route path='/Navigate' element={<Navigate />} />
        {/* Liên hệ */}
        <Route path='/Introduce' element={<Introduce />} />
        {/* Sản phẩm */}
        <Route path='/Product' element={<Product />} />
        {/* Giới thiệu */}
        <Route path='/Contact' element={<Contact />} />
        {/* Chi tiết */}
        <Route path='/Detail/:id/:name/:price/:num' element={<Detail />} />
        {/* Giỏ hàng */}
        <Route path='/Cart' element={<Cart />} />
        {/* Cá nhân */}
        <Route path='/Personal' element={<Personal />} />
        {/* Thanh toán */}
        <Route path='/Order' element={<Order />} />
        {/* Chi tiết ưu đãi */}
        <Route path="/ItemNews/:id" element={<New1 />} />
        {/* Chính sách bảo mật */}
        <Route path='/baomat' element={<Confifential />} />
        {/* hính sách đổi trả */}
        <Route path='/doitra' element={<Lie />} />
        {/* Chính sách thanh toán */}
        <Route path='/thanhtoan' element={<Pay />} />
        {/* Chính sách vận chuyển */}
        <Route path='/vanchuyen' element={<Paycp />} />
        {/* Trang error */}
        <Route path="/:somestring" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

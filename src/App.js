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
import New1 from './Screen/News'
import Confifential from './Policy/Confidential';
import Lie from './Policy/Lie';
import Pay from './Policy/Pay'
import Paycp from './Policy/Transport'
import Contact from './Screen/Contact';
import Error from './Screen/Error';

import { useState, useEffect } from 'react';
import axios from "axios";

import './css/Introduce.css';
import './css/Contact.css';
import './css/footer.css';
import './css/Navigate.css';
import './css/News.css';
import './css/Personal.css';
import './css/Product.css';
import './css/Introduce.css';
import './css/Responsive.css'
import Forgot_Pass from './Screen/Forgot_Pass';
import Inactive from './Screen/Inactive';


function App() {

  const ip = "http://localhost:8080"

  const [pathLogin, setPathLogin] = useState(true);
  const [pathSignup, setPathSignup] = useState(true);
  const [pathOrder, setPathOrder] = useState(false);

  useEffect(() => {

    var getUser = localStorage.getItem("UserUser")
    var data = JSON.parse(getUser)

    if (getUser == null) {
    }

    if (getUser != null && data.chxSave == false) {
      setPathLogin(false)
      setPathSignup(false)
      setPathOrder(true)
      return localStorage.removeItem("UserUser")
    }
    if (getUser != null && data.chxSave == true) {
      fetch(ip + "/login_User", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          TKUser: data.TKUser,
          passUser: data.passUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {

          if (data.status == "oke") {
            window.localStorage.setItem("token", data.data);
            setPathLogin(false)
            setPathSignup(false)
            setPathOrder(true)
          }
        })
    }

    var getToken = localStorage.getItem("token")

    if (getToken != null) {
      fetch(ip + "/User_data", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token")
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userLogin");
          localStorage.setItem('Infomation', JSON.stringify(data));
        })
    } else if (getToken == null) {

    }

    getData()

  },)

  const getData = () => {
    axios.get(ip + '/getData')
      .then((response) => {
        window.localStorage.setItem("DanhSachSP", JSON.stringify(response.data));
      })
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Đăng nhập */}
        {pathLogin ? <Route path="/login" element={<Login />} /> : <Route path="/:somestring" element={<Error />} />}
        {/* Đăng ký */}
        {pathSignup ? <Route path="/Signup" element={<Signup />} /> : <Route path="/:somestring" element={<Error />} />}
        {/* Quên mật khẩu */}
        <Route path='/ForgotPass' element={<Forgot_Pass />} />
        {/* Ưu đãi */}
        <Route path='/Navigate' element={<Navigate />} />
        {/* Liên hệ */}
        <Route path='/Introduce' element={<Introduce />} />
        {/* Sản phẩm */}
        <Route path='/Product' element={<Product />} />
        {/* Giới thiệu */}
        <Route path='/Contact' element={<Contact />} />
        {/* Chi tiết */}
        <Route path='/Detail/:_id' element={<Detail />} />
        {/* Giỏ hàng */}
        <Route path="/Cart" element={<Cart />} />
        {/* Cá nhân */}
        <Route path="/Personal" element={<Personal />} />
        {/* {pathPersonal ? <Route path="/Personal" element={<Personal />}/> : <Route path="/:somestring" element={<Error />}/>} */}
        {/* Thanh toán */}
        {/* {pathOrder ? <Route path="/Order" element={<Order />} /> : <Route path="/:somestring" element={<Error />} />} */}
        <Route path="/Order" element={<Order />} />
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
        <Route path="/:somestring" element={<Error />} />
        {/* khóa tài khoản */}
        <Route path="/Inactive" element={<Inactive />} />
      </Routes>
    </div>
  );
}

export default App;



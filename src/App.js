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
import Chat from './Screen/Chat';

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
import './css/Responsive.css';
import './css/Navbar.css';
import './css/Detail.css'
import Forgot_Pass from './Screen/Forgot_Pass';
import Inactive from './Screen/Inactive';
import { useNavigate, Link } from "react-router-dom";
import { array } from 'yup';
import Completed from './Screen/Completed';


function App() {

  const ip = "http://localhost:8080"

  const navigate = useNavigate();

  const [pathLogin, setPathLogin] = useState(true);
  const [pathSignup, setPathSignup] = useState(true);
  const [pathOrder, setPathOrder] = useState(false);



  useEffect(() => {

    var getUser = localStorage.getItem("UserUser")
    var dataUser = JSON.parse(getUser)

    if (getUser == null) {
    }

    if (getUser != null && dataUser.chxSave == false) {
      setPathLogin(false)
      setPathSignup(false)
      setPathOrder(true)
      return localStorage.removeItem("UserUser")
    }
    if (getUser != null && dataUser.chxSave == true) {
      fetch(ip + "/login_User", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          TKUser: dataUser.TKUser,
          passUser: dataUser.passUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "oke") {
            fetch(ip + "/User_data", {
              method: "POST",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                token: data.data
              }),
            })
              .then((res) => res.json())
              .then((db) => {
                if (db.data.TrangThaiUser == "Ho???t ?????ng") {
                  localStorage.setItem('Infomation', JSON.stringify(db))
                  window.localStorage.setItem("token", data.data);
                } else if (db.data.TrangThaiUser == "Kh??ng ho???t ?????ng") {
                  navigate("/Inactive", { replace: true });
                }

              })
          }
        })
    }


    // luu gio hang len localStorage

    var getInfomation = localStorage.getItem("Infomation")
    var db = JSON.parse(getInfomation)
    if (getInfomation == null) {
    }

    if (getInfomation != null) {
      axios.get(ip + `/getGioHang/${db.data._id}`)
        .then((response) => {
          window.localStorage.setItem("GioHang", JSON.stringify(response.data));
        })
    }



    // auto update gio hang

    var getGioHang = localStorage.getItem("GioHang")
    var dbGioHang = JSON.parse(getGioHang)
    var getDsSP = localStorage.getItem("DanhSachSP")
    var dbDsSP = JSON.parse(getDsSP)


    if (getGioHang == null && getDsSP == null) {
    }

    if (getGioHang != null && getDsSP != null) {

      const getdbDsSP = dbDsSP.map((vl, index) => {
        let giaBan = vl.GiaBanSP - (vl.GiaBanSP * (vl.SaleSP / 100))
        let resust = Math.round(giaBan)

        let item = dbGioHang.find(c => c.idImg == vl.idImg);
        if (item) {

          axios.get(ip + `/getImg/${item.idImg}`)
            .then((response) => {
              const getElement = response.data.map((element) => {
                let Array = []
                Array.push(element.files)
                axios.put(ip + `/UpdateSPGioHang/${item.idImg}`, {
                  Image: Array,
                  NameSP: vl.NameSP,
                  GiaCX: resust,
                  GiaBanSP: vl.GiaBanSP,
                  SaleSP: vl.SaleSP,
                  TrangThaiSP: vl.TrangThaiSP,
                  LoaiSP: vl.LoaiSP,
                  ChiTietSP: vl.ChiTietSP,
                });
              })
            })
        }
      })

    }

    // luu ds sp len localStorage
    getData();

  },)


  const getData = () => {
    axios.get(ip + '/getData')
      .then((response) => {
        window.localStorage.setItem("DanhSachSP", JSON.stringify(response.data));
      })
  }



  return (
    <div>
      <Chat />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* ????ng nh???p */}
        {pathLogin ? <Route path="/login" element={<Login />} /> : <Route path="/:somestring" element={<Error />} />}
        {/* ????ng k?? */}
        {pathSignup ? <Route path="/Signup" element={<Signup />} /> : <Route path="/:somestring" element={<Error />} />}
        {/* Qu??n m???t kh???u */}
        <Route path='/ForgotPass' element={<Forgot_Pass />} />
        {/* ??u ????i */}
        <Route path='/Navigate' element={<Navigate />} />
        {/* Li??n h??? */}
        <Route path='/Introduce' element={<Introduce />} />
        {/* S???n ph???m */}
        <Route path='/Product' element={<Product />} />
        {/* Gi???i thi???u */}
        <Route path='/Contact' element={<Contact />} />
        {/* Chi ti???t */}
        <Route path='/Detail/:_id' element={<Detail />} />
        {/* Gi??? h??ng */}
        <Route path="/Cart" element={<Cart />} />
        {/* C?? nh??n */}
        <Route path="/Personal" element={<Personal />} />
        {/* {pathPersonal ? <Route path="/Personal" element={<Personal />}/> : <Route path="/:somestring" element={<Error />}/>} */}
        {/* Thanh to??n */}
        {/* {pathOrder ? <Route path="/Order" element={<Order />} /> : <Route path="/:somestring" element={<Error />} />} */}
        <Route path="/Order" element={<Order />} />
        {/* Chi ti???t ??u ????i */}
        <Route path="/News/:id" element={<New1 />} />
        {/* Ch??nh s??ch b???o m???t */}
        <Route path='/baomat' element={<Confifential />} />
        {/* h??nh s??ch ?????i tr??? */}
        <Route path='/doitra' element={<Lie />} />
        {/* Ch??nh s??ch thanh to??n */}
        <Route path='/thanhtoan' element={<Pay />} />
        {/* Ch??nh s??ch v???n chuy???n */}
        <Route path='/vanchuyen' element={<Paycp />} />
        {/* Trang error */}
        <Route path="/:somestring" element={<Error />} />
        {/* kh??a t??i kho???n */}
        <Route path="/Inactive" element={<Inactive />} />
        {/* ?????t h???ng th??nh c??ng */}
        <Route path="/Completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;



import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import yeuthich from "../assets/favorite.png";
import yeuthich1 from "../assets/favorite1.png";
import truck from "../assets/delivery-truck.png";
import money from "../assets/salary.png";
import hour from "../assets/hour.png";
import shieldImg from "../assets/shields.png";
import ScrollToTop from "./ScrollToTopbtn";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TokenSharp, VerifiedSharp } from "@mui/icons-material";
import "../css/Detail.css";
import Footer from "./footer";
import Navbar from "./Navbar";
import NavbarIn from "./NavbarIn";
import Itemhinh from "../item/Itemhinh";

import axios from "axios";
import { number } from "yup";

const Detail = () => {
  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
    }
  });

  const [tong, setTong] = useState(1);

  const setKTTong = () => {
    var oldValue = $('#counter').val();
    if (oldValue > SoLuongSP) {
      $('#counter').val(SoLuongSP);
      setTong(SoLuongSP);
    } else {
      setTong(oldValue);
    }
  };

  // const[,set] = useState()
  const [idUser, setIdUser] = useState();
  const [idImg, setIdImg] = useState();
  const [NameSP, setNameSP] = useState();
  const [GiaCX, setGiaCX] = useState();
  const [SoLuongSP, setSoLuongSP] = useState();
  const [SaleSP, setSaleSP] = useState();
  const [TrangThaiSP, setTrangThaiSP] = useState();
  const [LoaiSP, setLoaiSP] = useState();
  const [ChiTietSP, setChiTietSP] = useState();

  const [GiaBanSP, setGiaBanSP] = useState();
  const [test, setTest] = useState([]);

  useEffect(() => {
    var ItemSP = localStorage.getItem("ItemSP");
    var data = JSON.parse(ItemSP);
    if (ItemSP == null) {
    } else if (ItemSP != null) {
      setIdImg(data.idImg);
      setNameSP(data.NameSP);
      setGiaCX(data.GiaCX);
      setSoLuongSP(data.SoLuongSP);
      setSaleSP(data.SaleSP);
      setTrangThaiSP(data.TrangThaiSP);
      setLoaiSP(data.LoaiSP);
      setChiTietSP(data.ChiTietSP);
      setGiaBanSP(data.GiaBanSP);
      setTest(data.test);
    }

    var Infomation = localStorage.getItem("Infomation");
    var db = JSON.parse(Infomation);
    if (Infomation == null) {
    } else if (Infomation != null) {
      setIdUser(db.data._id);
    }


  }, []);

  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };

  let { _id } = useParams();

  const ip = "http://localhost:8080";

  // let { _id, name, price, num } = useParams();

  // let cart = [];
  // const addTocart = async () => {
  //   let storage = localStorage.getItem('cart');
  //   if (storage) {
  //     cart = JSON.parse(storage);
  //   }


  //   let item = cart.find(c => c._id === _id);

  //   if (item) {
  //     item.num += tong
  //   } else {
  //     cart.push({ _id: _id, name: name, price: price, num: tong });
  //   }

  //   localStorage.setItem('cart', JSON.stringify(cart));
  //   console.log(cart);
  // }

  const btn_AddGioHang = () => {
    var getInfomation = localStorage.getItem("Infomation")
    var getGioHang = localStorage.getItem("GioHang")
    var ItemSP = localStorage.getItem("ItemSP");


    if (getGioHang == "[]") {
      axios.post(ip + "/add_GioHang", {
        idUser: idUser,
        Image: test,
        idImg: idImg,
        NameSP: NameSP,
        GiaCX: GiaCX,
        GiaBanSP: GiaBanSP,
        SoLuongSP: tong,
        SaleSP: SaleSP,
        TrangThaiSP: TrangThaiSP,
        LoaiSP: LoaiSP,
        ChiTietSP: ChiTietSP,
      });

    } else if (getGioHang != null) {
      var data = JSON.parse(ItemSP);
      var db = JSON.parse(getInfomation)
      var dbGioHang = JSON.parse(getGioHang)


      let item = dbGioHang.find(c => c.idImg === idImg);

      if (item) {
        if (item.SoLuongSP + tong > SoLuongSP) {
          axios.put(ip + `/UpdateGioHang/${item.idImg}/${db.data._id}`, {
            SoLuongSP: SoLuongSP
          });
        } else {
          axios.put(ip + `/UpdateGioHang/${item.idImg}/${db.data._id}`, {
            SoLuongSP: item.SoLuongSP + tong
          });
        }

      } else {
        axios.post(ip + "/add_GioHang", {
          idUser: idUser,
          Image: test,
          idImg: idImg,
          NameSP: NameSP,
          GiaCX: GiaCX,
          GiaBanSP: GiaBanSP,
          SoLuongSP: tong,
          SaleSP: SaleSP,
          TrangThaiSP: TrangThaiSP,
          LoaiSP: LoaiSP,
          ChiTietSP: ChiTietSP,
        });


      }

    }



  };

  return (
    <div className="detail">
      <ScrollToTop />
      {chxNab ? <NavbarIn /> : <Navbar />}
      <div className="detail_container">
        <div className="detail-main">
          <div className="detail-main-top">
            <div className="detail-main-top-left">
              {test.map((item, index) => (
                <Itemhinh key={index} item={item} />
              ))}
            </div>
            <div className="detail-main-top-right">
              <p className="detail-main-top-right-name">{NameSP}</p>
              <p className="detail-main-top-right-number">
                Số lượng: {SoLuongSP}{" "}
              </p>
              <p className="detail-main-top-right-price"> {GiaCX}</p>
              <p className="detail-main-top-right-title">Thông tin sản phẩm:</p>
              <p className="detail-main-top-right-content">
                {/* {ChiTietSP.substring(0, 400) + " [...]"} */}
                {ChiTietSP}
              </p>
              <div className="detail-main-top-right-button">
                <div className="detail-main-top-right-button-picknb">
                  <div className="custom-input">

                    <input
                      type="number"
                      step="1"
                      min="1"
                      id="counter"
                      max={SoLuongSP}
                      defaultValue={1}
                      onBlur={setKTTong}
                    />

                  </div>
                </div>
                <div
                  className={
                    toggleState === 2
                      ? "favorite detail-main-top-right-button-favorite1"
                      : "fv"
                  }
                  onClick={() => toogleTab(1)}
                >
                  <div className="favorite_img">
                    <img src={yeuthich}></img>
                  </div>
                  <div className="favorite_pafter">
                    <p>Đã thích</p>
                  </div>
                </div>
                <div
                  className={
                    toggleState === 1
                      ? "favorite detail-main-top-right-button-favorite "
                      : "fv"
                  }
                  onClick={() => toogleTab(2)}
                >
                  <div className="favorite_img">
                    <img src={yeuthich1}></img>
                  </div>
                  <div className="favorite_p">
                    <p>Yêu thích</p>
                  </div>
                </div>
              </div>
              <button className="btn_addtocart" onClick={btn_AddGioHang}>
                <span className="span_addtocart">Thêm vào giỏ hàng</span>
              </button>
              <p className="detail-main-top-right-titlepay">
                Thanh toán an toàn
              </p>
              <p className="detail-main-top-right-option">
                Nhiều tùy chọn thanh toán
              </p>
              <p className="detail-main-top-right-service">
                Đảm bảo dịch vụ khách hàng
              </p>
              <div className="detail-main-top-right-itemsv">
                <div className="detail-main-top-right-itemsv-left">
                  <VerifiedSharp />
                  <p>Đảm bảo DOA</p>
                </div>
                <div className="detail-main-top-right-itemsv-right">
                  <TokenSharp />
                  <p>Đảm bảo hàng bị thiếu / sai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-purview">
        <div className="preview">
          <div className="preview_title">
            <p>Dịch vụ của chúng tôi</p>
          </div>
          <div className="preview_content">
            <p>Công ty cổ phần Thang Máy Fujitech đơn vị uy tín chất lượng</p>
          </div>
        </div>
        <div className="home-main-purview-card">
          <div className="home-main-purview">
            <img src={truck}></img>
            <p>GIAO DỊCH TOÀN QUỐC</p>
          </div>
          <div className="home-main-purview">
            <img src={money}></img>
            <p>HOÀN TIỀN NẾU HÀNG LỖI </p>
          </div>
          <div className="home-main-purview">
            <img src={hour}></img>
            <p>CHĂM SÓC KHÁCH HÀNG 24/7</p>
          </div>
          <div className="home-main-purview">
            <img src={shieldImg}></img>
            <p>CAM KẾT 100% CHẤT LƯỢNG</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;

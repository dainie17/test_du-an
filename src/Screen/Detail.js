import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import yeuthich from '../assets/favorite.png'
import yeuthich1 from '../assets/favorite1.png'

import truck from '../assets/delivery-truck.png'
import money from '../assets/salary.png'
import hour from '../assets/hour.png'
import shieldImg from "../assets/shields.png";
import ScrollToTop from "./ScrollToTopbtn";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TokenSharp, VerifiedSharp } from "@mui/icons-material";
import Slider from "react-slick";
import '../css/Detail.css'
import Footer from "./footer";
import Navbar from "./Navbar";
import NavbarIn from "./NavbarIn";

const image1 = "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";
const image2 = "https://cdn.tgdd.vn/Files/2019/11/18/1220010/4-cach-ve-sinh-ben-trong-chai-lo-cuc-sach-ban-nen-thu-21-760x367.jpg";
const image3 = "https://bizweb.dktcdn.net/100/154/029/files/san-xuat-chai-lo-nhua-2-941c40bb-0124-4086-8aab-ad24dc55c0b8.jpg?v=1501056541035";
const image4 = "https://i-raovat.vnecdn.net/2020/05/22/51ade386733b048d7c00c29720e39c04.jpeg?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=irmRdkv5lf-nqmbP2V8WXg";
const image5 = "https://thuytinhtadaco.com/wp-content/uploads/2021/08/chai-lo-thuy-tinh.jpg";



const Detail = () => {


  const [chxNab, setChxNab] = useState(false);
  useEffect(()=>{
    var getUser = localStorage.getItem("UserUser")
    var data = JSON.parse(getUser)
    
    if (getUser == null) {
    }
  
    if(getUser != null){
      setChxNab(true)
    }
  },)

  const [tong, setTong] = useState(1);

  const onclickReduce = () => {
    if (tong > 1) {
      setTong(tong - 1);
    }
  }


  // const[,set] = useState()
  const[SaleSP,setSaleSP] = useState()
  const[NameSP,setNameSP] = useState()
  const[GiaCX,setGiaCX] = useState()
  const[GiaBanSP,setGiaBanSP] = useState()
  const[SoLuongSP,setSoLuongSP] = useState()

  useEffect(() => {
    const u = localStorage.getItem("uses");

    var ItemSP = localStorage.getItem("ItemSP")
    var data = JSON.parse(ItemSP)
    if(ItemSP == null){

    }else if(ItemSP != null){
      setSaleSP(data.SaleSP)
      setNameSP(data.NameSP)
      setGiaCX(data.GiaCX)
      setGiaBanSP(data.GiaBanSP)
      setSoLuongSP(data.SoLuongSP)
    }
  },);

  let navgate = useNavigate();

  const data = [image1, image2, image3, image4, image5];

  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  }

  let { _id} = useParams();



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

  return (
    <div className="detail">
      <ScrollToTop />
      {chxNab ? <NavbarIn /> : <Navbar />}
      <div className="detail_container">
        <div className="detail-main">
          <div className="detail-main-top">
            <div className="detail-main-top-left">
              <Slider
                dots
                customPaging={(i) => {
                  return (
                    <div>
                      <img src={data[i]} className="detail-main-top-left-img" alt="" />
                    </div>
                  )
                }}
                dotsClass="slick-dots custom-indicator"
              >
                {
                  data.map((item, index) => (
                    <div className="detail-main-top-left-slideritem" key={index}>
                      <img className="detail-main-top-left-image" src={item} alt="" />
                    </div>
                  ))
                }
              </Slider>
            </div>
            <div className="detail-main-top-right">
              <p className="detail-main-top-right-name">{NameSP}</p>
              <p className="detail-main-top-right-number">Số lượng:{SoLuongSP} </p>
              <p className="detail-main-top-right-price"> {GiaCX}</p>
              <p className="detail-main-top-right-title">Thông tin sản phẩm:</p>
              <p className="detail-main-top-right-content">Về phần thiết kế, nhà Apple vẫn giữ nguyên kiểu dáng quen thuộc của những phiên bản tiền nhiệm trước đó như: Thiết kế gọn nhẹ, đường bo góc tinh tế, gam màu trắng trang nhã bao bọc trọn vẹn tai nghe và hộp sạc.Ở phiên bản này, hộp sạc được trang bị thêm phần khoen để móc dây treo tiện lợi. Nhờ đó, bạn có thể dễ dàng treo vào balo và mang đi bất kỳ đâu mà không cần dùng tới túi đựng AirPods chuyên dụng. Loa tích hợp trên hộp sạc có thể phát âm thanh giúp bạn dễ dàng xác định vị trí khi vô tình đánh rơi và phát ra âm cảnh báo khi pin yếu hoặc quá trình ghép nối hoàn tất.

                Ngoài ra, trong mỗi hộp tai nghe Apple này sẽ có bốn cặp đệm tai với các kích cỡ XS, S, M, L cho người dùng thoải mái lựa chọn đệm tai phù hợp. Đệm tai làm từ chất liệu silicone cao cấp cũng sẽ cho bạn cảm giác mềm mại, vừa vặn khi đeo.</p>
              <div className="detail-main-top-right-button">
                <div className="detail-main-top-right-button-picknb">
                  <button onClick={onclickReduce} className="detail-main-top-right-button-picknb-reduce">-</button>
                  <p className="detail-main-top-right-button-picknb-num">{tong}</p>
                  <button onClick={() => setTong(tong + 1)} className="detail-main-top-right-button-picknb-augment">+</button>
                </div>
                <div className={toggleState === 2 ? "favorite detail-main-top-right-button-favorite1" : "fv"} onClick={() => toogleTab(1)}>
                  <div className="favorite_img">
                    <img src={yeuthich}></img>
                  </div>
                  <div className="favorite_p">
                    <p>Đã thích</p>
                  </div>
                </div>
                <div className={toggleState === 1 ? "favorite detail-main-top-right-button-favorite " : "fv"} onClick={() => toogleTab(2)}>
                  <div className="favorite_img">
                    <img src={yeuthich1}></img>
                  </div>
                  <div className="favorite_p">
                    <p>Yêu thích</p>
                  </div>
                </div>
              </div>
              {/* <button onClick={addTocart} className="detail-main-top-right-btngh">Thêm vào giỏ hàng</button> */}
              <p className="detail-main-top-right-titlepay">Thanh toán an toàn</p>
              <p className="detail-main-top-right-option">Nhiều tùy chọn thanh toán</p>
              <p className="detail-main-top-right-service">Đảm bảo dịch vụ khách hàng</p>
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
    </div >
  )
}

export default Detail;

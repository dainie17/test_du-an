import {
  DeleteOutlineSharp,
  FavoriteBorderSharp,
  VerifiedUserSharp,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Order.css";
import Footer from "./footer";
import ScrollToTop from "react-scroll-to-top";

import logo from "../assets/logo_cty.png";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";
const image2 =
  "https://cdn.tgdd.vn/Files/2019/11/18/1220010/4-cach-ve-sinh-ben-trong-chai-lo-cuc-sach-ban-nen-thu-21-760x367.jpg";
const image3 =
  "https://bizweb.dktcdn.net/100/154/029/files/san-xuat-chai-lo-nhua-2-941c40bb-0124-4086-8aab-ad24dc55c0b8.jpg?v=1501056541035";
const image4 =
  "https://i-raovat.vnecdn.net/2020/05/22/51ade386733b048d7c00c29720e39c04.jpeg?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=irmRdkv5lf-nqmbP2V8WXg";
const image5 =
  "https://thuytinhtadaco.com/wp-content/uploads/2021/08/chai-lo-thuy-tinh.jpg";

const Order = () => {

    const [cart, setCart] = useState([]);

  const getCart = async () => {
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage) {
      setCart(storage);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  let navgate = useNavigate();

  const onclickHome = () => {
    navgate("/Home");
  };

  return (
    <div className="order">
      <ScrollToTop smooth></ScrollToTop>
      <div className="cart-header">
        <div className="cart_header_container">
          <div className="cart_header_left">
            <div className="cart-header-logo" onClick={onclickHome}>
              <img src={logo} alt="" />
            </div>
            <div className="cart-header-test">
              <VerifiedUserSharp />
              <p>Kiểm tra an toàn</p>
            </div>
          </div>

          <div className="cart-header-stage">
            <div className="cart-header-stage-wrapper">
              <div className="cart-header-stage-wrapper-container">
                <ul>
                  <li className="cart-header-stage-wrapper-container-step1">
                    <div
                      className="cart-header-stage-wrapper-container-step-inner"
                      style={{ color: "rgb(72, 72, 72)" }}
                    >
                      Giỏ hàng
                    </div>
                  </li>

                  <li className="order-header-stage-wrapper-container-step2">
                    <div
                      className="cart-header-stage-wrapper-container-step-inner"
                      style={{ color: "rgb(72, 72, 72)" }}
                    >
                      Đặt hàng
                    </div>
                  </li>

                  <li className="cart-header-stage-wrapper-container-step3">
                    <div className="cart-header-stage-wrapper-container-step-inner">
                      Thanh toán
                    </div>
                  </li>

                  <li className="cart-header-stage-wrapper-container-step4">
                    <div className="cart-header-stage-wrapper-container-step-inner">
                      Hoàn thành
                    </div>
                  </li>
                </ul>
                <div className="cart-header-stage-wrapper-container-line">
                  <div className="order-header-stage-wrapper-container-line-process"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="order-main">
        <div className="order-main-left">
          <div className="order-main-left-address">
            <p className="order-main-left-address-title">Địa chỉ giao hàng</p>
            <div className="order-main-left-address-para">
              <div className="order-main-left-address-para-icon"></div>
              <div className="order-main-left-para-content">
                <p className="order-main-left-address-para-content-person">
                  Hùng Quang, 355316644
                </p>
                <p className="order-main-left-address-content-address">
                  72 Nguyễn Hữu Quan, thành phố Buôn Ma Thuột, Đăk Lăk, Việt
                  Nam, 02623
                </p>
                <div className="order-main-left-address-content-button">
                  <button className="order-main-left-address-content-button-edit">
                    Chỉnh sửa
                  </button>
                  <button className="order-main-left-address-content-button-delete">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-main-left-payment">
            <p className="order-main-left-payment-title">
              Phương thức thanh toán
            </p>
            <div className="order-main-left-payment-button">
              <div className="order-main-left-payment-button-left"></div>
              <div className="order-main-left-payment-button-right"></div>
            </div>
          </div>

          <div className="cart-main-left-list">
            <p className="cart-main-left-list-title">Xem trước đơn hàng</p>
            <div className="order-main-left-list">
                <div className="order_main_card_imgtitle">
                  <p className="order-main-left-list-card-content-name">
                    Sản phẩm
                  </p>
                </div>
                  <p style={{fontWeight:"bold"}} className="order-main-left-list-card-content-price">
                    đơn giá
                  </p>

                    <div  style={{fontWeight:"bold"}} className="oder-main-left-list-card-function-button-num">
                      số lượng
                    </div>

                    <div className="order_main_card_tt">
                        thành tiền
                    </div>

              </div>
            {cart.map((item, index) => (
              <div key={index} className="order-main-left-list-card">
                <div className="order_main_card_imgtitle">
                <img
                  className="order-main-left-list-card-image"
                  src={image1}
                  alt=""
                />
                  <p className="order-main-left-list-card-content-name">
                    {item.name}
                  </p>
                </div>
                  <p className="order-main-left-list-card-content-price">
                    {item.price}&#8363;
                  </p>

                    <div className="oder-main-left-list-card-function-button-num">
                      <p>số lượng: {item.num}</p>
                    </div>

                    <div className="order_main_card_tt">
                        <p>{item.price}&#8363;</p>
                    </div>
                
              </div>
            ))}
          </div>
        </div>
        <div className="order-main-right">
          <p className="cart-main-right-title">Tóm tắt theo thứ tự</p>
          <div className="cart-main-right-subtotal">
            <p className="cart-main-right-subtotal-title">Tổng phụ</p>
            <p className="cart-main-right-subtotal-content">6.883.034&#8363;</p>
          </div>
          <div className="cart-main-right-total">
            <p className="cart-main-right-total-title">
              Tổng &#10088;1&#10089;
            </p>
            <p className="cart-main-right-total-content">6.883.034&#8363;</p>
          </div>
          <button className="cart-main-right-button">Thanh toán</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;

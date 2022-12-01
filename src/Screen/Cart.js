import {
  DeleteOutlineSharp,
  FavoriteBorderSharp,
  VerifiedUserSharp,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import $ from "jquery";
import "../css/Cart.css";
import Footer from "./footer";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import logo from "../assets/logo_cty.png";
import ItemCart from "../item/ItemCart";

const Cart = () => {
  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Order");
  };

  
  const [cart, setCart] = useState([]);
  const [chk, setChk] = useState(false);

  const getCart = async () => {
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage){
        setCart(storage);
      }

  };

  useEffect(() => {
    getCart();
  }, []);



  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect" && checked === checked) {
      setChk(true)
    } 
  };

  const onclickHome = () => {
    navgate("/Home");
  };

  return (
    <div className="carrt">
      <ScrollToTop />
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

                  <li className="cart-header-stage-wrapper-container-step2">
                    <div className="cart-header-stage-wrapper-container-step-inner">
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
                  <div className="cart-header-stage-wrapper-container-line-process"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-main">
        <div className="cart_container">
          <div className="cart-main-left">
            <div className="cart-main-left-title">
              <p className="cart-main-left-title-content">
                Giỏ hàng &#10088;1&#10089;
              </p>
              <div className="cart-main-left-title-check">
                <input
                  type="checkbox"
                  name="allSelect"
                  onChange={handleChange}
                />
                <p>Chọn tất cả</p>
              </div>
            </div>
            <div className="cart-main-left-list">
              {cart.map((item, index) => (
                <ItemCart
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  num={item.num}
                  onhange={handleChange}
                  getCart={getCart}
                  check={chk}
                />
              ))}
            </div>
          </div>
          <div className="cart-main-right">
            <p className="cart-main-right-title">Tóm tắt theo thứ tự</p>
            <div className="cart-main-right-subtotal">
              <p className="cart-main-right-subtotal-title">Tổng phụ</p>
              <p className="cart-main-right-subtotal-content">
                6.883.034&#8363;
              </p>
            </div>
            <div className="cart-main-right-total">
              <p className="cart-main-right-total-title">
                Tổng &#10088;1&#10089;
              </p>
              <p className="cart-main-right-total-content">6.883.034&#8363;</p>
            </div>
            <button className="cart-main-right-button" onClick={onclickItem}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;

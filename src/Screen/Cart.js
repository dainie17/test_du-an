import {
  DeleteOutlineSharp,
  FavoriteBorderSharp,
  VerifiedUserSharp,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "../css/Cart.css";
import Footer from "./footer";
import ScrollToTop from "react-scroll-to-top";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";

const Cart = () => {
  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Order");
  };

  let reduce = [];
  const onclickReduce = (id) => {
    let storage = localStorage.getItem("cart");
    if (storage) {
      reduce = JSON.parse(storage);
    }

    let item = reduce.find((c) => c.id === id);

    if (item.num > 1) {
      item.num -= 1;
      localStorage.setItem("cart", JSON.stringify(reduce));
    } else if ((item.num = 1)) {
      reduce = reduce.filter((remove) => remove.id != id);
      localStorage.setItem("cart", JSON.stringify(reduce));
    }
    getCart();
  };

  const [cart, setCart] = useState([]);

  let addNum = [];
  const addNumToCart = async (id) => {
    let storage = localStorage.getItem("cart");
    if (storage) {
      addNum = JSON.parse(storage);
    }

    let item = addNum.find((c) => c.id === id);

    if (item) {
      item.num += 1;
    }
    localStorage.setItem("cart", JSON.stringify(addNum));
    getCart();
  };

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
    if (name === "allSelect") {
      let tempUser = cart.map((cart) => {
        return { ...cart, isChecked: checked };
      });
      setCart(tempUser);
    } else {
      let tempUser = cart.map((cart) =>
        cart.name === name ? { ...cart, isChecked: checked } : cart
      );
      setCart(tempUser);
    }
  };

  return (
    <div className="carrt">
      <ScrollToTop smooth></ScrollToTop>
      <div className="cart-header">
        <div className="cart_header_container">
          <div className="cart_header_left">
            <div className="cart-header-logo">
              <p>LOGO</p>
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
                  checked={
                    cart.filter((cart) => cart?.isChecked !== true).length < 1
                  }
                  onChange={handleChange}
                />
                <p>Chọn tất cả</p>
              </div>
            </div>
            <div className="cart-main-left-list">
              {cart.map((item, index) => (
                <div key={index} className="cart-main-left-list-card">
                  <input
                    className="cart-main-left-list-card-checkbox"
                    type="checkbox"
                    name={item.name}
                    checked={item?.isChecked || false}
                    onChange={handleChange}
                  />
                  <img
                    className="cart-main-left-list-card-image"
                    src={image1}
                    alt=""
                  />
                  <div className="cart-main-left-list-card-content">
                    <p className="cart-main-left-list-card-content-name">
                      {item.name}
                    </p>
                    <p className="cart-main-left-list-card-content-type">
                      Loại:{item.Loai}/Ship từ:{item.Ship}
                    </p>
                    <p className="cart-main-left-list-card-content-price">
                      {item.price}&#8363;
                    </p>
                    <p className="cart-main-left-list-card-content-cod">COD</p>
                  </div>
                  <div className="cart-main-left-list-card-function">
                    <div className="cart-main-left-list-card-function-button">
                      <button
                        onClick={() => {
                          onclickReduce(item.id);
                        }}
                        className="cart-main-left-list-card-function-button-reduce"
                      >
                        -
                      </button>
                      <p className="cart-main-left-list-card-function-button-num">
                        {item.num}
                      </p>
                      <button
                        onClick={() => {
                          addNumToCart(item.id);
                        }}
                        className="cart-main-left-list-card-function-button-more"
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-main-left-list-card-function-icon">
                      <FavoriteBorderSharp />
                      <DeleteOutlineSharp />
                    </div>
                  </div>
                </div>
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

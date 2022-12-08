import { VerifiedUserSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Order.css";
import Footer from "./footer";
import ScrollToTop from "react-scroll-to-top";
import Address from "../dialog/Address";
import logo from "../assets/logo_cty.png";
import BeatLoader from "react-spinners/BeatLoader";
import ItemImgCart from "../item/ItemImgCart";
import ItemOder from "../item/ItemOder";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";

export default function Order() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const [openAdd, setOpenAdd] = useState(false);
  const handleClickItemAdd = () => {
    setOpenAdd(true);
  };

  const [cart, setCart] = useState([]);

  const getCart = () => {
    var storage = localStorage.getItem("GioHang");
    var carrt = JSON.parse(storage);
    if (storage != null) {
      setCart(carrt);
    } else {
    }
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addre, setAddre] = useState("");
  const [nameCheck, setNameCheck] = useState(false);

  const getAddress = () => {
    var storage = localStorage.getItem("address");
    var address = JSON.parse(storage);
    if (storage != null) {
      setName(address.name);
      setPhone(address.phone);
      setEmail(address.email);
      setAddre(address.addres);
    } else {
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    getAddress();
  });

  let navgate = useNavigate();

  const onclickHome = () => {
    navgate("/");
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          <BeatLoader
            color={"#36d7b7"}
            loading={loading}
            size={15}
            margin={5}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <>
          <Address open={openAdd} setOpen={setOpenAdd} />
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
                  <p className="order-main-left-address-title">
                    Địa chỉ giao hàng
                  </p>
                  <div className="order-main-left-address-para">
                    <div className="order-main-left-address-para-icon"></div>
                    <div className="order-main-left-para-content">
                      <p className="order-main-left-address-para-content-person">
                        {name}, {phone}
                      </p>
                      <p className="order-main-left-address-content-address">
                        {addre}
                      </p>
                      <div className="order-main-left-address-content-button">
                        <button
                          onClick={handleClickItemAdd}
                          className="order-main-left-address-content-button-edit"
                        >
                          Chỉnh sửa
                        </button>
                        {/* <button className="order-main-left-address-content-button-delete">
                      Xóa
                    </button> */}
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
                  <p className="cart-main-left-list-title">
                    Xem trước đơn hàng
                  </p>
                  <div className="order-main-left-list">
                    <div className="order_main_card_imgtitle">
                      <p className="order-main-left-list-card-content-name">
                        Sản phẩm
                      </p>
                    </div>
                    <p
                      style={{ fontWeight: "bold" }}
                      className="order-main-left-list-card-content-price"
                    >
                      đơn giá
                    </p>

                    <div
                      style={{ fontWeight: "bold" }}
                      className="oder-main-left-list-card-function-button-num"
                    >
                      số lượng
                    </div>

                    <div className="order_main_card_tt">thành tiền</div>
                  </div>
                  {cart.map((item, index) => (
                    <ItemOder

                    key={item._id}
                    _id={item._id}
                    idUser={item.idUser}
                    Image={item.Image}
                    idImg={item.idImg}
                    NameSP={item.NameSP}
                    GiaCX={item.GiaCX}
                    GiaBanSP={item.GiaBanSP}
                    SoLuongSP={item.SoLuongSP}
                    SaleSP={item.SaleSP}
                    TrangThaiSP={item.TrangThaiSP}
                    LoaiSP={item.LoaiSP}
                    ChiTietSP={item.ChiTietSP}
                    />
                  ))}
                </div>
              </div>
              <div className="order-main-right">
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
                  <p className="cart-main-right-total-content">
                    6.883.034&#8363;
                  </p>
                </div>
                <button className="btn_thanh_toan">
                  <span className="span_thanh_toan">Đặt hàng</span>
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

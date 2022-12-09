import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AssignmentReturnSharp,
  DiamondSharp,
  GppGoodSharp,
  SupportAgentSharp,
  TokenSharp,
  ViewListSharp,
} from "@mui/icons-material";
import $ from "jquery";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import Navbar from "./Navbar";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../css/Product.css";
import Footer from "./footer";
import { useEffect, useState } from "react";

import axios from "axios";

import ItemProductType from "../item/ItemProductType";
import NavbarIn from "./NavbarIn";
import { clear } from "@testing-library/user-event/dist/clear";

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

const img =
  "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#63A3F7", zIndex: "999" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "#63A3F7" }} />
    </div>
  );
};

const Product = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const data = [image1, image2, image3, image4, image5];

  const ip = "http://localhost:8080";

  const [dsLoaiSP, setDsLoaiSP] = useState([]);

  const [danhsachSP, setDanhsachSP] = useState([]);

  const getDataLoaiSP = () => {
    axios.get(ip + "/getDataLoaiSP").then((response) => {
      setDsLoaiSP(response.data);
    });
  };

  // const getData = () => {
  //   axios.get(ip + '/getData')
  //     .then((response) => {
  //       setDanhsachSP(response.data);

  //     })
  // }

  let navgate = useNavigate();

  const [prevActive, setPrevActive] = useState(0);

  function addPre(vl) {
    if(vl == 0){
      setPrevActive(1)
    } else if(vl == 1){
      setPrevActive(2)
    }else if(vl == 2){
      setPrevActive(0)
    }
  }

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDataLoaiSP();
    // getData()
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    var data = JSON.parse(getUser);

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
    }

    const slides = document.querySelectorAll(".slide");
    const controls = document.querySelectorAll(".control");
    let activeSlide = 0;



      if (prevActive == 0) {
        $(".abcd").ready(function(){
          $(`.slide_1`).addClass("active");
          $(`.control_1`).addClass("active");
          $(`.slide_2`).removeClass("active");
          $(`.control_2`).removeClass("active");
          $(`.slide_3`).removeClass("active");
          $(`.control_3`).removeClass("active");
          setTimeout( function() {
            addPre(0);
          }, 4000);
        })
      } else  if (prevActive == 1) {
        $(".abcd").ready(function(){
          $(`.slide_2`).addClass("active");
          $(`.control_2`).addClass("active");
          $(`.slide_1`).removeClass("active");
          $(`.control_1`).removeClass("active");
          $(`.slide_3`).removeClass("active");
          $(`.control_3`).removeClass("active");
          setTimeout( function() {
            addPre(1);
          }, 4000);
        })
      } else  if (prevActive == 2) {

        $(".abcd").ready(function(){
          $(`.slide_3`).addClass("active");
          $(`.control_3`).addClass("active");
          $(`.slide_1`).removeClass("active");
          $(`.control_1`).removeClass("active");
          $(`.slide_2`).removeClass("active");
          $(`.control_2`).removeClass("active");
          setTimeout( function() {
            addPre(2);
          }, 4000);
        })
        
      }

  });

  return (
    <div className="product">
      <ScrollToTop />
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
        <div>
          {chxNab ? <NavbarIn /> : <Navbar />}

          {/* main */}
          <div className="product-main">
            <div className="product_container">
              <div className="product-main-top">
                <button className="abcd" style={{display:"none"}}></button>
                <div className="product-main-top-left">
                  <div className="product-main-top-left-title">
                    <ViewListSharp />
                    <p>Danh sách sản phẩm</p>
                  </div>
                  <div className="product-main-top-left-content">
                    {dsLoaiSP.map((item, index) => (
                      <div key={index} className="list_type">
                        <p>{item.NameLoaiSP.substring(0, 28)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="product-main-top-center">
                  <div className="product-main-top-center-slide">
                    {/* <Slider
                      autoplay={true}
                      autoplaySpeed={2000}
                      prevArrow={<PreviousBtn />}
                      nextArrow={<NextBtn />}
                    >
                      {data.map((item, index) => (
                        <div key={index}>
                          <img
                            src={item}
                            alt=""
                            className="product-main-top-center-slide-img"
                          />
                        </div>
                      ))}
                    </Slider> */}
                    <div className="slider-container">
                      <h1>
                        The best for
                        <br />
                        the brightest.
                      </h1>
                      <div
                        className="slide slide_1"
                        style={{
                          background:
                            "url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
                        }}
                      ></div>

                      <div
                        className="slide slide_2"
                        style={{
                          background:
                            "url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')",
                        }}
                      ></div>

                      <div
                        className="slide slide_3"
                        style={{
                          background:
                            "url('https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80')",
                        }}
                      ></div>

                      <div className="controls-container">
                        <div className="control control_1"></div>
                        <div className="control control_2"></div>
                        <div className="control control_3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-main-top-right">
                  <div className="product-main-top-right-user">
                    <div className="img_user_product">
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          sx={{ width: 60, height: 60 }}
                          alt="Remy Sharp"
                          src={img}
                        />
                      </StyledBadge>
                    </div>
                    <div className="product-main-top-right-user-information">
                      <div className="product-main-top-right-user-information-title">
                        <p>Xin chào! Punpun</p>
                      </div>
                      <div className="product-main-top-right-user-information-button">
                        <button className="product-main-top-right-user-information-button-left">
                          Tài khoản
                        </button>
                        <button className="product-main-top-right-user-information-button-right">
                          Đơn hàng
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="product_service">
                    <div className="product-main-top-right-title">
                      <p>Chính sách dịch vụ khách hàng</p>
                    </div>
                    <div className="product-main-top-right-service">
                      <div className="product-main-top-right-service-top">
                        <div className="product-main-top-right-service-top-left">
                          <GppGoodSharp
                            style={{ fontSize: "15px", paddingRight: "1px" }}
                          />
                          <p>Bảo mật thanh toán</p>
                        </div>
                        <div className="product-main-top-right-service-top-right">
                          <TokenSharp
                            style={{ fontSize: "15px", paddingRight: "1px" }}
                          />
                          <p>Đảm bảo giao hàng</p>
                        </div>
                      </div>
                      <div className="product-main-top-right-service-bottom">
                        <div className="product-main-top-right-service-bottom-left">
                          <DiamondSharp
                            style={{ fontSize: "15px", paddingRight: "1px" }}
                          />
                          <p>Đảm bảo chất lượng</p>
                        </div>
                        <div className="product-main-top-right-service-bottom-right">
                          <AssignmentReturnSharp
                            style={{ fontSize: "15px", paddingRight: "1px" }}
                          />
                          <p>Trả lại không lý do</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-main-list">
              {dsLoaiSP.map((item, index) => {
                if (item.TrangThaiLoaiSP == "Hoạt động") {
                  return (
                    <ItemProductType key={index} NameLoaiSP={item.NameLoaiSP} />
                  );
                } else if (item.TrangThaiLoaiSP == "Không hoạt động") {
                }
              })}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Product;

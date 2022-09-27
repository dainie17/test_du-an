import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { AssignmentReturnSharp, DiamondSharp, GppGoodSharp, SupportAgentSharp, TokenSharp, ViewListSharp } from "@mui/icons-material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";

const image1 = "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";
const image2 = "https://cdn.tgdd.vn/Files/2019/11/18/1220010/4-cach-ve-sinh-ben-trong-chai-lo-cuc-sach-ban-nen-thu-21-760x367.jpg";
const image3 = "https://bizweb.dktcdn.net/100/154/029/files/san-xuat-chai-lo-nhua-2-941c40bb-0124-4086-8aab-ad24dc55c0b8.jpg?v=1501056541035";
const image4 = "https://i-raovat.vnecdn.net/2020/05/22/51ade386733b048d7c00c29720e39c04.jpeg?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=irmRdkv5lf-nqmbP2V8WXg";
const image5 = "https://thuytinhtadaco.com/wp-content/uploads/2021/08/chai-lo-thuy-tinh.jpg";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "blue" }} />
        </div>
    )
}

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "blue" }} />
        </div>
    )
}

const Product = () => {

    const data = [image1, image2, image3, image4, image5]
    const dataList = [image1, image2, image3]

    return (
        <div className="product">
            <nav className="home-header">
                <h3 style={{ width: "20%", textAlign: "center" }}>logo</h3>
                <ul className="home-header_ul">
                    <li>
                        <NavLink className="home-header_ul_li_navlink" to="/Home">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink className="home-header_ul_li_navlink" to="/Introduce">Giới thiệu</NavLink>
                    </li>
                    <li className="home-header_ul_subnav">
                        <NavLink className="home-header_ul_li_navlink" to="/Introduce">Sản phẩm</NavLink>
                        <ArrowDropDownIcon className="home-header_ul_li_navlink_icon" />
                        <div className="home-header_ul_subnav_content">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </li>
                    <li>
                        <NavLink className="home-header_ul_li_navlink" to="/Navigate">Ưu đãi</NavLink>
                    </li>
                    <li>
                        <NavLink className="home-header_ul_li_navlink" to="/Introduce">Liên hệ</NavLink>
                    </li>
                </ul>
                <div className="home-header_icon">
                    <SearchSharpIcon />

                    <div className="home-header_icon_user">
                        <AccountCircleSharpIcon className="home-header_icon_user_img" />
                        <div className="home-header_icon_user_content">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>

                    <ShoppingCartIcon />
                </div>
            </nav>

            {/* main */}
            <div className="product-main">
                <div className="product-main-top">
                    <div className="product-main-top-left">
                        <div className="product-main-top-left-title">
                            <ViewListSharp />
                            <p>Danh sách sản phẩm</p>
                        </div>
                        <div className="product-main-top-left-content">

                        </div>
                    </div>

                    <div className="product-main-top-center">
                        <div className="product-main-top-center-right-slide">
                            <Slider
                                autoplay={true}
                                autoplaySpeed={2000}
                                prevArrow={<PreviousBtn />}
                                nextArrow={<NextBtn />}
                            >
                                {
                                    data.map((item, index) => (
                                        <div key={index}>
                                            <img src={item} alt="" className="product-main-top-center-right-slide-img" />
                                        </div>
                                    ))
                                }

                            </Slider>
                        </div>
                        <div className="product-main-top-center-right-content">
                            <p>Sản phẩm mới</p>
                            <div className="product-main-top-center-right-content-list">
                                {
                                    dataList.map((item, index) => (
                                        <div className="product-main-top-center-right-content-list-item" key={index}>
                                            <img src={item} className="product-main-top-center-right-content-list-item-img" alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="product-main-top-right">
                        <div className="product-main-top-right-user">
                            <div className="product-main-top-right-user-icon">
                                <SupportAgentSharp style={{ fontSize: "60px" }} />
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
                        <div className="product-main-top-right-title">
                            <p>Chính sách dịch vụ khách hàng</p>
                        </div>
                        <div className="product-main-top-right-service">
                            <div className="product-main-top-right-service-top">
                                <div className="product-main-top-right-service-top-left">
                                    <GppGoodSharp />
                                    <p>Bảo mật thanh toán</p>
                                </div>
                                <div className="product-main-top-right-service-top-right">
                                    <TokenSharp />
                                    <p>Đảm bảo giao hàng</p>
                                </div>
                            </div>
                            <div className="product-main-top-right-service-bottom">
                                <div className="product-main-top-right-service-bottom-left">
                                    <DiamondSharp />
                                    <p>Đảm bảo chất lượng</p>
                                </div>
                                <div className="product-main-top-right-service-bottom-right">
                                    <AssignmentReturnSharp />
                                    <p>Trả lại không lý do</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-main-top-right-image">
                            <img src={image1} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product;
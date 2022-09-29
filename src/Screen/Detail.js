import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Call, FavoriteBorderSharp, HistorySharp, LocalShippingSharp, TokenSharp, VerifiedSharp, VerifiedUser } from "@mui/icons-material";
import Slider from "react-slick";

const image1 = "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";
const image2 = "https://cdn.tgdd.vn/Files/2019/11/18/1220010/4-cach-ve-sinh-ben-trong-chai-lo-cuc-sach-ban-nen-thu-21-760x367.jpg";
const image3 = "https://bizweb.dktcdn.net/100/154/029/files/san-xuat-chai-lo-nhua-2-941c40bb-0124-4086-8aab-ad24dc55c0b8.jpg?v=1501056541035";
const image4 = "https://i-raovat.vnecdn.net/2020/05/22/51ade386733b048d7c00c29720e39c04.jpeg?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=irmRdkv5lf-nqmbP2V8WXg";
const image5 = "https://thuytinhtadaco.com/wp-content/uploads/2021/08/chai-lo-thuy-tinh.jpg";

const Detail = () => {

    useEffect(() => {
        const u = localStorage.getItem("uses");
        console.log(u);
    });

    let navgate = useNavigate();

    const onclickItem =()=>{
        navgate("/Cart");
    }

    const data = [image1, image2, image3, image4, image5];

    return (
        <div className="detail">
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
                        <NavLink className="home-header_ul_li_navlink" to="/Product">Sản phẩm</NavLink>
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

            <div className="detail-main">
                <div className="detail-main-top">
                    <div className="detail-main-top-left">
                        <Slider
                            dots
                            customPaging={(i)=>{
                                return(
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
                    <p className="detail-main-top-right-name">Tai nghe chơi game EKSA E900Plus  Tai nghe Gamer cho PC máy tính xách tay PS4 </p>
                    <p className="detail-main-top-right-number">Số lượng: 30</p>
                    <p className="detail-main-top-right-price">1.234.000 &#8363;</p>
                    <p className="detail-main-top-right-title">Thông tin sản phẩm:</p>
                    <p className="detail-main-top-right-content">Về phần thiết kế, nhà Apple vẫn giữ nguyên kiểu dáng quen thuộc của những phiên bản tiền nhiệm trước đó như: Thiết kế gọn nhẹ, đường bo góc tinh tế, gam màu trắng trang nhã bao bọc trọn vẹn tai nghe và hộp sạc.Ở phiên bản này, hộp sạc được trang bị thêm phần khoen để móc dây treo tiện lợi. Nhờ đó, bạn có thể dễ dàng treo vào balo và mang đi bất kỳ đâu mà không cần dùng tới túi đựng AirPods chuyên dụng. Loa tích hợp trên hộp sạc có thể phát âm thanh giúp bạn dễ dàng xác định vị trí khi vô tình đánh rơi và phát ra âm cảnh báo khi pin yếu hoặc quá trình ghép nối hoàn tất.

                        Ngoài ra, trong mỗi hộp tai nghe Apple này sẽ có bốn cặp đệm tai với các kích cỡ XS, S, M, L cho người dùng thoải mái lựa chọn đệm tai phù hợp. Đệm tai làm từ chất liệu silicone cao cấp cũng sẽ cho bạn cảm giác mềm mại, vừa vặn khi đeo.</p>
                    <div className="detail-main-top-right-button">
                        <div className="detail-main-top-right-button-picknb">
                            <button className="detail-main-top-right-button-picknb-reduce">-</button>
                            <p className="detail-main-top-right-button-picknb-num">1</p>
                            <button className="detail-main-top-right-button-picknb-augment">+</button>
                        </div>
                        <div className="detail-main-top-right-button-favorite">
                            <FavoriteBorderSharp />
                            <p>153</p>
                        </div>
                    </div>
                    <button onClick={onclickItem} className="detail-main-top-right-btngh">Thêm vào giỏ hàng</button>
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

            <div className="home-main-purview">
                <div className="home-main-purview-card">
                    <LocalShippingSharp style={{ fontSize: "70px" }} />
                    <p>GIAO HÀNG TOÀN QUỐC</p>
                </div>
                <div className="home-main-purview-card">
                    <HistorySharp style={{ fontSize: "70px" }} />
                    <p>HOÀN TIỀN NẾU HÀNG LỖI</p>
                </div>
                <div className="home-main-purview-card">
                    <Call style={{ fontSize: "70px" }} />
                    <p>CHĂM SÓC KHÁCH HÀNG 24/7</p>
                </div>
                <div className="home-main-purview-card" style={{ border: "none" }}>
                    <VerifiedUser style={{ fontSize: "70px" }} />
                    <p>CAM KẾT 100% CHẤT LƯỢNG</p>
                </div>
            </div>
        </div>

        </div >
    )
}

export default Detail;
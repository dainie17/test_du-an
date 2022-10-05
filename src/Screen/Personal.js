import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Shop2Icon from '@mui/icons-material/Shop2';
import LogoutIcon from '@mui/icons-material/Logout';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { DeleteOutlineSharp, FavoriteBorderSharp, VerifiedUserSharp } from "@mui/icons-material";
import '../css/Personal.css'
import { pink } from "@mui/material/colors";

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const img ="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

function Person() {
    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(data);
    }, []);

    const data = [
        {
            name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc Dao cắt dầu Đầu kéo tông đơ",
            Loai: "B",
            Ship: "CN",
            price: "368.374",
            image: img
        },
        {
            name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc",
            Loai: "B",
            Ship: "CN",
            price: "368.374",
            image: img
        },]

    return (
        <div className="fersonal">
            <div className="container">
                <nav className="home-header">
                    <div className="home-header_logo">
                        <img className="home-header-logo-image" src={logo} alt="" />
                        <p className="home-header-logo-title">logo</p>
                    </div>
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
                        <SearchSharpIcon style={{ fontSize: "40px" }} />

                        <div className="home-header_icon_user">
                            <AccountCircleSharpIcon style={{ fontSize: "40px" }} className="home-header_icon_user_img" />
                            <div style={{ right: "6%" }} className="home-header_icon_user_content">
                                <a href="#company">Company</a>
                                <a href="#team">Team</a>
                                <a href="#careers">Careers</a>
                            </div>
                        </div>

                        <ShoppingCartIcon style={{ fontSize: "40px" }} />
                    </div>
                </nav>

            </div>
            <div className="fersonal_container">
                <div className="fersonal_container-left">
                    <h3>Tài khoản của tôi</h3>
                    <div className="fersonal_container-left--info">
                        <div className="fersonal_container-left--info--tabs" onClick={() => toogleTab(1)}>
                            <PermContactCalendarIcon sx={{ marginRight: '2%', color: '#ffa726', fontSize: 20 }} />Thông tin</div>
                        <div className="fersonal_container-left--info--tabs" onClick={() => toogleTab(2)}>
                            <LocalMallIcon sx={{ marginRight: '2%', color: '#ffa726', fontSize: 20 }} /> Sản phẩm ưa thích</div>
                        <div className="fersonal_container-left--info--tabs" onClick={() => toogleTab(3)}>
                            <Shop2Icon sx={{ marginRight: '2%', color: '#ffa726', fontSize: 20 }} /> Giỏ hàng</div>
                        <div className="fersonal_container-left--info--tabs" onClick={() => toogleTab(4)}>
                            <Shop2Icon sx={{ marginRight: '2%', color: '#ffa726', fontSize: 20 }} />Đơn đặt hàng của tôi</div>
                        <div className="fersonal_container-left--info--tabs" onClick={() => toogleTab(5)}>
                            <AutorenewIcon sx={{ marginRight: '2%', color: '#ffa726', fontSize: 20 }} />Tình trạng đơn hàng</div>
                        <div className="fersonal_container-left--info--tabs" onClick={() => toogleTab(6)}>
                            <LogoutIcon sx={{ marginRight: '2%', color: '#ffa726', fontSize: 20 }} />Đăng xuất</div>
                    </div>
                </div>
                <div className="fersonal_container-right">
                    <div className="fersonal_container-right--header">
                        <div className="fersonal_container-right--header--avatar">
                        </div>
                        <div className="fersonal_container-right--header--content">
                            <div className="content" onClick={() => toogleTab(4)}>
                                <AccountCircleSharpIcon sx={{ fontSize: 60, color: '#ffa726' }} />
                                <p>Đơn hàng của tôi</p>
                            </div>
                            <div className="content" onClick={() => toogleTab(5)}>
                                <LocalTaxiIcon sx={{ fontSize: 60, color: '#ffa726' }} />
                                <p>Tình trạng đơn hàng</p>
                            </div>
                            <div className="content" onClick={() => toogleTab(1)}>
                                <FavoriteIcon sx={{ fontSize: 60, color: pink[500] }} />
                                <p>Yêu thích</p>
                            </div>
                        </div>


                    </div>
                    <div className="fersonal_container-right--fooder--content">
                        <div className={toggleState === 1 ? "contentt active-content" : "ac"}>
                            <p>Thong Tin</p></div>
                        <div className={toggleState === 2 ? "contentt active-content" : "ac"}>
                            <p>Sản phẩm ưa thích</p>
                        </div>
                        <div className={toggleState === 3 ? "contentt active-content" : "ac"}>
                            <div className="active-content-title">
                                <p className="active-content-title-content">Giỏ hàng </p>
                            </div>
                            <div className="active-content-list">
                                {
                                    user.map((item, index) => (
                                        <div>
                                        <div key={index} className="active-content-list-card">
                                            <img className="active-content-list-card-image" src={item.image} alt="" />
                                            <div className="active-content-list-card-content">
                                                <p className="active-content-list-card-content-name">{item.name}</p>
                                                <p className="active-content-list-card-content-type">Loại:{item.Loai}/Ship từ:{item.Ship}</p>
                                                <p className="active-content-list-card-content-price">{item.price}&#8363;</p>
                                                <p className="active-content-list-card-content-cod"><p>COD</p></p>
                                            </div>
                                            <div className="active-content-list-card-function">
                                                <div className="active-content-list-card-function-button">
                                                    <button className="active-content-list-card-function-button-reduce">-</button>
                                                    <p className="active-content-list-card-function-button-num">1</p>
                                                    <button className="active-content-list-card-function-button-more">+</button>
                                                </div>
                                                <div className="active-content-list-card-function-icon">
                                                    <FavoriteBorderSharp />
                                                    <DeleteOutlineSharp />
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="personal-br"></div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                        <div className={toggleState === 4 ? "contentt active-content" : "ac"}>
                            <p>Đơn hàng</p>
                        </div>
                        <div className={toggleState === 5 ? "contentt active-content" : "ac"}>
                            <p>Tình trạng</p>
                        </div>
                        <div className={toggleState === 6 ? "contentt active-content" : "ac"}>
                            <p>Đăng xuất</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer_container">
                    <img src={logo} />
                    <br />
                    <input></input>
                    <br />
                    <div className="footer_container--page" >
                        <div className="footer_container--page--page">
                            <h3>FANPAGE</h3>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"  ></iframe>
                        </div>
                        <div className="footer_container--page--company" >
                            <h3> Công ty TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</h3>
                            <p><PinDropIcon sx={{ marginRight: '2%' }} /> 840/20B Hương Lộ 2, Phường Bình Trị Đông A,
                                Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
                            <p><CallIcon sx={{ marginRight: '2%' }} />(84+) 706 185 986</p>
                            <p><EmailIcon sx={{ marginRight: '2%' }} />vagabonds.2hand@gmail.comt</p>
                            <div className="netword">
                                <FacebookIcon sx={{ color: '#fff', float: 'left', marginTop: '5%' }} />
                                <YouTubeIcon sx={{ color: '#fff', float: 'left', margin: '5%' }} />
                                <InstagramIcon sx={{ color: '#fff', float: 'left', marginTop: '5%' }} />
                            </div>
                        </div>
                        <div className="footer_container--page--we" >
                            <h3>Về chúng tôi</h3><br></br>
                            <div className="we">
                                <p>Giới thiệu</p>
                                <p>Sản phẩm</p>
                                <p>Ưu đãi</p>
                                <p>Liên hệ</p>
                            </div>
                        </div>
                        <div className="footer_container--page--policy" >
                            <h3>Chính sách</h3><br />
                            <div className="policy">
                                <p>Chính sách bảo mật</p>
                                <p>Chính sách đổi trả</p>
                                <p>Chính sách bảo hành </p>
                                <p>Chính sách giao hàng</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;
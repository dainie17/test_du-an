import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import './Personal.css'

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";


function Person() {
    return (
        <div className="fersonal">
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
                        <a href="/Personal"><AccountCircleSharpIcon className="home-header_icon_user_img" /></a>
                        <div className="home-header_icon_user_content">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>

                    <ShoppingCartIcon />
                </div>
            </nav>
            <div className="fersonal_container">
                <div className="fersonal_container-left">
                    <h2>Tài khoản của tôi</h2>
                    <div className="fersonal_container-left--info">
                        <a href="#1">Thông tin</a>
                        <a href="#2">Thông tin</a>
                        <a href="#3">Thông tin</a>
                        <a href="#4">Thông tin</a>
                        <a href="#5">Thông tin</a>
                        <a href="#6">Thông tin</a>
                    </div>
                </div>
                <div className="fersonal_container-right">
                    <div className="fersonal_container-right--header">
                        <div className="fersonal_container-right--header--avatar">

                        </div>
                        <div className="fersonal_container-right--header--content">
                            <div className="content">
                            <AccountCircleSharpIcon sx={{fontSize:50}}/>
                            <p>Đơn hàng của tôi</p>
                            </div>
                            <div className="content">
                            <LocalTaxiIcon sx={{fontSize:50}}/>
                            <p>Tình trạng đơn hàng</p>
                            </div>
                            <div className="content">
                            <AccountCircleSharpIcon sx={{fontSize:50}}/>
                            <p>Yêu thích</p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="fersonal_container-right--fooder--content">

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
                            <h2>FANPAGE</h2><br />
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="331" ></iframe>
                        </div>
                        <div className="footer_container--page--company" >
                            <h2>Công ty TNHH SẢN XUẤT ĐẦU TƯ
                                TM DV XNK VŨ GIA GROUP</h2>
                            <p>840/20B Hương Lộ 2, Phường Bình Trị Đông A,
                                Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
                            <p>(84+) 706 185 986</p>
                            <p>vagabonds.2hand@gmail.comt</p>
                        </div>
                        <div className="footer_container--page--we" >
                            <h2>Về chúng tôi</h2><br></br>
                            <p>Giới thiệu</p>
                            <p>Sản phẩm</p>
                            <p>Ưu đãi</p>
                            <p>Liên hệ</p>
                        </div>
                        <div className="footer_container--page--policy" >
                            <h2>Chính sách</h2><br />
                            <p>Chính sách bảo mật</p>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách bảo hành </p>
                            <p>Chính sách giao hàng</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;
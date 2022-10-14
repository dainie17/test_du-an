
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/Introduce.css'
import Footer from "./footer";

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const Introduce = () => {
    let navgate = useNavigate();

    const onclickItem = () => {
        navgate("/Personal");
    }
    return (
        <div>
            <nav className="home-header">
          <div className="header_container">
          <div className="home-header_logo">
            <img className="home-header-logo-image" src={logo} alt="" />
            <p className="home-header-logo-title">logo</p>
          </div>
          <ul className="home-header_ul">
            <li>
              <NavLink className="home-header_ul_li_navlink" to="/Home">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink className="home-header_ul_li_navlink" to="/Introduce">
                Giới thiệu
              </NavLink>
            </li>
            <li className="home-header_ul_subnav">
                <NavLink className="home-header_ul_li_navlink" to="/Product">
                  Sản phẩm
                </NavLink>
              <div className="home-header_ul_subnav_content">
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
              </div>
            </li>
            <li>
              <NavLink className="home-header_ul_li_navlink" to="/Navigate">
                Ưu đãi
              </NavLink>
            </li>
            <li>
              <NavLink className="home-header_ul_li_navlink" to="/Introduce">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className="home-header_icon">
            <div className="font_icon_nav">
              <div className="search" />
            </div>

            <div className="home-header_icon_user">
              <div className="home-header_icon_user_img"
                onClick={onclickItem}>
              <div className="user" />
              </div>
              <div className="home-header_icon_user_content">
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
              </div>
            </div>
            <div className="font_icon_nav">
              <div className="cart" />
            </div>
          </div>
          </div>
        </nav>
            <div className="title">
                <div className="title_header">
                    <h2>Liên hệ</h2>
                </div>
                <div className="title_container">
                    <div className="title_container--text">
                        <p className="CT">CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p>
                        <div className="title_container--text--name">
                            <div className="title_container--text--name--content">
                                <div className="title_container--text--name--content--group" >
                                    <div className="name">
                                        <PublicIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                                        <p style={{ fontWeight: 'bold' }}>Tên quốc tế</p>
                                    </div>
                                    <p id="diachi">CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p>
                                </div>
                                <div className="Br"></div>
                            </div>
                            <div className="title_container--text--name--content">
                                <div className="title_container--text--name--content--group" >
                                    <div className="name">
                                        <AlignVerticalCenterIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                                        <p style={{ fontWeight: 'bold' }}>Mã số thuế</p>
                                    </div>
                                    <p id="diachi" >0782565750</p>
                                </div>
                                <div className="Br"></div>
                            </div>
                            <div className="title_container--text--name--content">
                                <div className="title_container--text--name--content--group" >
                                    <div className="name">
                                        <LocationOnIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                                        <p style={{ fontWeight: 'bold' }}>Địa chỉ </p>
                                    </div>
                                    <p id="diachi">840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình Tân, T.P Hồ Chí Mình, Việt Nam</p>
                                </div>
                                <div className="Br"></div>

                            </div>
                            <div className="title_container--text--name--content">
                                <div className="title_container--text--name--content--group" >
                                    <div className="name">
                                        <PersonIcon sx={{ fontSize: 15 }} />
                                        <p style={{ fontWeight: 'bold' }}>Người Đại Diện </p>
                                    </div>
                                    <p id="diachi" >Vũ Anh Tuấn <br /> Ngoài ra Vũ Anh Tuấn còn đại diện các doanh nghiệp: <br />    Công Ty Cổ Phần Thương Mại Dịch Vụ</p>
                                </div>
                                <div className="Br"></div>
                            </div>
                            <div className="title_container--text--name--content">
                                <div className="title_container--text--name--content--group" >
                                    <div className="name">
                                        <LocalPhoneIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                                        <p style={{ fontWeight: 'bold' }}>Số điện thoại</p>
                                    </div>
                                    <p id="diachi">0782565750</p>
                                </div>

                            </div>


                            {/* <PublicIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '10%' }}>Tên quốc tế</p>
                            <p >CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p><br />   <hr /> */}
                            {/* <AlignVerticalCenterIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '10%' }}>Mã số thuế</p>
                            <p >0782565750</p><br /><hr />
                            <LocationOnIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '13%' }}>Địa chỉ </p>
                            <p >840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình Tân, T.P Hồ Chí Mình, Việt Nam</p><br /><hr />
                            
                            <p style={{ marginRight: '7%',display:'flex', float:'left' }}><PersonIcon sx={{ fontSize: 15, }} />Người Đại Diện </p>
                            <p >Vũ Anh Tuấn <br /> Ngoài ra Vũ Anh Tuấn còn đại diện các doanh nghiệp: <br />    Công Ty Cổ Phần Thương Mại Dịch Vụ</p><br /><hr />
                            <LocalPhoneIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '9%' }}>Số điện thoại</p>
                            <p >0782565750</p><br /> */}
                        </div>
                    </div>
                    <div className="title_container--input">
                        <input type="text" name="search" placeholder="Họ và tên" />
                        <input type="text" name="search" placeholder="Email" />
                        <input type="text" name="search" placeholder="Điện thoại" />
                        <input type="text" name="search" placeholder="Địa chỉ" />
                        <textarea id="container" type="text" name="search" placeholder="Nội dung" />
                        <button > Gửi</button>
                    </div>

                </div>

            </div>
            <div className="bando">
                <div className='bando_khobau'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210063.33014376528!2d105.6389760715208!3d9.804323603329172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089b78ddc936b%3A0x8e8d46a009e63c4e!2zU0hPUCBUSOG7giBUSEFPIFTDglkgxJDDlCBTUE9SVA!5e0!3m2!1svi!2s!4v1663951607719!5m2!1svi!2s"
                    ></iframe>
                </div>

            </div>
              <Footer/>
        </div>
    )
}

export default Introduce;
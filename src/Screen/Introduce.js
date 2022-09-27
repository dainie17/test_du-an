
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

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const Introduce = () => {
    let navgate = useNavigate();
    const onclick = () => {
        localStorage.setItem("uses", 0);
        navgate("/");
    }
    return (
        <div>
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
            <div className="title">
                <div className="title_header">
                    <h2>Liên hệ</h2>
                </div>
                <div className="title_container">
                    <div className="title_container--text">
                        <p className="CT">CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p>
                        <div className="title_container--text--name">
                            <PublicIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '10%' }}>Tên quốc tế</p>
                            <p >CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p><br />   <hr />
                            <AlignVerticalCenterIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '10%' }}>Mã số thuế</p>
                            <p >0782565750</p><br /><hr />
                            <LocationOnIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '13%' }}>Địa chỉ </p>
                            <p >840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình Tân, T.P Hồ Chí Mình, Việt Nam</p><br /><hr />
                            <PersonIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '7%' }}>Người Đại Diện </p>
                            <p >Vũ Anh Tuấn <br /> Ngoài ra Vũ Anh Tuấn còn đại diện các doanh nghiệp: <br />    Công Ty Cổ Phần Thương Mại Dịch Vụ</p><br /><hr />
                            <LocalPhoneIcon sx={{ fontSize: 15, marginRight: '0.5%' }} />
                            <p style={{ marginRight: '9%' }}>Số điện thoại</p>
                            <p >0782565750</p><br />
                        </div>
                    </div>
                    <div className="title_container--input">
                        <input type="text" name="search" placeholder="Họ và tên" />
                        <input type="text" name="search" placeholder="Email" />
                        <input type="text" name="search" placeholder="Điện thoại" />
                        <input type="text" name="search" placeholder="Địa chỉ" />
                        <input id="container" type="text" name="search" placeholder="Nội dung" />
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

export default Introduce;
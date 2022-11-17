import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/logo.png"


import '../css/footer.css'
import { NavLink } from "react-router-dom";


function footer() {
    return (
        <div className="footer">
            <div className="footer_container">

                {/* -----------------logo vs namelogo------------------- */}
                <div className="footer_Sort">
                    <div className="form_trademark">
                        <img className="logo_footer" src={logo} />
                        <img className="nameLogo_footer" src={"#"} />
                    </div>
                </div>

                {/* ----------------thong tin footer---------------------- */}

                <div className="form_information_footer">
                    <div className="form_fanpage">
                        <h3>FANPAGE</h3>
                        <div>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FL-A-studio-464549147733598%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"  ></iframe>
                        </div>
                    </div>

                    <div className="form_contact">
                        <h3> Công ty TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</h3>
                        <div className="location">

                            <PinDropIcon sx={{ fontSize: "25px", marginRight: '20px' }} />

                            <p> 840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
                        </div>
                        <div className="location">

                            <CallIcon sx={{ fontSize: "25px", marginRight: '20px' }} />

                            <p> (84+) 706 185 986</p>
                        </div>
                        <div className="location">
                            <EmailIcon sx={{ fontSize: "25px", marginRight: '20px' }} />
                            <p> vagabonds.2hand@gmail.comt</p>
                        </div>
                        <div className="location_nework">
                            <div className="nework_icon">
                                <FacebookIcon sx={{ fontSize: "15px" }} />
                            </div>
                            <div className="nework_icon">
                                <YouTubeIcon sx={{ fontSize: "15px" }} />
                            </div>
                            <div className="nework_icon">
                                <InstagramIcon sx={{ fontSize: "15px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="form_people">
                        <h3>Về chúng tôi</h3>
                        <div className="form_people_p" >
                            <NavLink to='/Contact' className="form_people_p_me">Giới thiệu</NavLink>
                            <NavLink to='/Product' className="form_people_p_me">Sản phẩm</NavLink>
                            <NavLink to='/Navigate' className="form_people_p_me">Ưu đãi</NavLink>
                            <NavLink to='/Introduce' className="form_people_p_me">Liên hệ</NavLink>
                        </div>
                    </div>
                    <div className="form_people">
                        <h3>Chính sách</h3>
                        <div className="form_people_p" >

                            <NavLink className="form_link" to="/baomat">
                                Chính sách bảo mật
                            </NavLink>
                            <NavLink className="form_link" to="/doitra">
                                Chính sách đổi trả
                            </NavLink>
                            <NavLink className="form_link" to="/thanhtoan">
                                Chính sách thanh toán
                            </NavLink>
                            <NavLink className="form_link" to="/vanchuyen">
                                Chính sách vận chuyển
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="form_banquyen">
                    <p>©2022 Bản quyền thuộc về Công Ty TNHH Sản Xuất Đầu Tư TM DV XNK Vũ Gia Group.</p>
                </div>
            </div>
        </div>
    )
}

export default footer;
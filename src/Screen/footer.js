import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


import '../css/footer.css'
const logo =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";


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
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.
                            facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_
                            container_width=true&hide_cover=false&show_facepile=true&appId"></iframe>
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
                            <p>Giới thiệu</p>
                            <p>Sản phẩm</p>
                            <p>Ưu đãi</p>
                            <p>Liên hệ</p>
                        </div>
                    </div>
                    <div className="form_people">
                        <h3>Chính sách</h3>
                        <div className="form_people_p" >
                            <p>Chính sách bảo mật</p>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách bảo hành </p>
                            <p>Chính sách giao hàng</p>
                        </div>
                    </div>
                </div>


                {/* <br />
                <input></input>
                <br />
                <div className="footer_container--page">
                    <div className="footer_container--page--page">
                        <h3>FANPAGE</h3>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"></iframe>
                    </div>
                    <div className="footer_container--page--company">
                        <h3> Công ty TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</h3>
                        <p>
                            <PinDropIcon sx={{ marginRight: "2%" }} /> 840/20B Hương Lộ 2,
                            Phường Bình Trị Đông A, Quận Bình Tân, Thành phố Hồ Chí Minh,
                            Việt Nam
                        </p>
                        <p>
                            <CallIcon sx={{ marginRight: "2%" }} />
                            (84+) 706 185 986
                        </p>
                        <p>
                            <EmailIcon sx={{ marginRight: "2%" }} />
                            vagabonds.2hand@gmail.comt
                        </p>
                        <div className="netword">
                            <FacebookIcon
                                sx={{ color: "#fff", float: "left", marginTop: "5%" }}
                            />
                            <YouTubeIcon
                                sx={{ color: "#fff", float: "left", margin: "5%" }}
                            />
                            <InstagramIcon
                                sx={{ color: "#fff", float: "left", marginTop: "5%" }}
                            />
                        </div>
                    </div>
                    <div className="footer_container--page--we">
                        <h3>Về chúng tôi</h3>
                        <br></br>
                        <p>Giới thiệu</p>
                        <p>Sản phẩm</p>
                        <p>Ưu đãi</p>
                        <p>Liên hệ</p>
                    </div>
                    <div className="footer_container--page--policy">
                        <h3>Chính sách</h3>
                        <br />
                        <p>Chính sách bảo mật</p>
                        <p>Chính sách đổi trả</p>
                        <p>Chính sách bảo hành </p>
                        <p>Chính sách giao hàng</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default footer;
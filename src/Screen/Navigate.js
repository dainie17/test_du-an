import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/Navigate.css'

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
function Navigate() {
    const uudai = [
        {
            id: 1,
            image: image5,
            name: 'Top 6 nóm đồ 2hand không nên mua',
            mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
        },
        {
            id: 1,
            image: image5,
            name: 'Top 6 nóm đồ 2hand không nên mua',
            mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
        },
        {
            id: 1,
            image: image5,
            name: 'Top 6 nóm đồ 2hand không nên mua',
            mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
        },
        {
            id: 1,
            image: image5,
            name: 'Top 6 nóm đồ 2hand không nên mua',
            mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
        }
    ]

    let navgate = useNavigate();

    const onclickItem = () => {
        navgate("/Personal");
    }
    return (
        <div className="home">
             <div className="home_container">
                <nav className="home-header">
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
                            <div className="home-header_ul_subnav_title">
                                <NavLink className="home-header_ul_li_navlink" to="/Product">
                                    Sản phẩm
                                </NavLink>
                                <ArrowDropDownIcon className="home-header_ul_li_navlink_icon" />
                            </div>
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
                        <SearchSharpIcon style={{ fontSize: "30px" }} />

                        <div className="home-header_icon_user">
                            <AccountCircleSharpIcon
                                style={{ fontSize: "30px", cursor: "pointer" }}
                                className="home-header_icon_user_img"
                                onClick={onclickItem}
                            />
                            <div
                                style={{ right: "6%" }}
                                className="home-header_icon_user_content"
                            >
                                <a href="#company">Company</a>
                                <a href="#team">Team</a>
                                <a href="#careers">Careers</a>
                            </div>
                        </div>

                        <ShoppingCartIcon style={{ fontSize: "30px" }} />
                    </div>
                </nav>
            </div>
            <div className="title">
                <div className="title_header">
                    <h2>Tin tức & Ưu đãi</h2>
                </div>
                <div className="title_list">
                    <div >
                        {uudai.map((uudai, index) =>
                            <div key={index} className="title_list_cottom">
                                <img src={uudai.image} />
                                <div className="title_list_cottom--content">
                                    <h2>{uudai.name}</h2>
                                    <p>{uudai.mota.substring(0, 230) + " [...]"}</p>
                                    <button>Đọc Thêm</button>
                                </div>
                            </div>)}
                    </div>

                </div>
            </div>
            <div className="hashtag">
                <div className="hashtag_header">
                    <div className="hashtag_header--list">
                        <p>Hashtag để có cơ hội xuất hiện trên trang chúng tôi</p>
                        <img src={image5}></img>
                        <img src={image5}></img>
                        <img src={image5}></img>
                        <img src={image5}></img>
                        <img src={image5}></img>
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

export default Navigate;
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/Introduce1.css'
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Footer from "./footer";
import BeatLoader from "react-spinners/BeatLoader";
import quotation from '../assets/quotation.png'


const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            currentNumber++
            callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateNumber(5, 300, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('transaction-count').innerText = formattedNumber
    })

    animateNumber(28, 50, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('city-count').innerText = formattedNumber
    })

    animateNumber(85, 20, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('customer-count').innerText = formattedNumber
    })
})

function Navigate() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    let navgate = useNavigate();

    const onclickItem = () => {
        navgate("/Personal");
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="home">

            {
                loading ? <div className='loading'>
                    <BeatLoader
                        color={'#36d7b7'}
                        loading={loading}
                        size={15}
                        margin={5}
                        speedMultiplier={1}
                    /></div>
                    :






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
                                        <React.Fragment>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Tooltip title="Account settings">
                                                    <div
                                                        className="home-header_icon_user_img"
                                                        onClick={handleClick}
                                                        size="small"
                                                        sx={{ ml: 2 }}
                                                        aria-controls={open ? "account-menu" : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? "true" : undefined}
                                                    >
                                                        <div className="user" />
                                                    </div>
                                                </Tooltip>
                                            </Box>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: "visible",
                                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                        mt: 1.5,
                                                        "& .MuiAvatar-root": {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        "&:before": {
                                                            content: '""',
                                                            display: "block",
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 15,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: "background.paper",
                                                            transform: "translateY(-50%) rotate(45deg)",
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: "left", vertical: "top" }}
                                                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                            >
                                                <MenuItem onClick={onclickItem}>
                                                    <Avatar /> Profile
                                                </MenuItem>
                                                <MenuItem>
                                                    <Avatar /> My account
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <PersonAdd fontSize="small" />
                                                    </ListItemIcon>
                                                    Add another account
                                                </MenuItem>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                    </ListItemIcon>
                                                    Settings
                                                </MenuItem>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                        </React.Fragment>
                                    </div>
                                    <div className="font_icon_nav">
                                        <div className="cart" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="title">

                            <div className="contact_cty">
                                <p>Về Công Ty Chúng Tôi</p>
                                <div className="contact_cty_hr"></div>
                            </div>
                            <div className="contact_info">
                                <div className="contact_info_left">
                                    <h1>NHỰA ĐÔNG SÀI GÒN</h1>
                                    <div className="contact_info_left__before">
                                        <div className="contact_info_left__before__img">
                                            <img src={quotation}></img>
                                        </div>
                                        <p>Tiền thân là Công ty cổ phần FOUR-H Việt Nam. Sự ra đời của công ty nhằm đáp ứng nhu cầu kinh doanh ngành bao bì của các đại lý trên toàn quốc, nhất là bao bì nhựa sử dụng 1 lần như hộp xốp, túi xốp....vvv</p>

                                    </div>
                                    <div className="contact_info_left__note">

                                        <div className="contact_info_left__note_italic">
                                            <i className="italic_color">Chúng tôi chuyên:</i>
                                            <i className="italic_bold">Sản xuất và phân phối các loại bao bì nhựa dùng 1 lần như hộp xốp, khay xốp, thố xốp, túi xốp, ly nhựa và các mặt hàng thông dụng khác.</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_right">
                                    <img src={image5}></img>
                                </div>

                            </div>
                            <div className="contact_number">

                                <div className="contact_number_auto">
                                    <div id="transaction-count" className="number">
                                        5
                                    </div>
                                    <div class="text-xl text-blue-200"> NĂM XÂY DỰNG VÀ PHÁT TRIỂN </div>
                                </div>

                                <div className="contact_number_auto">
                                    <div id="city-count" className="number" >
                                        98
                                    </div>
                                    <div class="text-xl text-blue-200">ĐẠI LÝ PHÂN PHỐI TOÀN QUỐC</div>
                                </div>

                                <div className="contact_number_auto">
                                    <div id="customer-count" className="number">
                                        1,500
                                    </div>
                                    <div class="text-xl text-blue-200"> SẢN PHẨM ĐA DẠNG, CHẤT LƯỢNG</div>
                                </div>
                            </div>

                        </div>

                        <Footer />
                    </div>
            }
        </div>
    )
}

export default Navigate;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
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

import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';

import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "react-scroll-to-top";
import arrow from '../assets/arrow.png'

import '../css/Introduce.css'
import SliderHome from "./slideHome";
import Footer from "./footer";
import { useEffect } from "react";
import { useState } from "react";

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";




const Introduce = () => {
  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, []);
  return (
    <div>
        <ScrollToTop className="scroll" ></ScrollToTop>
        <SliderHome />
      
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
                  </div>
                </div>
                <div className="title_container__input">
                  <div className="title_container__input__Textfield__name">
                    <TextField
                      id="outlined_name_input"
                      label="Họ và Tên"
                      type="text"
                      size="medium"
                    />
                  </div>
                  <div className="title_container__input__Textfield__name">
                    <TextField
                      id="outlined_name_input"
                      label="Emai"
                      type="email"
                    />
                  </div>
                  <div className="title_container__input__Textfield__name">
                    <TextField
                      id="outlined_name_input"
                      label="Điện thoại"
                      type=""
                    />
                  </div>
                  <div className="title_container__input__Textfield__name">
                    <TextField
                      id="outlined_name_input"
                      label="Địa chỉ"
                      type="text"
                    />
                  </div>
                  <div className="title_container__input__Textfield__name">
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                    />
                  </div>
                  <div className="title_container__input__buttom">
                    <button > Gửi</button>
                  </div>
                </div>

              </div>

            </div>
            <div className="bando">
              <div className='bando_khobau'>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210063.33014376528!2d105.6389760715208!3d9.804323603329172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089b78ddc936b%3A0x8e8d46a009e63c4e!2zU0hPUCBUSOG7giBUSEFPIFTDglkgxJDDlCBTUE9SVA!5e0!3m2!1svi!2s!4v1663951607719!5m2!1svi!2s"
                ></iframe> */}
              </div>

            </div>
            <Footer />
          </div>
      }
    </div>
  )
}

export default Introduce;
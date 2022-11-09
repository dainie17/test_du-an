import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import Grid from "@mui/material/Unstable_Grid2";
import '../css/Navigate.css'
import { Girl } from "@mui/icons-material";
import Item from '../item/ItemNavigate'
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
function Navigate() {


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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, []);

  return (
    <div className="home">
      <ScrollToTop smooth  ></ScrollToTop>
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
                <h2>Tin tức & Ưu đãi</h2>
              </div>
              <div className="title_list">
                <Grid container spacing={0} className="title_list_view">
                  <Item />
                </Grid>

              </div>
            </div>
            <div className="hashtag">
              <div className="hashtag_header">

                <div className="hashtag_header--list">
                  <p>HAGHTAG #VAGABONSHOP ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN TRANG CỦA CHÚNG TÔI</p>
                  <div className="hashtag_header--list--img">
                    <img src={image5}></img>
                    <img src={image5}></img>
                    <img src={image5}></img>
                    <img src={image5}></img>
                    <img src={image5}></img>
                    <img src={image5}></img>
                  </div>
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
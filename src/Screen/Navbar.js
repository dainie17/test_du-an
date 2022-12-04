import React, { useEffect } from "react";
import '../css/Navbar.css'
import { useState } from "react";
import $ from "jquery";
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
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_cty.png";
import { Fragment } from "react";
const onClickSearch = () => {
    $(".input_search").toggleClass("active");
  };
function Navbar() {

    let navgate = useNavigate();

  const [tong, setTong] = useState(0);

  const getCart = async () => {
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage){
        for (let index = 0; index < storage.length; index++) {
          setTong(tong => tong + 1);
        }
      }

  };

  useEffect(() => {
    getCart();
  },[]);
  

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const onclickCart = () => {
      navgate("/Cart");
    };
  
    const onclickHome = () => {
      navgate("/");
    };
  
    const onclickContact = () => {
      navgate("/Contact");
    };
  
    const onclickProduct = () => {
      navgate("/Product");
    };
  
    const onclickNavigate = () => {
      navgate("/Navigate");
    };
  
    const onclickIntroduce = () => {
      navgate("/Introduce");
    };

    const onClickLogin = () => {
      navgate("/login");
    };

    const onClickSignup = () => {
      navgate("/Signup");
    };

    return (
        <nav className="home-header">
        <div className="header_container">
          <div className="home-header_logo">
            <img className="home-header-logo-image" src={logo} alt="" />
          </div>
          <ul className="home-header_ul">
            <li onClick={onclickHome}>
              <NavLink className="home-header_ul_li_navlink" to="/Home">
                Trang chủ
              </NavLink>
            </li>
            <li onClick={onclickContact}>
              <NavLink className="home-header_ul_li_navlink" to="/Contact">
                Giới thiệu
              </NavLink>
            </li>
            <li className="home-header_ul_subnav" onClick={onclickProduct}>
              <NavLink className="home-header_ul_li_navlink" to="/Product">
                Sản phẩm
              </NavLink>
            </li>
            <li onClick={onclickNavigate}>
              <NavLink className="home-header_ul_li_navlink" to="/Navigate">
                Ưu đãi
              </NavLink>
            </li>
            <li onClick={onclickIntroduce}>
              <NavLink className="home-header_ul_li_navlink" to="/Introduce">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className="home-header_icon">
            <div className="font_icon_nav">
              <div className="search" onClick={onClickSearch}></div>
            </div>

            <div className="home-header_icon_user">
              <Fragment>
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
                      left: "1200px",
                      "& .MuiAvatar-root": {
                        ml: 2,
                        mr: 5,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 75,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "center", vertical: "top" }}
                  anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                >
                  <MenuItem onClick={onClickLogin}>
                    <div className="item_navlg">
                      Đăng nhập
                    </div>
                  </MenuItem>
                  <MenuItem onClick={onClickSignup}>
                    Signup
                  </MenuItem>
                </Menu>
              </Fragment>
            </div>

            <div className="font_icon_nav">
              <div onClick={onclickCart} className="cart_navbar" >
                {/* <div className="number_cart">{tong}</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <input type="text" className="input_search" placeholder="Search..." />
        </div>
      </nav>
    )
}

export default Navbar;
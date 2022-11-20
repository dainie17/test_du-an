import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Shop2Icon from "@mui/icons-material/Shop2";
import $ from "jquery";
import logo from "../assets/logo_cty.png";
import LogoutIcon from "@mui/icons-material/Logout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Badge from "@mui/material/Badge";
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
import { styled } from "@mui/material/styles";
import {
  DeleteOutlineSharp,
  FavoriteBorderSharp,
  VerifiedUserSharp,
} from "@mui/icons-material";
import "../css/Personal.css";
import { pink } from "@mui/material/colors";
import Footer from "./footer";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "react-scroll-to-top";

import icon_user from "../assets/icon_user.png";
import camera from "../assets/camera.png";
import truck from "../assets/truck.png";
import love from "../assets/love.png";
import Popup from "reactjs-popup";

const img =
  "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

// online
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function openForm() {
  document.getElementById("openForm_pass").style.display = "block";
}

function Person() {
  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, []);

  const data = [
    {
      name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc Dao cắt dầu Đầu kéo tông đơ",
      Loai: "B",
      Ship: "CN",
      price: "368.374",
      image: img,
    },
    {
      name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc",
      Loai: "B",
      Ship: "CN",
      price: "368.374",
      image: img,
    },
  ];

  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  };

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const onclickCart = () => {
    navgate("/Cart");
  };

  const onclickHome = () => {
    navgate("/Home");
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

  const onClickSearch = () => {
    $(".input_search").toggleClass("active");
  };

  return (
    <div className="fersonal">
      <ScrollToTop smooth></ScrollToTop>
      {loading ? (
        <div className="loading">
          <BeatLoader
            color={"#36d7b7"}
            loading={loading}
            size={15}
            margin={5}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div>
          <nav className="home-header">
            <div className="header_container">
              <div className="home-header_logo">
                <img className="home-header-logo-image" src={logo} alt="" />
                <p className="home-header-logo-title">logo</p>
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
                  <div className="home-header_ul_subnav_content">
                    <a href="#company">Company</a>
                    <a href="#team">Team</a>
                    <a href="#careers">Careers</a>
                  </div>
                </li>
                <li onClick={onclickNavigate}>
                  <NavLink className="home-header_ul_li_navlink" to="/Navigate">
                    Ưu đãi
                  </NavLink>
                </li>
                <li onClick={onclickIntroduce}>
                  <NavLink
                    className="home-header_ul_li_navlink"
                    to="/Introduce"
                  >
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
              <div className="home-header_icon">
                <div className="font_icon_nav">
                  <div className="search" onClick={onClickSearch}></div>
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
                  <div onClick={onclickCart} className="cart" />
                </div>
              </div>
            </div>
            <div className="form">
              <input
                type="text"
                className="input_search"
                placeholder="Search..."
              />
            </div>
          </nav>
          <div style={{ marginTop: "70px" }}></div>
          <div className="fersonal_container">
            <div className="fersonal_container__left">
              <div className="fersonal_container__left__userName">
                <div className="fersonal_container_left__info">
                  <h3>Tài khoản của tôi</h3>
                  <div
                    className="fersonal_container__left__info__tabs"
                    onClick={() => toogleTab(1)}
                  >
                    <PermContactCalendarIcon
                      sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                    />
                    Thông tin
                  </div>
                  <div
                    className="fersonal_container__left__info__tabs"
                    onClick={() => toogleTab(2)}
                  >
                    <LocalMallIcon
                      sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                    />{" "}
                    Sản phẩm ưa thích
                  </div>

                  <div
                    className="fersonal_container__left__info__tabs"
                    onClick={() => toogleTab(4)}
                  >
                    <Shop2Icon
                      sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                    />
                    Đơn đặt hàng của tôi
                  </div>
                  <div
                    className="fersonal_container__left__info__tabs"
                    onClick={() => toogleTab(5)}
                  >
                    <AutorenewIcon
                      sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                    />
                    Tình trạng đơn hàng
                  </div>
                  <div
                    className="fersonal_container__left__info__tabs"
                    onClick={() => toogleTab(6)}
                  >
                    <LogoutIcon
                      sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                    />
                    Đăng xuất
                  </div>
                </div>
              </div>
            </div>
            <div className="fersonal_container-right">
              <div className="fersonal_container-right--header">
                <div className="backgroud_avatar">
                  <div className="fersonal_container-right--header--avatar">
                    <div className="fersonal_container-right--header--avatar--user">
                      <img className="avatar_use" src={img}></img>
                      <img className="avatar_camera" src={camera}></img>
                    </div>
                    <div className="fersonal_container-right--header--avatar--name">
                      <h3>Đặng Quang Hùng</h3>
                    </div>
                  </div>
                </div>
                <div className="fersonal_container-right--header--content">
                  <div className="content" onClick={() => toogleTab(4)}>
                    <div className="content_icon">
                      <img src={icon_user} />
                    </div>
                    <p>Đơn hàng của tôi</p>
                  </div>
                  <div className="content" onClick={() => toogleTab(5)}>
                    <div className="content_icon">
                      <img src={truck} />
                    </div>
                    <p>Tình trạng đơn hàng</p>
                  </div>
                  <div className="content" onClick={() => toogleTab(1)}>
                    <div className="content_icon">
                      <img src={love} />
                    </div>
                    <p>Yêu thích</p>
                  </div>
                </div>
              </div>
              <div className="fersonal_container-right--fooder--content">
                {/* -------------------Thông tin cá nhân------------------------ */}
                <div
                  className={
                    toggleState === 1 ? "contentt active-content" : "ac"
                  }
                >
                  <div className="fersonal_container-right--fooder--content--active">
                    <div>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar alt="Remy Sharp" src={img} />
                      </StyledBadge>
                      <p className="fersonal_right__content_name">
                        Đặng Quang Hùng
                      </p>
                    </div>
                    <div className="fersonal_container-right--fooder--content--active--edit">
                      <div className="fersonal_container-right--fooder--content--active--edit--name">
                        <div className="fersonal_container-right--fooder--content--active--edit--name--p">
                          <p className="name--login">Tên Đăng Nhập</p>
                          <p className="name--people">Đặng Quang Hùng</p>
                        </div>
                        <div className="fersonal_container-right--fooder--content--active--edit--name--button">
                          <button className="button-29">Chỉnh Sửa</button>
                        </div>
                      </div>
                      <div className="fersonal_container-right--fooder--content--active--edit--name">
                        <div className="fersonal_container-right--fooder--content--active--edit--name--p">
                          <p className="name--login">Email</p>
                          <p className="name--people">
                            **********@gmail.com <a href="#1">Hiển thị</a>
                          </p>
                        </div>
                        <div className="fersonal_container-right--fooder--content--active--edit--name--button">
                          <button className="button-29">Chỉnh Sửa</button>
                        </div>
                      </div>
                      <div className="fersonal_container-right--fooder--content--active--edit--name">
                        <div className="fersonal_container-right--fooder--content--active--edit--name--p">
                          <p className="name--login">Số điện thoại</p>
                          <p className="name--people">
                            Bạn chưa thêm số điện thoại nào cả
                          </p>
                        </div>
                        <div className="fersonal_container-right--fooder--content--active--edit--name--button">
                          <button className="button-29">Thêm</button>
                        </div>
                      </div>
                    </div>
                    <div className="fersonal_container-right--fooder--content--active--password">
                      <h3>Mật Khẩu</h3>

                      <Popup
                        trigger={
                          <button onClick={openForm}>Đổi mật khẩu</button>
                        }
                        position="right center"
                      >
                        <div>Popup content here !!</div>
                      </Popup>
                    </div>
                  </div>
                </div>
                {/* ----------------------------sản phẩn ưa thích--------------------- */}
                <div
                  className={
                    toggleState === 2 ? "contentt active-content" : "ac"
                  }
                >
                  <p>Sản phẩm ưa thích</p>
                </div>
                {/* ----------------------------giỏ hàng----------------------------- */}
                <div
                  className={
                    toggleState === 4 ? "contentt active-content" : "ac"
                  }
                >
                  <div className="active-content-title">
                    <p className="active-content-title-content">Giỏ hàng </p>
                  </div>
                  <div className="active-content-list">
                    {user.map((item, index) => (
                      <div key={index}>
                        <div className="active-content-list-card">
                          <img
                            className="active-content-list-card-image"
                            src={item.image}
                            alt=""
                          />
                          <div className="active-content-list-card-content">
                            <p className="active-content-list-card-content-name">
                              {item.name}
                            </p>
                            <p className="active-content-list-card-content-type">
                              Loại:{item.Loai}/Ship từ:{item.Ship}
                            </p>
                            <p className="active-content-list-card-content-price">
                              {item.price}&#8363;
                            </p>
                            <p className="active-content-list-card-content-cod">
                              COD
                            </p>
                          </div>
                          <div className="active-content-list-card-function">
                            <div className="active-content-list-card-function-button">
                              <button className="active-content-list-card-function-button-reduce">
                                -
                              </button>
                              <p className="active-content-list-card-function-button-num">
                                1
                              </p>
                              <button className="active-content-list-card-function-button-more">
                                +
                              </button>
                            </div>
                            <div className="active-content-list-card-function-icon">
                              <FavoriteBorderSharp />
                              <DeleteOutlineSharp />
                            </div>
                          </div>
                        </div>
                        <div className="personal-br"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={
                    toggleState === 5 ? "contentt active-content" : "ac"
                  }
                >
                  <p>Tình trạng</p>
                </div>
                <div
                  className={
                    toggleState === 6 ? "contentt active-content" : "ac"
                  }
                >
                  <p>Đăng xuất</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Person;

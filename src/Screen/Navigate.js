import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import Footer from "./footer";
import Grid from "@mui/material/Unstable_Grid2";
import '../css/Navigate.css'
import { Girl } from "@mui/icons-material";
import Item from '../item/ItemNavigate'
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import logo from "../assets/logo_cty.png";


const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
function Navigate() {


  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  }

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

  const onClickSearch = () => {
    $(".input_search").toggleClass("active");
  };

  return (
    <div className="home">
      <ScrollToTop className="scroll" smooth ></ScrollToTop>
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
                  <div onClick={onclickCart} className="font_icon_nav">
                    <div className="cart" />
                  </div>
                </div>
              </div>
              <div className="form">
          <input type="text" className="input_search" placeholder="Search..." />
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
                    <img src='https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/290060769_743780313625287_2293101306042313153_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=tYrMvqDgsQYAX-0Bjd3&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBy5erLepMsW8zrN7W_QsexkOCq6OfP2kGFdo-3I0wNcA&oe=637D3C08'></img>
                    <img src='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/310136594_1035166573829540_3918464502746871543_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=sgn2Oa0iDukAX_GUxUS&tn=2d74ycQPf4r_-KTe&_nc_ht=scontent.fdad2-1.fna&oh=00_AfD2sjme_v2e0eE-K_dF7kihEPk8oHsnJUvkvyNHlEJxDA&oe=637DA226'></img>
                    <img src='https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/306350223_1073132380263026_6017393335028069161_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=E3Ldh13Di0wAX8WAyvf&_nc_ht=scontent.fdad1-3.fna&oh=03_AdSNlUorkb4Ki2eC22LcssyodY0Ul_ZjJvoij8HJ01kYpw&oe=63A00C32'></img>
                    <img src='https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/313436383_1054364801909717_5531588728767177661_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=itqcY7_jBxAAX9Nndaf&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCdarQH_rY33KIdp7SVfqH9JQHI7_gSo5aAaZGc2rCNaQ&oe=637E65A7'></img>
                    <img src='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/309048127_398207755850260_9159603089225647497_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=UHbTidQox-UAX-On2_H&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA-UAQcCexSfJFb6Wl7nMViCPiEmmlfNvJwW8qdDFk-pw&oe=637DE96E'></img>
                    <img src='https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/285689662_112104391524564_4606494619394419740_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=2BNJvEeMXFYAX--w8SK&_nc_ht=scontent.fdad1-4.fna&oh=00_AfC1hfG63rTLE_IAKffXf4yZ4Of8bb0BaCsLQHU7jSU55g&oe=637CC8A2'></img>
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
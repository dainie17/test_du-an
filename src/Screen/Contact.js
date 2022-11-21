import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Introduce.css";
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
import BeatLoader from "react-spinners/BeatLoader";
import quotation from "../assets/quotation.png";
import bar_icon from "../assets/bar-chart.png";
import teame from "../assets/team.png";
import shop from "../assets/shop.png";
import colla from "../assets/collaboration.png";
import ScrollToTop from "react-scroll-to-top";

import logo from "../assets/logo_cty.png";

const image5 =
  "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

function Navigate() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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
    <div className="home">
      <ScrollToTop className="scroll" smooth></ScrollToTop>

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
          <div className="title">
            <div className="contact_cty">
              <p>Về Công Ty Chúng Tôi</p>
              <div className="contact_cty_hr"></div>
            </div>
            <div className="contact_info">
              <div className="contact_info_left">
                <h1> CÔNG TY VŨ GIA GROUP</h1>
                <div className="contact_info_left__before">
                  <div className="contact_info_left__before__img">
                    <img src={quotation}></img>
                  </div>
                  <p>
                    CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP
                    KHẨU VŨ GIA GROUP. Sự ra đời của công ty nhằm đáp ứng nhu
                    cầu kinh doanh ngành chai nhựa của các đại lý trên toàn
                    quốc, nhất là chai nhựa sử dụng nhiều như chai lọ....vvv
                  </p>
                </div>
                <div className="contact_info_left__note">
                  <div className="contact_info_left__note_italic">
                    <i className="italic_color">Chúng tôi chuyên:</i>
                    <i className="italic_bold">
                      Sản xuất và phân phối các loại chai nhựa trong cuộc sống
                      hàng ngày như chai đựng nước, ly nhựa và các mặt hàng
                      thông dụng khác.
                    </i>
                  </div>
                </div>
              </div>
              <div className="contact_info_right">
                <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/69033220_452408942283605_5045431321086656512_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=M1DYAn5vleQAX_f5vU5&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCMrCiE_6wZlWPdrZEGHg7FXtkmNLNnkuw7YpDblv1Kag&oe=63A032A9"></img>
              </div>
            </div>
            <div className="contact_number">
              <div className="contact_number_auto">
                <div id="transaction-count" className="number">
                  5
                </div>
                <div className="text-xl text-blue-200">
                  {" "}
                  NĂM XÂY DỰNG VÀ PHÁT TRIỂN{" "}
                </div>
              </div>

              <div className="contact_number_auto">
                <div id="city-count" className="number">
                  98
                </div>
                <div className="text-xl text-blue-200">
                  ĐẠI LÝ PHÂN PHỐI TOÀN QUỐC
                </div>
              </div>

              <div className="contact_number_auto">
                <div id="customer-count" className="number">
                  1,500
                </div>
                <div className="text-xl text-blue-200">
                  {" "}
                  SẢN PHẨM ĐA DẠNG, CHẤT LƯỢNG
                </div>
              </div>
            </div>
            <div className="contact_benefit">
              <div className="contact_benefit_img">
                <img src="https://dongsaigonplas.com/vnt_upload/about/about.png" />
              </div>
              <div className="contact_benefit_whybenefit">
                <p className="benefit">LỢI ÍCH TỪ CHÚNG TÔI</p>
                <h1>TẠI SAO CHỌN NHỰA ĐÔNG SÀI GÒN</h1>
                <div className="line"></div>
                <p className="benefit1">
                  NHỰA ĐÔNG SÀI GÒN là một trong những công ty sản xuất và
                  thương mại lớn trên thị trường bao bì. Với 4 ưu điểm:
                </p>

                <div className="contact_benefit_whybenefit_four">
                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={bar_icon}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>KINH NGHIỆM HOẠT ĐỘNG LÂU NĂM</h2>
                      <p>
                        Với kinh nghiệm 4 năm hoạt động, chúng tôi luôn thấu
                        hiểu và đáp ứng những nhu cầu của từng khách hàng, từng
                        thị trường.
                      </p>
                    </div>
                  </div>

                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={teame}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>HỢP TÁC VỚI NHIỀU THƯƠNG HIỆU NỔI TIẾNG</h2>
                      <p>
                        Hiện nay chúng tôi là đối tác phân phối cấp 1 của nhiều
                        nhà sản xuất bao bì nổi tiếng
                      </p>
                    </div>
                  </div>
                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={shop}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>HỆ THỐNG MỞ RỘNG</h2>
                      <p>
                        Chúng tôi luôn luôn muốn mở rộng để đáp ứng nhu cầu của
                        mọi khách hàng, dủ chỉ là nhu cầu nhỏ nhất.
                      </p>
                    </div>
                  </div>
                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={colla}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>NHIỆT TÂM - TẬN TÌNH</h2>
                      <p>
                        Chúng tôi luôn nỗ lực để cung cấp sản phẩm và dịch vụ
                        tốt nhất và giải đáp tận tâm các thắc mắc cho khách
                        hàng.
                      </p>
                    </div>
                  </div>
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

export default Navigate;

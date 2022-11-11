import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AssignmentReturnSharp,
  DiamondSharp,
  GppGoodSharp,
  SupportAgentSharp,
  TokenSharp,
  ViewListSharp,
} from "@mui/icons-material";
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
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "react-scroll-to-top";

import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../css/Product.css";
import Footer from "./footer";
import { useEffect } from "react";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";
const image2 =
  "https://cdn.tgdd.vn/Files/2019/11/18/1220010/4-cach-ve-sinh-ben-trong-chai-lo-cuc-sach-ban-nen-thu-21-760x367.jpg";
const image3 =
  "https://bizweb.dktcdn.net/100/154/029/files/san-xuat-chai-lo-nhua-2-941c40bb-0124-4086-8aab-ad24dc55c0b8.jpg?v=1501056541035";
const image4 =
  "https://i-raovat.vnecdn.net/2020/05/22/51ade386733b048d7c00c29720e39c04.jpeg?w=1280&h=768&q=100&dpr=1&rt=fit&g=no&wmi=&wmg=ce&wmo=50&wms=30&wmx=0&wmy=0&s=irmRdkv5lf-nqmbP2V8WXg";
const image5 =
  "https://thuytinhtadaco.com/wp-content/uploads/2021/08/chai-lo-thuy-tinh.jpg";
const logo =
  "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "#63A3F7", zIndex: "999" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "#63A3F7" }} />
    </div>
  );
};

const Product = () => {
  const data = [image1, image2, image3, image4, image5];
  const dataList = [image1, image2, image3];

  const dataProduct = [
    {
      name: "Loại sản phẩm 1",
    },
    {
      name: "Loại sản phẩm 2",
    },
    {
      name: "Loại sản phẩm 3",
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

  let name = dataProduct[0];

  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop()) {
          $(".home-header").addClass("sticky");
        } else {
          $(".home-header").removeClass("sticky");
        }
      });
    });
  });

  const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

  return (
    <div className="product">
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

      {/* main */}
      <div className="product-main">
        <div className="product_container">
          <div className="product-main-top">
            <div className="product-main-top-left">
              <div className="product-main-top-left-title">
                <ViewListSharp />
                <p>Danh sách sản phẩm</p>
              </div>
              <div className="product-main-top-left-content"></div>
            </div>

            <div className="product-main-top-center">
              <div className="product-main-top-center-slide">
                <Slider
                  autoplay={true}
                  autoplaySpeed={2000}
                  prevArrow={<PreviousBtn />}
                  nextArrow={<NextBtn />}
                >
                  {data.map((item, index) => (
                    <div key={index}>
                      <img
                        src={item}
                        alt=""
                        className="product-main-top-center-slide-img"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="product-main-top-right">
              <div className="product-main-top-right-user">
                <div className="product-main-top-right-user-icon">
                  <SupportAgentSharp style={{ fontSize: "60px" }} />
                </div>
                <div className="product-main-top-right-user-information">
                  <div className="product-main-top-right-user-information-title">
                    <p>Xin chào! Punpun</p>
                  </div>
                  <div className="product-main-top-right-user-information-button">
                    <button className="product-main-top-right-user-information-button-left">
                      Tài khoản
                    </button>
                    <button className="product-main-top-right-user-information-button-right">
                      Đơn hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-main-top-right-title">
                <p>Chính sách dịch vụ khách hàng</p>
              </div>
              <div className="product-main-top-right-service">
                <div className="product-main-top-right-service-top">
                  <div className="product-main-top-right-service-top-left">
                    <GppGoodSharp
                      style={{ fontSize: "15px", paddingRight: "1px" }}
                    />
                    <p>Bảo mật thanh toán</p>
                  </div>
                  <div className="product-main-top-right-service-top-right">
                    <TokenSharp
                      style={{ fontSize: "15px", paddingRight: "1px" }}
                    />
                    <p>Đảm bảo giao hàng</p>
                  </div>
                </div>
                <div className="product-main-top-right-service-bottom">
                  <div className="product-main-top-right-service-bottom-left">
                    <DiamondSharp
                      style={{ fontSize: "15px", paddingRight: "1px" }}
                    />
                    <p>Đảm bảo chất lượng</p>
                  </div>
                  <div className="product-main-top-right-service-bottom-right">
                    <AssignmentReturnSharp
                      style={{ fontSize: "15px", paddingRight: "1px" }}
                    />
                    <p>Trả lại không lý do</p>
                  </div>
                </div>
              </div>
              <div className="product-main-top-right-image">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-main-list">
        {/* {name.map((item, index) => ( */}
                <ItemProductType
                  key={name.name}
                  nameType={dataProduct[2].name}
                />
              {/* ))}  */}
        </div>
      </div>

      <Footer />
      </div>
}
    </div>
  );
};

export default Product;

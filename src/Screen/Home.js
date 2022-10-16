import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import SearchSharpIcon from "@mui/icons-material/SearchSharp";
// import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Navbar.css";

import Footer from "./footer";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Call,
  HistorySharp,
  LocalShippingSharp,
  VerifiedUser,
} from "@mui/icons-material";
import "../css/Home.css";
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
      <ArrowBackIos style={{ color: "blue", fontSize: "20px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "20px" }} />
    </div>
  );
};

const PreviousBtnList = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue" }} />
    </div>
  );
};

const NextBtnList = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue" }} />
    </div>
  );
};

const PreviousBtnR = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white" }} />
    </div>
  );
};

const NextBtnR = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white" }} />
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    const u = localStorage.getItem("uses");
    console.log(u);
  });

  const data = [image1, image2, image3, image4, image5];

  const dataSlide = [
    {
      title: "1",
      image: image1,
    },
    {
      title: "2",
      image: image2,
    },
    {
      title: "3",
      image: image3,
    },
    {
      title: "4",
      image: image4,
    },
    {
      title: "5",
      image: image5,
    },
  ];

  const dataIntroduce = [
    {
      image: image1,
      title: "Top 6 món đồ nhựa tốt nhất hiện nay",
      content:
        "Với những ưu điểm vượt trội hoàn toàn, sàn nhựa đang vượt mặt các loại vật liệu truyền thống như sàn gỗ, gạch men để trở thành loại vật liệu lát sàn được ưa dùng nhất hiện nay. Trong đó nổi bật nhất là các loại sàn nhựa giả gỗ. Chính vì nhu cầu cao mà hiện nay trên thị trường xuất hiện rất nhiều các dòng sàn nhựa giả gỗ đến từ nhiều thương hiệu và quốc gia khác nhau. Gây khó khăn cho người tiêu dùng trong việc lựa chọn loại sàn nhựa giả gỗ nào cho đảm bảo chất lượng cũng như giá cả phải chăng. Ở bài viết này, hãy cùng santot.vn đi tìm hiểu ưu nhược điểm và đặc tính của những loại sàn nhựa giả gỗ phổ biến và đáng sử dụng nhất hiện nay nhé.",
    },
    {
      image: image2,
      title: "Top 6 món đồ nhựa tốt nhất hiện nay",
      content:
        "Với những ưu điểm vượt trội hoàn toàn, sàn nhựa đang vượt mặt các loại vật liệu truyền thống như sàn gỗ, gạch men để trở thành loại vật liệu lát sàn được ưa dùng nhất hiện nay. Trong đó nổi bật nhất là các loại sàn nhựa giả gỗ. Chính vì nhu cầu cao mà hiện nay trên thị trường xuất hiện rất nhiều các dòng sàn nhựa giả gỗ đến từ nhiều thương hiệu và quốc gia khác nhau. Gây khó khăn cho người tiêu dùng trong việc lựa chọn loại sàn nhựa giả gỗ nào cho đảm bảo chất lượng cũng như giá cả phải chăng. Ở bài viết này, hãy cùng santot.vn đi tìm hiểu ưu nhược điểm và đặc tính của những loại sàn nhựa giả gỗ phổ biến và đáng sử dụng nhất hiện nay nhé.",
    },
    {
      image: image3,
      title: "Top 6 món đồ nhựa tốt nhất hiện nay",
      content:
        "Với những ưu điểm vượt trội hoàn toàn, sàn nhựa đang vượt mặt các loại vật liệu truyền thống như sàn gỗ, gạch men để trở thành loại vật liệu lát sàn được ưa dùng nhất hiện nay. Trong đó nổi bật nhất là các loại sàn nhựa giả gỗ. Chính vì nhu cầu cao mà hiện nay trên thị trường xuất hiện rất nhiều các dòng sàn nhựa giả gỗ đến từ nhiều thương hiệu và quốc gia khác nhau. Gây khó khăn cho người tiêu dùng trong việc lựa chọn loại sàn nhựa giả gỗ nào cho đảm bảo chất lượng cũng như giá cả phải chăng. Ở bài viết này, hãy cùng santot.vn đi tìm hiểu ưu nhược điểm và đặc tính của những loại sàn nhựa giả gỗ phổ biến và đáng sử dụng nhất hiện nay nhé.",
    },
    {
      image: image4,
      title: "Top 6 món đồ nhựa tốt nhất hiện nay",
      content:
        "Với những ưu điểm vượt trội hoàn toàn, sàn nhựa đang vượt mặt các loại vật liệu truyền thống như sàn gỗ, gạch men để trở thành loại vật liệu lát sàn được ưa dùng nhất hiện nay. Trong đó nổi bật nhất là các loại sàn nhựa giả gỗ. Chính vì nhu cầu cao mà hiện nay trên thị trường xuất hiện rất nhiều các dòng sàn nhựa giả gỗ đến từ nhiều thương hiệu và quốc gia khác nhau. Gây khó khăn cho người tiêu dùng trong việc lựa chọn loại sàn nhựa giả gỗ nào cho đảm bảo chất lượng cũng như giá cả phải chăng. Ở bài viết này, hãy cùng santot.vn đi tìm hiểu ưu nhược điểm và đặc tính của những loại sàn nhựa giả gỗ phổ biến và đáng sử dụng nhất hiện nay nhé.",
    },
    {
      image: image5,
      title: "Top 6 món đồ nhựa tốt nhất hiện nay",
      content:
        "Với những ưu điểm vượt trội hoàn toàn, sàn nhựa đang vượt mặt các loại vật liệu truyền thống như sàn gỗ, gạch men để trở thành loại vật liệu lát sàn được ưa dùng nhất hiện nay. Trong đó nổi bật nhất là các loại sàn nhựa giả gỗ. Chính vì nhu cầu cao mà hiện nay trên thị trường xuất hiện rất nhiều các dòng sàn nhựa giả gỗ đến từ nhiều thương hiệu và quốc gia khác nhau. Gây khó khăn cho người tiêu dùng trong việc lựa chọn loại sàn nhựa giả gỗ nào cho đảm bảo chất lượng cũng như giá cả phải chăng. Ở bài viết này, hãy cùng santot.vn đi tìm hiểu ưu nhược điểm và đặc tính của những loại sàn nhựa giả gỗ phổ biến và đáng sử dụng nhất hiện nay nhé.",
    },
  ];

  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  };

  return (
    <div className="home">
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
              <div className="home-header_icon_user_img" onClick={onclickItem}>
                <div className="user" />
              </div>
              <div className="home-header_icon_user_content">
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
              </div>
            </div>

            <div className="font_icon_nav">
              <div className="cart" />
            </div>
          </div>
        </div>
      </nav>

      <div className="home-banner">
        <Slider
          autoplay={true}
          autoplaySpeed={2000}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dots
        >
          {data.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" className="home-banner-img" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Banner */}

      <div className="home-main">
        <div className="home_container">
          <div className="home-main-introduce">
            <div className="home-main-introduce-content">
              <div className="home-main-introduce-content-frontpager">
                CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU
                VŨ GIA GROUP
              </div>
              <div className="home-main-introduce-content-title">
                <p>
                  “CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ VÀ XUẤT NHẬP KHẨU
                  thương hiệu bằng cái tâm, mang đến những sản phẩm xứng tầm”
                  Hơn ai hết, Chúng tôi luôn đặt chất lượng lên hàng đầu và tuân
                  thủ nghiêm ngặt các quy định kiểm định về chất lượng và an
                  toàn về chất lượng. CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ VÀ
                  XUẤT NHẬP KHẨU hoạt động trong lĩnh vực Sản xuất chai nhựa và
                  thủy tinh. “CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ VÀ XUẤT
                  NHẬP KHẨU thương hiệu bằng cái tâm, mang đến những sản phẩm
                  xứng tầm” Hơn ai hết, Chúng tôi luôn đặt chất lượng lên hàng
                  đầu và tuân thủ nghiêm ngặt các quy định kiểm định về chất
                  lượng và an toàn về chất lượng. CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI
                  DỊCH VỤ VÀ XUẤT NHẬP KHẨU hoạt động trong lĩnh vực Sản xuất
                  chai nhựa và thủy tinh.
                </p>
              </div>
              <div className="home-main-introduce-button">
                <button className="home-main-introduce-btn">Đọc thêm</button>
              </div>
            </div>

            <div className="home-main-introduce-image">
              <img
                src={image1}
                alt=""
                className="home-main-introduce-image-style"
              />
            </div>
          </div>
        </div>

        <div className="home-main-slide">
          <div className="home_container">
            <Slider
              autoplay={true}
              autoplaySpeed={2000}
              prevArrow={<PreviousBtnList />}
              nextArrow={<NextBtnList />}
              slidesToShow={4}
              slidesToScroll={4}
              infinite={true}
            >
              {dataSlide.map((item, index) => (
                <div className="home-main-slide-item" key={index}>
                  {/* <div className="home-main-slide-item-title">
                                        <p style={{ fontSize: "80px", color: "white" }}>{item.title}</p>
                                    </div> */}
                  <img
                    src={item.image}
                    alt=""
                    className="home-main-slide-item-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="home_container">
          <div className="home-main-purview">
            <div className="home-main-purview-card">
              <LocalShippingSharp style={{ fontSize: "40px", margin:"6px" }} />
              <p>GIAO HÀNG TOÀN QUỐC</p>
            </div>
            <div className="home-main-purview-card">
              <HistorySharp style={{ fontSize: "40px", margin:"6px" }} />
              <p>HOÀN TIỀN NẾU HÀNG LỖI</p>
            </div>
            <div className="home-main-purview-card">
              <Call style={{ fontSize: "40px", margin:"6px" }} />
              <p>CHĂM SÓC KHÁCH HÀNG 24/7</p>
            </div>
            <div className="home-main-purview-card" style={{ border: "none" }}>
              <VerifiedUser style={{ fontSize: "40px", margin:"6px" }} />
              <p>CAM KẾT 100% CHẤT LƯỢNG</p>
            </div>
          </div>
        </div>

        <div className="home-main-slide">
          <div className="home_container">
            <Slider
              autoplay={true}
              autoplaySpeed={2000}
              prevArrow={<PreviousBtnList />}
              nextArrow={<NextBtnList />}
              slidesToShow={4}
              slidesToScroll={4}
              infinite={true}
            >
              {dataSlide.map((item, index) => (
                <div className="home-main-slide-item" key={index}>
                  {/* <div className="home-main-slide-item-title">
                                        <p style={{ fontSize: "80px", color: "white" }}>{item.title}</p>
                                    </div> */}
                  <img
                    src={item.image}
                    alt=""
                    className="home-main-slide-item-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="home-main-news">
          <h1 style={{ marginBottom: "50px" }}>TIN TỨC VÀ SỰ KIỆN</h1>
          <div className="home_container">
            <Slider
              autoplay={true}
              autoplaySpeed={2000}
              prevArrow={<PreviousBtnR />}
              nextArrow={<NextBtnR />}
              slidesToShow={3}
              slidesToScroll={3}
              infinite={true}
            >
              {dataIntroduce.map((item, index) => (
                <div className="home-main-news-item" key={index}>
                  <img
                    src={item.image}
                    alt=""
                    className="home-main-news-item-image"
                  />
                  <p className="home-main-news-item-title">{item.title}</p>
                  <p className="home-main-news-item-content">
                    {item.content.substring(0, 230) + " [...]"}
                  </p>
                  <button className="home-main-news-item-button">
                    Đọc thêm
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

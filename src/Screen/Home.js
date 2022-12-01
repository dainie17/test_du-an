import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Navbar.css";
import $ from "jquery";
import Footer from "./footer";
import "../css/Home.css";
import imageItem from "../assets/blue.png";
import imageItem2 from "../assets/cyan.png";
import imageItem3 from "../assets/cam.png";
import imageItem4 from "../assets/green.png";
import carImg from "../assets/truck-icon.png";
import moneyImg from "../assets/money-back-icon.png";
import hoursImg from "../assets/24-hours.png";
import shieldImg from "../assets/shield.png";
import imgUser from "../assets/user.png";
import Chat from "./slideHome";

import ScrollToTopbtn from "./ScrollToTopbtn";

import SliderHome from "./Slide_Home";
import Navbar from "./Navbar";

import NavbarIn from "./NavbarIn"
import imgLine from "../assets/line_silde_product.png";
import imgSpice from "../assets/spice.png";
import imgFoundation from "../assets/foundation.png";
import imgCosmetics from "../assets/cosmetics.png";
import imgBottle from "../assets/bottle.png";
import imgPlasticBott from "../assets/plastic-bottle.png";
import imgCup from "../assets/cup.png";

import image_duce from "../assets/image_duce.jpg";
import image_u from "../assets/profile.png"
import image_thumb_up from "../assets/thumb-up.png"
import image_share from "../assets/share.png"
import image_comments from "../assets/comments.png"
import { useNavigate } from "react-router";

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

const imgBanner = "https://i.redd.it/dhjkl1p1y8dy.jpg";
const imgBanner1 = "https://wallpaperaccess.com/full/333442.jpg";
const imgBanner2 = "http://i.imgur.com/VUnpzvl.jpg";
const imgBanner3 =
  "https://img4.thuthuatphanmem.vn/uploads/2019/12/10/hinh-anh-thien-nhien-lam-hinh-nen-cho-dien-thoai_120849603.jpg";
const imgBanner4 =
  "https://i.pinimg.com/736x/cf/51/6a/cf516a55c15cab2557e7c0953c92995c.jpg";

const Home = () => {
  const [dem, setDem] = useState(1);

  const [chxNab, setChxNab] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

  var getUser = localStorage.getItem("UserUser")
  var data = JSON.parse(getUser)
  
  if (getUser == null) {
  }

  if(getUser != null){
    setChxNab(true)
  }

    function runBanner(e) {
      $(".slider__warpper")
        .find(".flex__container[data-slide=" + e + "]")
        .addClass("flex--preStart");
      $(".flex--active").addClass("animate--end");
      setTimeout(function () {
        $(".flex--preStart")
          .removeClass("animate--start flex--preStart")
          .addClass("flex--active");
        $(".animate--end")
          .addClass("animate--start")
          .removeClass("animate--end flex--active");
      }, 800);
    }

    $(".slide-nav1").on("click", function (e) {
      e.preventDefault();
      // get current slide
      setDem(1);
      var current = $(".flex--active").data("slide"),
        // get button data-slide
        next = $(this).data("slide");
      if (dem == 1) {
        $(".slide-nav1").removeClass("active");
        $(".slide-nav2").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(2);
          runBanner(next);
        }
      } else if (dem == 3) {
        $(".slide-nav3").removeClass("active");
        $(".slide-nav2").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(2);
          runBanner(next);
        }
      } else if (dem == 4) {
        $(".slide-nav4").removeClass("active");
        $(".slide-nav2").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(2);
          runBanner(next);
        }
      } else if (dem == 5) {
        $(".slide-nav5").removeClass("active");
        $(".slide-nav2").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(2);
          runBanner(next);
        }
      }

      $(".slide-nav2").removeClass("active");
      $(".slide-nav3").removeClass("active");
      $(".slide-nav4").removeClass("active");
      $(".slide-nav5").removeClass("active");
      $(".slide-nav1").addClass("active");

      runBanner(next);
    });

    $(".slide-nav2").on("click", function (e) {
      e.preventDefault();
      // get current slide
      setDem(2);
      var current = $(".flex--active").data("slide"),
        // get button data-slide
        next = $(this).data("slide");
      $(".slide-nav1").removeClass("active");
      $(".slide-nav3").removeClass("active");
      $(".slide-nav4").removeClass("active");
      $(".slide-nav5").removeClass("active");
      $(".slide-nav2").addClass("active");

      runBanner(next);
    });

    $(".slide-nav3").on("click", function (e) {
      e.preventDefault();
      // get current slide
      setDem(3);
      var current = $(".flex--active").data("slide"),
        // get button data-slide
        next = $(this).data("slide");
      $(".slide-nav1").removeClass("active");
      $(".slide-nav2").removeClass("active");
      $(".slide-nav4").removeClass("active");
      $(".slide-nav5").removeClass("active");
      $(".slide-nav3").addClass("active");

      if (dem == 1) {
        $(".slide-nav1").removeClass("active");
        $(".slide-nav3").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(3);
          runBanner(next);
        }
      } else if (dem == 2) {
        $(".slide-nav2").removeClass("active");
        $(".slide-nav3").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(3);
          runBanner(next);
        }
      } else if (dem == 4) {
        $(".slide-nav4").removeClass("active");
        $(".slide-nav3").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(3);
          runBanner(next);
        }
      } else if (dem == 5) {
        $(".slide-nav5").removeClass("active");
        $(".slide-nav3").addClass("active");
        if (current === next) {
          return false;
        } else {
          setDem(3);
          runBanner(next);
        }
      }

      runBanner(next);
    });

    $(".slide-nav4").on("click", function (e) {
      e.preventDefault();
      // get current slide
      setDem(4);
      var current = $(".flex--active").data("slide"),
        // get button data-slide
        next = $(this).data("slide");
      $(".slide-nav1").removeClass("active");
      $(".slide-nav2").removeClass("active");
      $(".slide-nav3").removeClass("active");
      $(".slide-nav5").removeClass("active");
      $(".slide-nav4").addClass("active");

      runBanner(next);
    });

    $(".slide-nav5").on("click", function (e) {
      e.preventDefault();
      // get current slide
      setDem(5);
      var current = $(".flex--active").data("slide"),
        // get button data-slide
        next = $(this).data("slide");
      $(".slide-nav1").removeClass("active");
      $(".slide-nav2").removeClass("active");
      $(".slide-nav3").removeClass("active");
      $(".slide-nav4").removeClass("active");
      $(".slide-nav5").addClass("active");
      runBanner(next);
    });

    const myTimeOut = setTimeout(() => {
      if (dem == 1) {
        setDem(2);
        runBanner(dem);
        $(".slide-nav2").removeClass("active");
        $(".slide-nav3").removeClass("active");
        $(".slide-nav4").removeClass("active");
        $(".slide-nav5").removeClass("active");
        $(".slide-nav1").addClass("active");
      }
      if (dem == 2) {
        setDem(3);
        runBanner(dem);
        $(".slide-nav1").removeClass("active");
        $(".slide-nav3").removeClass("active");
        $(".slide-nav4").removeClass("active");
        $(".slide-nav5").removeClass("active");
        $(".slide-nav2").addClass("active");
      }
      if (dem == 3) {
        setDem(4);
        runBanner(dem);
        $(".slide-nav1").removeClass("active");
        $(".slide-nav2").removeClass("active");
        $(".slide-nav4").removeClass("active");
        $(".slide-nav5").removeClass("active");
        $(".slide-nav3").addClass("active");
      }
      if (dem == 4) {
        setDem(5);
        runBanner(dem);
        $(".slide-nav1").removeClass("active");
        $(".slide-nav2").removeClass("active");
        $(".slide-nav3").removeClass("active");
        $(".slide-nav5").removeClass("active");
        $(".slide-nav4").addClass("active");
      }
      if (dem == 5) {
        setDem(1);
        runBanner(dem);
        $(".slide-nav1").removeClass("active");
        $(".slide-nav2").removeClass("active");
        $(".slide-nav3").removeClass("active");
        $(".slide-nav4").removeClass("active");
        $(".slide-nav5").addClass("active");
      }
    }, 6000);
  });

  const dataSlide = [
    {
      title: "Chai lọ đựng gia vị",
      image: imgSpice,
    },
    {
      title: "Chai lọ đựng dầu gội và sữa tắm",
      image: imgFoundation,
    },
    {
      title: "Chai lọ đựng mĩ phẩm",
      image: imgCosmetics,
    },
    {
      title: "Chai lọ PET trà sữa",
      image: imgBottle,
    },
    {
      title: "Hũ nhựa",
      image: imgPlasticBott,
    },
    {
      title: "Ly nhựa",
      image: imgCup,
    },
  ];

  return (
    <div className="home">
      <div style={{width: "5px", height: "5px"}}>
      <Chat />
      </div>
      <ScrollToTopbtn/>
      {chxNab ? <NavbarIn/> : <Navbar/> }
      <div className="banner_container">
        <div className="home-banner">
          <div className="slider__warpper">
            <div
              className="flex__container flex--pikachu flex--active"
              data-slide="1"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen I</p>
                  <h1 className="text--big">Pikachu</h1>
                  <p className="text--normal">
                    Pikachu is an Electric-type Pokémon introduced in Generation
                    I. Pikachu are small, chubby, and incredibly cute mouse-like
                    Pokémon. They are almost completely covered by yellow fur.
                  </p>
                </div>
                <p className="text__background">Pikachu</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img className="pokemon__img" src={imgBanner} />
            </div>
            <div
              className="flex__container flex--piplup animate--start"
              data-slide="2"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen IV</p>
                  <h1 className="text--big">Piplup</h1>
                  <p className="text--normal">
                    Piplup is the Water-type Starter Pokémon of the Sinnoh
                    region. It was introduced in Generation IV. Piplup has a
                    strong sense of self-esteem. It seldom accepts food that
                    people give because of its pride.
                  </p>
                </div>
                <p className="text__background">Piplup</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img className="pokemon__img" src={imgBanner1} />
            </div>
            <div
              className="flex__container flex--blaziken animate--start"
              data-slide="3"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen III</p>
                  <h1 className="text--big">Blaziken</h1>
                  <p className="text--normal">
                    Blaziken is the Fire/Fighting-type Starter Pokémon of the
                    Hoenn region, introduced in Generation III. Blaziken is a
                    large, bipedal, humanoid bird-like Pokémon that resembles a
                    rooster.
                  </p>
                </div>
                <p className="text__background">Blaziken</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img className="pokemon__img" src={imgBanner2} />
            </div>
            <div
              className="flex__container flex--dialga animate--start"
              data-slide="4"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen IV</p>
                  <h1 className="text--big">Dialga</h1>
                  <p className="text--normal">
                    Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a
                    sauropod-like Pokémon. It is mainly blue with some gray,
                    metallic portions, such as its chest plate, which has a
                    diamond in the center. It also has various, light blue lines
                    all over its body.
                  </p>
                </div>
                <p className="text__background">Dialga</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img className="pokemon__img" src={imgBanner3} />
            </div>
            <div
              className="flex__container flex--zekrom animate--start"
              data-slide="5"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen V</p>
                  <h1 className="text--big">Zekrom</h1>
                  <p className="text--normal">
                    Zekrom is a Dragon/Electric-type Legendary Pokémon. It is
                    part of the Tao Trio, along with Reshiram and Kyurem. Zekrom
                    is a large, black draconian Pokémon that seems to share its
                    theme with its counterpart, Reshiram. It has piercing red
                    eyes and dark gray to black skin that seems to be
                    armor-like.
                  </p>
                </div>
                <p className="text__background">Zekrom</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img className="pokemon__img" src={imgBanner4} />
            </div>
          </div>

          <div className="slider__navi">
            <a href="#" className="slide-nav1 active" data-slide="1">
              pikachu
            </a>
            <a href="#" className="slide-nav2" data-slide="2">
              piplup
            </a>
            <a href="#" className="slide-nav3" data-slide="3">
              blaziken
            </a>
            <a href="#" className="slide-nav4" data-slide="4">
              dialga
            </a>
            <a href="#" className="slide-nav5" data-slide="5">
              zekrom
            </a>
          </div>
        </div>
      </div>

      {/* Banner */}

      <div className="home-main">
        <div className="home_container">
          <div>
            <div className="home-main-introduce">
              <div className="home-main-introduce-content">
                <div className="home-main-introduce-content-frontpager">
                  CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU
                  VŨ GIA GROUP
                </div>
                <div className="home-main-introduce-content-title">
                  <p>
                    “CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP
                    KHẨU VŨ GIA GROUP. Sự ra đời của công ty nhằm đáp ứng nhu
                    cầu kinh doanh ngành chai nhựa của các đại lý trên toàn
                    quốc, nhất là chai nhựa sử dụng nhiều như chai lọ.
                  </p>
                </div>
                <div className="home-main-introduce-button">
                  <button className="btn_introduce">
                    <span className="span_introduce">Xem Thêm</span>
                  </button>
                </div>
              </div>

              <div className="home-main-introduce-image">
                <img
                  src={image_duce}
                  alt=""
                  className="home-main-introduce-image-style"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="home-main-slide">
          <div className="slider_fill">
            <p className="slider_product_title">Các loại sản phẩm</p>
            <div className="line_slider_product">
              <img src={imgLine} alt="" />
            </div>
            <div className="home_container">
              <Slider
                autoplay={true}
                autoplaySpeed={2000}
                slidesToShow={4}
                slidesToScroll={1}
                infinite={true}
              >
                {dataSlide.map((item, index) => (
                  <div className="home-main-slide-item" key={index}>
                    <div className="slider_card">
                      <div className="home_main_slide_item_imgbg">
                        <img
                          src={item.image}
                          alt=""
                          className="home-main-slide-item-image"
                        />
                      </div>
                      <p className="slider_card_title">{item.title}</p>
                      <p className="slider_card_content">
                        thông tin chi tiết loại sản phẩm: hình dạng, kích thước,
                        màu
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="preview">
          <div className="preview_title">
            <p>Dịch vụ của chúng tôi</p>
          </div>
          <div className="preview_content">
            <p>CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU VŨ GIA GROUP</p>
          </div>
        </div>
        <div className="pre_container">
          <div className="col-1-nganh-hoc container-nganh-hoc">
            <div className="top">
              <img src={imageItem} />
              <div>
                <img style={{ width: "30%" }} src={carImg} />
              </div>
            </div>
            <div className="mid">
              <h3>Giao hàng toàn quốc</h3>
              <ul>
                <li>Giao hàng nhanh chóng</li>

                <li>Đảm bảo hàng hóa nguyên vẹn đến tay khách hàng</li>
              </ul>
            </div>
            <div className="bot">
              <button></button>
            </div>
          </div>

          <div className="col-2-nganh-hoc container-nganh-hoc">
            <div className="top">
              <img src={imageItem2} />
              <div>
                <img src={moneyImg} />
              </div>
            </div>
            <div className="mid">
              <h3>Cam kết đổi trả</h3>
              <ul>
                <li>Hoàn tiền khi đổi trả</li>

                <li>Chính sách bảo hàng DOA trong 7 ngày</li>
              </ul>
            </div>
            <div className="bot">
              <button></button>
            </div>
          </div>

          <div className="col-3-nganh-hoc container-nganh-hoc">
            <div className="top">
              <img src={imageItem3} />
              <div>
                <img src={hoursImg} />
              </div>
            </div>
            <div className="mid">
              <h3>Chăm sóc khách hàng</h3>
              <ul>
                <li>Hoạt đông 24/7</li>

                <li>Lắng nghe nhu cầu của khách hàng</li>
              </ul>
            </div>
            <div className="bot">
              <button></button>
            </div>
          </div>

          <div className="col-4-nganh-hoc container-nganh-hoc">
            <div className="top">
              <img src={imageItem4} />
              <div>
                <img src={shieldImg} />
              </div>
            </div>
            <div className="mid">
              <h3>Cam kết chất lượng</h3>
              <ul>
                <li>Chúng tôi cam kết đưa đến cho khách hàng những sản phẩm tốt nhất</li>
              </ul>
            </div>
            <div className="bot">
              <button></button>
            </div>
          </div>
        </div>

        <div className="home-main-slide">
          <div className="home_backgroud">
            <div className="home_container">
              <SliderHome />
            </div>
          </div>
        </div>

        <div className="home-main-news">
          <p className="home_main_new_title">TIN TỨC VÀ SỰ KIỆN</p>
          <div className="home_news_container">
            <div className="home_main_new_top">
              <div className="main_new_top_big">
                <div className="main_new_top_big_background">
                  <img src={imgBanner} alt="" />
                </div>
                <div className="main_news_content">
                  <div className="main_new_top_big_img">
                  <img src={image_u} alt="" />
                  </div>
                  <div className="main_new_top_big_card">
                    <div className="main_new_top_big_time">22 january 2022</div>
                    <div className="main_new_top_big_title">
                      Tesla Cybertruck-inspired camper trailer for Tesla fans
                      who can't just wait for the truck!
                    </div>
                    <div className="main_new_top_big_content">
                      <div className="number_comment">
                        <div className="number_comment_icon">
                        <img src={image_thumb_up} alt="" />
                        </div>
                        <div className="number_coment_content">71.8k</div>
                      </div>
                      <div className="number_comment">
                        <div className="number_comment_icon">
                        <img src={image_comments} alt="" />
                        </div>
                        <div className="number_coment_content">4.01k</div>
                      </div>
                      <div className="number_comment">
                        <div className="number_comment_icon">
                        <img src={image_share} alt="" />
                        </div>
                        <div className="number_coment_content">67.05k</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main_new_top_center">
                <div className="main_new_top_center_background">
                  <img src={imgBanner} alt="" />
                </div>
                <div className="main_new_top_center_content">
                  <div className="main_new_top_center_big_img">
                  <img src={image_u} alt="" />
                  </div>
                  <div className="main_new_top_center_card">
                    <div className="main_new_top_center_big_time">
                      22 january 2022
                    </div>
                    <div className="main_new_top_center_title">
                      Tesla Cybertruck-inspired camper trailer for Tesla fans
                      who can't just wait for the truck!
                    </div>
                    <div className="main_new_top_center_big_content">
                      <div className="main_new_top_center_number_comment">
                        <div className="main_new_top_center_number_comment_icon">
                          <img src={image_thumb_up} alt="" />
                        </div>
                        <div className="main_new_top_center_coment_content">
                          71.8k
                        </div>
                      </div>
                      <div className="main_new_top_center_number_comment">
                        <div className="main_new_top_center_number_comment_icon">
                          <img src={image_comments} alt="" />
                        </div>
                        <div className="main_new_top_center_coment_content">
                          4.01k
                        </div>
                      </div>
                      <div className="main_new_top_center_number_comment">
                        <div className="main_new_top_center_number_comment_icon">
                          <img src={image_share} alt="" />
                        </div>
                        <div className="main_new_top_center_coment_content">
                          67.05k
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main_new_top_small">
                <div className="main_new_top_center_background">
                  <img src={imgBanner} alt="" />
                </div>
                <div className="main_new_top_center_content">
                  <div className="main_new_top_center_big_img">
                    <img src={image_u} alt="" />
                  </div>
                  <div className="main_new_top_small_card">
                    <div className="main_new_top_center_big_time">
                      22 january 2022
                    </div>
                    <div className="main_new_top_center_title">
                      Tesla Cybertruck-inspired camper trailer for Tesla fans
                      who can't just wait for the truck!
                    </div>
                    <div className="main_new_top_center_big_content">
                      <div className="main_new_top_center_number_comment">
                        <div className="main_new_top_center_number_comment_icon">
                        <img src={image_thumb_up} alt="" />
                        </div>
                        <div className="main_new_top_center_coment_content">
                          71.8k
                        </div>
                      </div>
                      <div className="main_new_top_center_number_comment">
                        <div className="main_new_top_center_number_comment_icon">
                        <img src={image_comments} alt="" />
                        </div>
                        <div className="main_new_top_center_coment_content">
                          4.01k
                        </div>
                      </div>
                      <div className="main_new_top_center_number_comment">
                        <div className="main_new_top_center_number_comment_icon">
                        <img src={image_share} alt="" />
                        </div>
                        <div className="main_new_top_center_coment_content">
                          67.05k
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main_new_bottom">
            <div className="main_new_bottom_card">
              <div
                className="main_new_bottom_card_image"
                style={{
                  backgroundImage: `url("${image2}")`,
                  width: "100%",
                  height: "28vh",
                  borderRadius: "20px 20px 0px 0",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="main_new_bottom_card_image_img">
                <div className="main_new_bottom_card_image_img_container">
                  <img src={imgUser} alt="" />
                </div>
              </div>
              <div className="mmain_new_bottom_card_content">
                <div className="main_new_bottom_card_time">10 May 2022</div>
                <div className="main_new_bottom_card_name">Fresh Princer</div>
                <div className="main_new_bottom_card_cws">
                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_thumb_up} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_comments} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_share} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_new_bottom_card">
              <div
                className="main_new_bottom_card_image"
                style={{
                  backgroundImage: `url("${image2}")`,
                  width: "100%",
                  height: "28vh",
                  borderRadius: "20px 20px 0px 0",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="main_new_bottom_card_image_img">
                <div className="main_new_bottom_card_image_img_container">
                  <img src={imgUser} alt="" />
                </div>
              </div>
              <div className="mmain_new_bottom_card_content">
                <div className="main_new_bottom_card_time">10 May 2022</div>
                <div className="main_new_bottom_card_name">Fresh Princer</div>
                <div className="main_new_bottom_card_cws">
                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_thumb_up} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_comments} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_share} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_new_bottom_card">
              <div
                className="main_new_bottom_card_image"
                style={{
                  backgroundImage: `url("${image2}")`,
                  width: "100%",
                  height: "28vh",
                  borderRadius: "20px 20px 0px 0",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="main_new_bottom_card_image_img">
                <div className="main_new_bottom_card_image_img_container">
                  <img src={imgUser} alt="" />
                </div>
              </div>
              <div className="mmain_new_bottom_card_content">
                <div className="main_new_bottom_card_time">10 May 2022</div>
                <div className="main_new_bottom_card_name">Fresh Princer</div>
                <div className="main_new_bottom_card_cws">
                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_thumb_up} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_comments} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_share} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_new_bottom_card">
              <div
                className="main_new_bottom_card_image"
                style={{
                  backgroundImage: `url("${image2}")`,
                  width: "100%",
                  height: "28vh",
                  borderRadius: "20px 20px 0px 0",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="main_new_bottom_card_image_img">
                <div className="main_new_bottom_card_image_img_container">
                  <img src={imgUser} alt="" />
                </div>
              </div>
              <div className="mmain_new_bottom_card_content">
                <div className="main_new_bottom_card_time">10 May 2022</div>
                <div className="main_new_bottom_card_name">Fresh Princer</div>
                <div className="main_new_bottom_card_cws">
                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_thumb_up} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_comments} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>

                  <div className="main_new_bottom_card_comment">
                    <div className="main_new_bottom_card_comment_image">
                    <img src={image_share} alt="" />
                    </div>
                    <div className="main_new_bottom_card_comment_content">
                      89.81k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

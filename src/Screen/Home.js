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
import ScrollToTopbtn from "./ScrollToTopbtn";

import SliderHome from "./Slide_Home";
import Navbar from "./Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import NavbarIn from "./NavbarIn";
import imgLine from "../assets/line_silde_product.png";
import axios from "axios";

import image_duce from "../assets/image_duce.jpg";
import { useNavigate } from "react-router";
import ItemBlog_1 from "../item/ItemBlog_1";
import ItemBlog_3 from "../item/ItemBlog_3";
import ItemBlog_2 from "../item/ItemBlog_2";
import ItemBlog_4 from "../item/ItemBlog_4";
import ItemBlog_5 from "../item/ItemBlog_5";
import ItemBlog_6 from "../item/ItemBlog_6";
import ItemBlog_7 from "../item/ItemBlog_7";
import imgBanner from "../assets/imgbanner1.jpg";
import imgBanner1 from "../assets/imgBanner2.jpg";
import imgBanner2 from "../assets/imgbanner3.jpg";
import imgBanner3 from "../assets/imgbanner4.jpg";
import imgBanner4 from "../assets/imgbanner5.jpg";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [dem, setDem] = useState(1);

  const [chxNab, setChxNab] = useState(false);

  const navigate = useNavigate();

  const onclickContact = () => {
    navigate("/Contact");
  };

  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    var data = JSON.parse(getUser);

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
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

  // ------------------------------------------ server -------------------------------------------------------

  const ip = "http://localhost:8080";

  const [dsLoaiSP, setDsLoaiSP] = useState([]);

  const [dsBlog, setDsBlog] = useState([]);
  const [dsBlog1, setDsBlog1] = useState([]);
  const [dsBlog2, setDsBlog2] = useState([]);
  const [dsBlog3, setDsBlog3] = useState([]);
  const [dsBlog4, setDsBlog4] = useState([]);
  const [dsBlog5, setDsBlog5] = useState([]);
  const [dsBlog6, setDsBlog6] = useState([]);

  const getDataLoaiSP = () => {
    axios.get(ip + "/getDataLoaiSP").then((response) => {
      setDsLoaiSP(response.data);
    });
  };

  const getDataBlog = () => {
    axios.get(ip + "/getDataBlog").then((response) => {
      setDsBlog(response.data[0]);
      setDsBlog1(response.data[1]);
      setDsBlog2(response.data[2]);
      setDsBlog3(response.data[3]);
      setDsBlog4(response.data[4]);
      setDsBlog5(response.data[5]);
      setDsBlog6(response.data[6]);
    });
  };

  useEffect(() => {
    getDataLoaiSP();
    getDataBlog();
  }, []);

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
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
        <div className="home">
          <div style={{ width: "5px", height: "5px" }}></div>
          <ScrollToTopbtn />
          {chxNab ? <NavbarIn /> : <Navbar />}
          <div className="banner_container">
            <div className="home-banner">
              <div className="slider__warpper">
                <div
                  className="flex__container flex--pikachu flex--active"
                  data-slide="1"
                >
                  <div className="flex__item flex__item--left">
                    <div className="flex__content">
                      {/* <p className="text--sub">Pokemon Gen I</p> */}
                      <h1 className="text--big">Cung c???p v??? chai l???</h1>
                      <p className="text--normal">
                        ??a d???ng m???u m??, ch???t li???u, k??ch th?????c.
                        <br />
                        Gi?? c??? c???nh tranh.
                        <br />
                        Nh???n cung c???p s??? l?????ng l??n to??n qu???c.
                      </p>
                    </div>
                    {/* <p className="text__background">Pikachu</p> */}
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
                      {/* <p className="text--sub">Pokemon Gen IV</p> */}
                      <h1 className="text--big">V??? chai l???</h1>
                      <p className="text--normal">
                        H?? nh???a.
                        <br />
                        Chai l??? nh???a.
                        <br />
                        Tu??p m??? ph???m.
                      </p>
                    </div>
                    {/* <p className="text__background">Piplup</p> */}
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
                      {/* <p className="text--sub">Pokemon Gen III</p> */}
                      <h1 className="text--big">Cung c???p v??? chai l???</h1>
                      <p className="text--normal">
                        Nh???n ?????t h??ng s??? l?????ng l???n.
                        <br />
                        Uy t??n, ch???t l?????ng.
                        <br />
                        H??? tr??? giao h??ng.
                      </p>
                    </div>
                    {/* <p className="text__background">Blaziken</p> */}
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
                      {/* <p className="text--sub">Pokemon Gen IV</p> */}
                      <h1 className="text--big">Ch???t l?????ng h??ng ?????u</h1>
                      <p className="text--normal">
                        ?????m b???o, uy t??n, ch???t l?????ng chai nh???a cho kh??ch h??ng.
                      </p>
                    </div>
                    {/* <p className="text__background">Dialga</p> */}
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
                      {/* <p className="text--sub">Pokemon Gen V</p> */}
                      <h1 className="text--big">S??? ki???n gi??ng sinh</h1>
                      <p className="text--normal">
                        Gi???m gi?? 50% chai l??? m??? ph???m.
                        <br />
                        B???t ?????u t??? ng??y 10 th??ng 12 ?????n ng??y 02 th??ng 01.
                      </p>
                    </div>
                    {/* <p className="text__background">Zekrom</p> */}
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
                      C??NG TY TNHH S???N XU???T ?????U T?? TH????NG M???I D???CH V??? XU???T NH???P
                      KH???U V?? GIA GROUP
                    </div>
                    <div className="home-main-introduce-content-title">
                      <p>
                        ???C??NG TY TNHH S???N XU???T ?????U T?? TH????NG M???I D???CH V??? XU???T
                        NH???P KH???U V?? GIA GROUP. S??? ra ?????i c???a c??ng ty nh???m ????p
                        ???ng nhu c???u kinh doanh ng??nh chai nh???a c???a c??c ?????i l??
                        tr??n to??n qu???c, nh???t l?? chai nh???a s??? d???ng nhi???u nh?? chai
                        l???.
                      </p>
                    </div>
                    <div className="home-main-introduce-button" onClick={onclickContact}>
                      <button className="btn_introduce">
                        <span className="span_introduce">Xem Th??m</span>
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
                <p className="slider_product_title">C??c lo???i s???n ph???m</p>
                <div className="line_slider_product">
                  <img src={imgLine} alt="" />
                </div>
                <div className="home_container">
                  <Slider
                    {...settings}

                  >
                    {dsLoaiSP.map((vl, index) => {
                      if (vl.TrangThaiLoaiSP == "Ho???t ?????ng") {
                        return (
                          <div className="home-main-slide-item" key={vl._id}>
                            <div className="slider_card">
                              <div className="home_main_slide_item_imgbg">
                                <img
                                  src={ip + "/uploads/" + vl.ImageLoaiSP}
                                  alt=""
                                  className="home-main-slide-item-image"
                                />
                              </div>
                              <p className="slider_card_title">
                                {vl.NameLoaiSP}
                              </p>
                              <p className="slider_card_content">
                                {vl.MotaLoaiSP}
                              </p>
                            </div>
                          </div>
                        );
                      } else if (vl.TrangThaiLoaiSP == "Kh??ng ho???t ?????ng") {
                      }
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="preview">
              <div className="preview_title">
                <p>D???ch v??? c???a ch??ng t??i</p>
              </div>
              <div className="preview_content">
                <p>
                  C??NG TY TNHH S???N XU???T ?????U T?? TH????NG M???I D???CH V??? XU???T NH???P KH???U
                  V?? GIA GROUP
                </p>
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
                  <h3>Giao h??ng to??n qu???c</h3>
                  <ul>
                    <li>Giao h??ng nhanh ch??ng</li>

                    <li>?????m b???o h??ng h??a nguy??n v???n ?????n tay kh??ch h??ng</li>
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
                  <h3>Cam k???t ?????i tr???</h3>
                  <ul>
                    <li>Ho??n ti???n khi ?????i tr???</li>

                    <li>Ch??nh s??ch b???o h??ng DOA trong 7 ng??y</li>
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
                  <h3>Ch??m s??c kh??ch h??ng</h3>
                  <ul>
                    <li>Ho???t ????ng 24/7</li>

                    <li>L???ng nghe nhu c???u c???a kh??ch h??ng</li>
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
                  <h3>Cam k???t ch???t l?????ng</h3>
                  <ul>
                    <li>
                      Ch??ng t??i cam k???t ????a ?????n cho kh??ch h??ng nh???ng s???n ph???m
                      t???t nh???t
                    </li>
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
              <p className="home_main_new_title">TIN T???C V?? S??? KI???N</p>
              <div className="home_news_container">
                <div className="home_main_new_top">
                  <ItemBlog_1 dsBlog={dsBlog} />

                  <ItemBlog_2 dsBlog={dsBlog1} />

                  <ItemBlog_3 dsBlog={dsBlog2} />
                </div>
              </div>

              <div className="main_new_bottom">
                <ItemBlog_4 dsBlog={dsBlog3} />

                <ItemBlog_5 dsBlog={dsBlog4} />

                <ItemBlog_6 dsBlog={dsBlog5} />

                <ItemBlog_7 dsBlog={dsBlog6} />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;

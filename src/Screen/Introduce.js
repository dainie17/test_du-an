import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import Navbar from "./Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "./ScrollToTopbtn";

import "../css/Introduce.css";

import Footer from "./footer";
import { useEffect } from "react";
import { useState } from "react";
import NavbarIn from "./NavbarIn";

import axios from "axios";

const Introduce = () => {

  let navgate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const ip = "http://localhost:8080"

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [SDT, setSDT] = useState();
  const [DiaChi, setDiaChi] = useState();
  const [Mota, setMota] = useState();

  const btnAdd_PhanHoi = () => {
    axios.post(ip + "/add_PhanHoi", {
      Name: Name,
      Email: Email,
      SDT: SDT,
      DiaChi: DiaChi,
      Mota: Mota,
      Date: new Date(),
    })


  }

  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser")
    var data = JSON.parse(getUser)

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true)
    }
  },)

  const [color2, setColor2] = useState("#d8dde1");
  const [nameCheck, setNameCheck] = useState(false);
  const [errorName, setErrorName] = useState("");
  const validateName = (se) => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const formatNum = /[0123456789]/;
    if (se == "") {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Tên người dùng không được để trống");
    }
    if (se != "" && format.test(se) == true) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Vui lòng không điền kí tự đặc biệt");
    }
    if (se != "" && formatNum.test(se) == true) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Vui lòng không điền kí tự đặc biệt");
    }
    if (se != "" && se.length < 2) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Vui lòng nhập hơn 1 ký tự");
    }
    if (se != "" && se.length > 20) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Vui lòng nhập ít hơn 20 ký tự");
    }
    if (se != "" && se.length > 1 && se.length <21 && format.test(se) == false && formatNum.test(se) == false) {
      setNameCheck(true);
      setColor2("#d8dde1");
      setErrorName("");
    }
  }

  function ErrorName(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning_intro">
        {props.errorName}
      </div>
    )
  }
  const [color3, setColor3] = useState("#d8dde1");
  const [EmailCheck, setEmailCheck] = useState(false);
  const [errorEmailCheck, setErrorEmailCheck] = useState("");
  const validateEmailCheck = (se) => {
    const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (se == "") {
      setEmailCheck(false);
      setColor3("red");
      setErrorEmailCheck("Email không được để trống");
    }
    if (se != "" && formatEmail.test(se) == false){
      setEmailCheck(false);
      setColor3("red");
      setErrorEmailCheck("Email không đúng định dạng");
    }

    if (se != "" && formatEmail.test(se) == true){
      setEmailCheck(true);
      setColor3("#d8dde1");
      setErrorEmailCheck("");
    }

  }
  function ErrorEmailCheck(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning_intro">
        {props.errorEmailCheck}
      </div>
    )
  }

  const [color4, setColor4] = useState("#d8dde1");
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [errorPhoneCheck, setErrorPhoneCheck] = useState("");
  const validatePhoneCheck = (se) => {
    const formatPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;


    if (se == "") {
      setPhoneCheck(false);
      setColor4("red");
      setErrorEmailCheck("Số điện thoại không được để trống");
    }
    if (se != "" && formatPhone.test(se) == false){
      setPhoneCheck(false);
      setColor4("red");
      setErrorEmailCheck("Số điện thoại không đúng định dạng");
    }

    if (se != "" && formatPhone.test(se) == true){
      setPhoneCheck(true);
      setColor4("#d8dde1");
      setErrorEmailCheck("");
    }

  }
  function ErrorPhoneCheck(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning_intro">
        {props.errorPhoneCheck}
      </div>
    )
  }

  return (
    <div>
      <ScrollToTop />

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
          {chxNab ? <NavbarIn /> : <Navbar />}
          <div className="title">
            <div className="title_header">
              <h2>Liên hệ</h2>
            </div>
            <div className="title_container">
              <div className="title_container--text">
                <p className="CT">
                  CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP
                </p>
                <div className="title_container--text--name">
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <PublicIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Tên quốc tế</p>
                      </div>
                      <p id="diachi">
                        CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP
                      </p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <AlignVerticalCenterIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Mã số thuế</p>
                      </div>
                      <p id="diachi">0782565750</p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <LocationOnIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Địa chỉ </p>
                      </div>
                      <p id="diachi">
                        840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình
                        Tân, T.P Hồ Chí Mình, Việt Nam
                      </p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <PersonIcon sx={{ fontSize: 15 }} />
                        <p style={{ fontWeight: "bold" }}>Người Đại Diện </p>
                      </div>
                      <p id="diachi">
                        Vũ Anh Tuấn <br /> Ngoài ra Vũ Anh Tuấn còn đại diện các
                        doanh nghiệp: <br /> Công Ty Cổ Phần Thương Mại Dịch Vụ
                      </p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <LocalPhoneIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Số điện thoại</p>
                      </div>
                      <p id="diachi">0782565750</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title_container__input">
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color2 }}
                      className="intro__input"
                      placeholder=" "
                      name="Họ và tên"
                      // onClick={useKey("Enter", btnAdd_PhanHoi)}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={(e)=> validateName(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Họ và tên
                    </label>
                    <ErrorName isHidden={nameCheck} errorName={errorName}/>
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color3 }}
                      className="intro__input"
                      placeholder=" "
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={(e)=> validateEmailCheck(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Email
                    </label>
                    <ErrorEmailCheck isHidden={EmailCheck} errorEmailCheck={errorEmailCheck}/>
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="number"
                      style={{ borderColor: color4 }}
                      className="intro__input"
                      placeholder=" "
                      name="Số điện thoại"
                      onChange={(e) => setSDT(e.target.value)}
                      onBlur={(e)=>validatePhoneCheck(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Số điện thoại
                    </label>
                    <ErrorEmailCheck isHidden={phoneCheck} errorPhoneCheck={errorPhoneCheck}/>
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color2 }}
                      className="intro__input"
                      placeholder=" "
                      name="Địa chỉ"
                      onChange={(e) => setDiaChi(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Địa chỉ
                    </label>
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="tel"
                      style={{ borderColor: color2 }}
                      className="intro__input"
                      placeholder=" "
                      name="Nội dung"
                      onChange={(e) => setMota(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Nội dung
                    </label>
                  </div>
                </div>
                <div className="title_container__input__buttom" onClick={btnAdd_PhanHoi}>
                  <button> Gửi</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bando">
            <div className="bando_khobau">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210063.33014376528!2d105.6389760715208!3d9.804323603329172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089b78ddc936b%3A0x8e8d46a009e63c4e!2zU0hPUCBUSOG7giBUSEFPIFTDglkgxJDDlCBTUE9SVA!5e0!3m2!1svi!2s!4v1663951607719!5m2!1svi!2s"
                ></iframe> */}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Introduce;

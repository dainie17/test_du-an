import React, { useEffect, useRef } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Stack, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";


function useKey(key, cb) {

  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  })

  useEffect(() => {

    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key])
}

export default function SignUp() {

  const ip = "http://localhost:8080"

  const navigate = useNavigate();

  const [TKUser, setTKUser] = useState();
  const [EmailUser, setEmailUser] = useState();
  const [passUser, setPassUser] = useState();
  const [TrangThaiUser, setTrangThaiUser] = useState("Hoạt động");



  const btnSignup = () => {
    if (TKCheck == false && passwordCheck == false && EmailCheck == false) {
      validateTK(TKUser)
      validateEmailCheck(EmailUser)
      validatePass(passUser)
      return
    }
    if(TKCheck == false && passwordCheck == true && EmailCheck == true){
      validateTK(TKUser)
      return
    }
    if (TKCheck == true && passwordCheck == true && EmailCheck == false) {
      validateEmailCheck(EmailUser)
      return
    }
    if (TKCheck == true && passwordCheck == false && EmailCheck == true) {
      validatePass(passUser)
      return
    }
    if (TKCheck == false && passwordCheck == false && EmailCheck == true) {
      validateTK(TKUser)
      validatePass(passUser)
      return
    }
    if (TKCheck == false && passwordCheck == true && EmailCheck == false) {
      validateTK(TKUser)
      validateEmailCheck(EmailUser)
      return
    }
    if (TKCheck == true && passwordCheck == false && EmailCheck == false) {
      validatePass(passUser)
      validateEmailCheck(EmailUser)
      return
    }
    if (TKCheck == true && passwordCheck == true && EmailCheck == true) {
      fetch(ip + "/register_User", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          TKUser: TKUser,
          EmailUser: EmailUser,
          passUser: passUser,
          TrangThaiUser:TrangThaiUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userResgister");
          if (data.error == "Trùng tài khoản") {
            validateTK(data.error)
            setTKUser("Trùng tài khoản")
          }else{
            setTKUser(TKUser)
          }
           if (data.error == "Trùng Email") {
            validateEmailCheck(data.error)  
            setEmailUser("Trùng Email")
          } else{
            setEmailUser(EmailUser)
          }
          if(data.status == "Ok"){
            navigate("/login", { replace: true });
          }
        })
    }
    }


  // ===================================== validate ================================================================
  const [color2, setColor2] = useState("#d8dde1");
  const [color3, setColor3] = useState("#d8dde1");
  const [color4, setColor4] = useState("#d8dde1");

  const [TKCheck, setTKCheck] = useState(false);
  const [errorTK, setErrorTK] = useState("");
  const validateTK = (se) => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (se == null) {
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Tài khoản không được để trống");
    }
    if (se == "Trùng tài khoản" && se != null) {
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Tài khoản đã tồn tại");
    }
    if (se != "Trùng tài khoản" && se != null && format.test(se) == true){
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Vui lòng không điền kí tự đặt biệt");
    }
    if (se != "Trùng tài khoản" && se != null && format.test(se) == false){
      setTKCheck(true);
      setColor2("#d8dde1");
      setErrorTK("");
    }
  }

  function ErrorTK(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning">
        {props.errorTK}
      </div>
    )
  }

  const [EmailCheck, setEmailCheck] = useState(false);
  const [errorEmailCheck, setErrorEmailCheck] = useState("");
  const validateEmailCheck = (se) => {
    const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (se == null) {
      setEmailCheck(false);
      setColor4("red");
      setErrorEmailCheck("Email không được để trống");
    }
    if (se == "Trùng Email" && se != null) {
      setEmailCheck(false);
      setColor4("red");
      setErrorEmailCheck("Email đã tồn tại");
    }
    if (se != "Trùng Email" && se != null && formatEmail.test(se) == false){
      setEmailCheck(false);
      setColor4("red");
      setErrorEmailCheck("Email không đúng định dạng");
    }
    if (se != "Trùng Email" && se != null && formatEmail.test(se) == true){
      setEmailCheck(true);
      setColor4("#d8dde1");
      setErrorEmailCheck("");
    }
  }
  function ErrorEmailCheck(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning">
        {props.errorEmailCheck}
      </div>
    )
  }


  const [passwordCheck, setPasswordCheck] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const validatePass = (se) => {
    const pass = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (pass.test(se) == false) {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Vui lòng không điền kí tự đặt biệt");
    }
    if (se == null) {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Password không được để trống");
    }

    if (se != null && se.length > 0 ) {
      setPasswordCheck(true);
      setColor3("#d8dde1");
      setErrorPassword("");
    }

  }
  function ErrolPassword(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning">
        {props.errorPassword}
      </div>
    )
  }


  return (
    <div className="container">
      <div className="logo_form">
        <img
          className="logo"
          src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
        />
        <h1 className="name_logo">Vagaboon</h1>
      </div>

      <div className="login">
        <div className="form_login_title">
          <p className="title_content">Đăng ký</p>
          <Link className="nouser" to={'/login'}><p>Đã có tài khoản ?</p></Link>
        </div>
        <div className="form_login_input">
          <div className="userr">
            <input
              type="text"
              className="form__input"
              style={{ borderColor: color2 }}
              placeholder=" "
              name="Tên đăng nhập"
              onChange={(e) => setTKUser(e.target.value)}
              onClick={useKey("Enter", btnSignup)}
              onBlur={(e) => validateTK(e.target.value)}
              required
            />
            <label htmlFor="text" className="form__label">
              Tên đăng nhập
            </label>
            <ErrorTK isHidden={TKCheck} errorTK={errorTK} />
          </div>
          <div className="userr">
            <input
              type="text"
              className="form__input"
              style={{ borderColor: color4 }}
              placeholder=" "
              name="Nhập email"
              onChange={(e) => setEmailUser(e.target.value)}
              onClick={useKey("Enter", btnSignup)}
              onBlur={(e) => validateEmailCheck(e.target.value)}
              required
            />
            <label htmlFor="email" className="form__label">
              Nhập email
            </label>
            <ErrorEmailCheck
              isHidden={EmailCheck}
              errorEmailCheck={errorEmailCheck}
            />
          </div>
          <div className="userr">
            <input
              type="password"
              className="form__input"
              style={{ borderColor: color3 }}
              placeholder=" "
              name="Tên đăng nhập"
              onChange={(e) => setPassUser(e.target.value)}
              onClick={useKey("Enter", btnSignup)}
              onBlur={(e) => validatePass(e.target.value)}
              required
            />
            <label htmlFor="email" className="form__label">
              Mật khẩu
            </label>
            <ErrolPassword
              isHidden={passwordCheck}
              errorPassword={errorPassword}
            />
          </div>
          <button
            style={{ marginTop: "6%" }}
            className="form_login_btn"
            type="submit"
            onClick={btnSignup}
          >
            Đăng Ký
          </button>
        </div>

        <div className="login_or">Hoặc</div>
        <div className="form_login_with">
          <div className="btn_gg">
            <div className="logo_gg"></div>
            <div className="title_gg">Google</div>
          </div>

          <div className="btn_tw">
            <div className="logo_tw" />
            <div className="title_tw">Twiter</div>
          </div>

          <div className="btn_fb">
            <div className="logo_fb"></div>
            <div className="title_fb">Facebook</div>
          </div>
        </div>
      </div>

      <div className="footer_login">
        <div className="footer_login_content">
          <div className="about_we">Về chúng tôi</div>
          <div className="about_line"></div>
          <div className="about_we">Các điều khoản</div>
          <div className="about_line"></div>
          <div className="about_we">Chính sách bảo mật</div>
          <div className="about_line"></div>
          <div className="about_we">Trung tâm trợ giúp</div>
        </div>
        <div className="">
          ©2022 Bản quyền thuộc về Công Ty TNHH Sản Xuất Đầu Tư TM DV XNK Vũ Gia
          Group.
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useRef } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Stack, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";
import FormProvider from "../bo_sung/FormProvider";
import "../css/Login_1.css";



function useKey(key, cb) {

  const callbackRef = useRef(cb);

  useEffect(()=> {
    callbackRef.current = cb;
  })

  useEffect(()=>{

    function handle(event){
      if(event.code === key){
        callbackRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return()=> document.removeEventListener("keypress", handle);
  }, [key])
}

function Login_1() {
  const navigate = useNavigate();
  const [color2, setColor2] = useState("#d8dde1");
  const [color3, setColor3] = useState("#d8dde1");
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate("/Home", { replace: true });
  };

  const [taikhoan, setTK] = useState("");
  const [pass, setPass] = useState("");
  const [TKCheck, setTKCheck] = useState(true);
  const [errorTK, setErrorTK] = useState("");
  const [chxSave, setChxSave] = useState(false);
  const validateTK = (se) => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (format.test(se) == false) {
      setTKCheck(true);
      setColor2("#d8dde1");
      setErrorTK("");

    } else {
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Vui lòng không điền kí tự đặt biệt");
    }

    if(se.length > 50){ 
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Tài khoản dài quá 50 kí tự");
    } 
    if(se.length < 5 && se.length > 0){ 
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Độ dài tài khoản lớn hơn 5 kí tự");
    } 
    if(se.length == 0){ 
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Tài khoản không được để trống");
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


  const [passwordCheck, setPasswordCheck] = useState(true);
  const [errorPassword, setErrorPassword] = useState("");
  const validatePass = (se) => {
    const pass = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (pass.test(se) == false) {
      setPasswordCheck(true);
      setColor3("#d8dde1");
      setErrorPassword("");
    } else {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Vui lòng không điền kí tự đặt biệt");
    }

    if(se.length > 50){ 
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Mật khẩu dài quá 50 kí tự");
    } 
    if(se.length < 5 && se.length > 0){ 
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Độ dài Mật khẩu lớn hơn 5 kí tự");
    } 
    if(se.length == 0){ 
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Mật khẩu không được để trống");
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
          <p className="title_content">Đăng nhập</p>
          <Link  className="nouser" to={'/Signup'}><p>Không có tài khoản ?</p></Link>
        </div>
        <div className="form_login_input">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

              <div className="user">
                <input
                  type="text"
                  className="form__input"
                  style={{ borderColor: color2 }}
                  placeholder=" "
                  name="Tên đăng nhập"
                  onChange={(e) => setTK(e.target.value)}
                  onClick={useKey("Enter", onSubmit)}
                  onBlur={(e) => validateTK(e.target.value)}
                  required
                />
                <label htmlFor="text" className="form__label">
                  Tên đăng nhập
                </label>
                <ErrorTK isHidden={TKCheck} errorTK={errorTK} />
              </div>
              <div className="user">
                <input
                  type="password"
                  className="form__input"
                  style={{ borderColor: color3 }}
                  placeholder=" "
                  name="Tên đăng nhập"
                  onChange={(e) => setPass(e.target.value)}
                  onC
                  lick={useKey("Enter", onSubmit)}
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
            <div className="form_login_forgetmenot">
              <div className="form_login_forgetmenot_left">
                <Checkbox />
                <div className="title_chb">Lưu mật khẩu</div>
              </div>
              <p>Quên mật khẩu ?</p>
            </div>
            <button
              className="form_login_btn"
              type="submit"
              loading={isSubmitting}
            >
              Đăng nhập
            </button>
          </FormProvider>
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
export default Login_1;

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
import logo from "../assets/logo_cty.png";

export default function Forgot_Pass(props) {

    const ip = "http://localhost:8080"

    const navigate = useNavigate();

    const [EmailUser, setEmailUser] = useState();

    const onclickHome = () => {
        navigate("/");
    };

    const onclickForgetPass = () => {
        fetch(ip + "/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                EmailUser: EmailUser
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userLogin");
                alert(data.status);
            })
    };

    const [color, setColor] = useState(false);
    const [EmailCheck, setEmailCheck] = useState(false);
    const [errorEmailCheck, setErrorEmailCheck] = useState("");
    const validateEmailCheck = (se) => {
        // const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        setEmailCheck(true);
        setColor("#d8dde1");
        setErrorEmailCheck("");
        // if (se == null) {
        //     setEmailCheck(false);
        //     setColor("red");
        //     setErrorEmailCheck("Email không được để trống");
        // }
        // if (se == "Trùng Email" && se != null) {
        //     setEmailCheck(false);
        //     setColor("red");
        //     setErrorEmailCheck("Email đã tồn tại");
        // }
        // if (se != "Trùng Email" && se != null && formatEmail.test(se) == false) {
        //     setEmailCheck(false);
        //     setColor("red");
        //     setErrorEmailCheck("Email không đúng định dạng");
        // }
        // if (se != "Trùng Email" && se != null && formatEmail.test(se) == true) {
        //     setEmailCheck(true);
        //     setColor("#d8dde1");
        //     setErrorEmailCheck("");
        // }
    }
    function ErrorEmailCheck(props) {
        if (props.isHidden) { return null; }
        return (
            <div className="form_warning">
                {props.errorEmailCheck}
            </div>
        )
    }

    return (

        <div className="container">
            <div className="logo_form" onClick={onclickHome}>
                <img
                    className="logo"
                    src={logo}
                />
            </div>

            <div className="login">
                <div style={{width: "100%", textAlign: "center", margin: "0 0 30px 0"}}>
                    <p style={{fontSize: "30px", fontWeight:"750", color: "#707070"}}>Nhập địa chỉ Email</p>
                </div>
                <div className="form_login_input">
                    <div className="userr">
                        <input
                            type="text"
                            className="form__input"
                            placeholder=" "
                            style={{ borderColor: color }}
                            name="Tên đăng nhập"
                            onChange={(e) => setEmailUser(e.target.value)}
                            onBlur={(e) => validateEmailCheck(e.target.value)}
                            required
                        />
                        <label htmlFor="text" className="form__label">
                            Email
                        </label>
                        <ErrorEmailCheck isHidden={EmailCheck} errorEmailCheck={errorEmailCheck} />
                    </div>


                    <button
                        className="form_login_btn"
                        onClick={onclickForgetPass}
                    >
                        Gửi xác nhận đến email
                    </button>
                </div>
            </div>

        </div>
    )
}
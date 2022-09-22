import React from "react";

import './Login.css'
import './Reponsive_login.css'

function Login() {
    return (
        <div className="main">
            <div className="main_small">
                <div className="main_small_logo">
                    <h3>LOGO</h3>
                </div>
                <div className="main_small_product">
                    <div className="main_small_product_card">

                        <div className="main_small_product_card_tittle">
                            <p>Đăng nhập</p>
                            <a href="/">Không có tài khoản ?</a>
                        </div>

                        <div className="main_small_product_card_input">
                            <label>Email</label>
                            <input type="text" />
                        </div>

                        <div className="main_small_product_card_input">
                            <label>Mật khẩu</label>
                            <input type="text" />
                        </div>

                        <div className="main_small_product_card_checkbox">
                            <input
                                type="checkbox"
                                defaultChecked={false}
                            />
                            <label>Lưu mật khẩu</label>
                            <a href="/">Quên mật khẩu ?</a>
                        </div>

                        <button className="main_small_product_card_button">Đăng nhập</button>

                        <p className="main_small_product_card_p">Đăng nhập với</p>

                        <div className="main_small_product_card_link">
                            <button>google</button>
                            <button className="main_small_product_card_link_buttoncenter">twiter</button>
                            <button>facebook</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="main_intimate">
                <a href="/">Về chúng tôi</a>
                <p>|</p>
                <a href="/">Các điều khoản và điều kiện</a>
                <p>|</p>
                <a href="/">Chính sách bảo mật</a>
                <p>|</p>
                <a href="/">Trung tâm trợ giúp</a>
            </div>
        </div>
    )
}

export default Login;
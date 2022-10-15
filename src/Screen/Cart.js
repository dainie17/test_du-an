import { DeleteOutlineSharp, FavoriteBorderSharp, VerifiedUserSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/Cart.css'
import Footer from "./footer";

const image1 = "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";
const image2 = "https://cdn.tgdd.vn/Files/2019/11/18/1220010/4-cach-ve-sinh-ben-trong-chai-lo-cuc-sach-ban-nen-thu-21-760x367.jpg";
const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";

const Cart = () => {

    let navgate = useNavigate();

    const onclickItem =()=>{
        navgate("/Order");
    }

    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(data);
    }, []);

    const data = [
        {
            name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc Dao cắt dầu Đầu kéo tông đơ",
            Loai: "B",
            Ship: "CN",
            price: "368.374",
            image: image1
        },
        {
            name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc",
            Loai: "B",
            Ship: "CN",
            price: "368.374",
            image: image2
        },
    ]

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = user.map((user) => {
                return { ...user, isChecked: checked };
            })
            setUser(tempUser);
        } else {
            let tempUser = user.map((user) => user.name === name ? { ...user, isChecked: checked } : user);
            setUser(tempUser);
        }

    }

    return (
        <div className="carrt">
            <div className="cart-header">
                <div className="cart_header_container">

                    <div className="cart_header_left">
                    <div className="cart-header-logo">
                    <p>LOGO</p>
                </div>
                <div className="cart-header-test">
                    <VerifiedUserSharp />
                    <p>Kiểm tra an toàn</p>
                </div>
                    </div>

                <div className="cart-header-stage">
                    <div className="cart-header-stage-wrapper">
                        <div className="cart-header-stage-wrapper-container">
                            <ul>
                                <li className="cart-header-stage-wrapper-container-step1">
                                    <div className="cart-header-stage-wrapper-container-step-inner" style={{color: "rgb(72, 72, 72)"}}>Giỏ hàng</div>
                                </li>

                                <li className="cart-header-stage-wrapper-container-step2">
                                    <div className="cart-header-stage-wrapper-container-step-inner">Đặt hàng</div>
                                </li>

                                <li className="cart-header-stage-wrapper-container-step3">
                                    <div className="cart-header-stage-wrapper-container-step-inner">Thanh toán</div>
                                </li>

                                <li className="cart-header-stage-wrapper-container-step4">
                                    <div className="cart-header-stage-wrapper-container-step-inner">Hoàn thành</div>
                                </li>
                            </ul>
                            <div className="cart-header-stage-wrapper-container-line">
                                <div className="cart-header-stage-wrapper-container-line-process"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="cart-main">
                <div className="cart_container">
                <div className="cart-main-left">
                    <div className="cart-main-left-title">
                        <p className="cart-main-left-title-content">Giỏ hàng &#10088;1&#10089;</p>
                        <div className="cart-main-left-title-check">
                            <input
                                type="checkbox"
                                name="allSelect"
                                checked={user.filter(user => user?.isChecked !== true).length < 1}
                                onChange={handleChange} />
                            <p>Chọn tất cả</p>
                        </div>
                    </div>
                    <div className="cart-main-left-list">
                        {
                            user.map((item, index) => (
                                <div key={index} className="cart-main-left-list-card">
                                    <input
                                        className="cart-main-left-list-card-checkbox"
                                        type="checkbox"
                                        name={item.name}
                                        checked={item?.isChecked || false}
                                        onChange={handleChange} />
                                    <img className="cart-main-left-list-card-image" src={item.image} alt="" />
                                    <div className="cart-main-left-list-card-content">
                                        <p className="cart-main-left-list-card-content-name">{item.name}</p>
                                        <p className="cart-main-left-list-card-content-type">Loại:{item.Loai}/Ship từ:{item.Ship}</p>
                                        <p className="cart-main-left-list-card-content-price">{item.price}&#8363;</p>
                                        <p className="cart-main-left-list-card-content-cod">COD</p>
                                    </div>
                                    <div className="cart-main-left-list-card-function">
                                        <div className="cart-main-left-list-card-function-button">
                                            <button className="cart-main-left-list-card-function-button-reduce">-</button>
                                            <p className="cart-main-left-list-card-function-button-num">1</p>
                                            <button className="cart-main-left-list-card-function-button-more">+</button>
                                        </div>
                                        <div className="cart-main-left-list-card-function-icon">
                                            <FavoriteBorderSharp />
                                            <DeleteOutlineSharp />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="cart-main-right">
                    <p className="cart-main-right-title">Tóm tắt theo thứ tự</p>
                    <div className="cart-main-right-subtotal">
                        <p className="cart-main-right-subtotal-title">Tổng phụ</p>
                        <p className="cart-main-right-subtotal-content">6.883.034&#8363;</p>
                    </div>
                    <div className="cart-main-right-total">
                        <p className="cart-main-right-total-title">Tổng &#10088;1&#10089;</p>
                        <p className="cart-main-right-total-content">6.883.034&#8363;</p>
                    </div>
                    <button className="cart-main-right-button" onClick={onclickItem}>Thanh toán</button>
                </div>
                </div>
            </div>
            
<Footer/>
        </div>
    )
}

export default Cart;
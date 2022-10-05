import { DeleteOutlineSharp, FavoriteBorderSharp, VerifiedUserSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PinDropIcon from '@mui/icons-material/PinDrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        <div className="cart">
            <div className="cart-header">
                <div className="cart-header-logo">
                    <p>LOGO</p>
                </div>
                <div className="cart-header-test">
                    <VerifiedUserSharp />
                    <p>Kiểm tra an toàn</p>
                </div>
                <div className="cart-header-stage">
                    <div className="cart-header-stage-wrapper">
                        <div className="cart-header-stage-wrapper-container">
                            <ul>
                                <li className="cart-header-stage-wrapper-container-step1">
                                    <div className="cart-header-stage-wrapper-container-step-inner">Giỏ hàng</div>
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
            <div className="cart-main">
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
            
            <div className="footer">
                <div className="footer_container">
                    <img src={logo} />
                    <br />
                    <input></input>
                    <br />
                    <div className="footer_container--page" >
                        <div className="footer_container--page--page">
                            <h3>FANPAGE</h3>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" ></iframe>
                        </div>
                        <div className="footer_container--page--company" >
                            <h3> Công ty TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</h3>
                            <p><PinDropIcon sx={{marginRight:'2%'}}/> 840/20B Hương Lộ 2, Phường Bình Trị Đông A,
                                Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
                            <p><CallIcon sx={{marginRight:'2%'}}/>(84+) 706 185 986</p>
                            <p><EmailIcon sx={{marginRight:'2%'}}/>vagabonds.2hand@gmail.comt</p>
                            <div className="netword">
                                <FacebookIcon sx={{color:'#fff', float:'left',marginTop:'5%'}}/>
                                <YouTubeIcon sx={{color:'#fff', float:'left',margin:'5%'}}/>
                                <InstagramIcon sx={{color:'#fff', float:'left',marginTop:'5%'}}/>
                            </div>
                        </div>
                        <div className="footer_container--page--we" >
                            <h3>Về chúng tôi</h3><br></br>
                            <p>Giới thiệu</p>
                            <p>Sản phẩm</p>
                            <p>Ưu đãi</p>
                            <p>Liên hệ</p>
                        </div>
                        <div className="footer_container--page--policy" >
                            <h3>Chính sách</h3><br />
                            <p>Chính sách bảo mật</p>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách bảo hành </p>
                            <p>Chính sách giao hàng</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
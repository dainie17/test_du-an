import React, { Component } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/News1.css'
import '../item/ItemNavigate'
import ItemNavi from "../item/ItemNavi"
import Footer from "./footer";



const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";



function News1(props) {
    let location = useLocation();
    let { id } = useParams();
    const data = location.state;
    console.log(data);
    return (
        <div>
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
                            <NavLink className="home-header_ul_li_navlink" to="/testHome">
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
                            <div className="home-header_icon_user_img"
                            >
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
            <div className="news" style={{ marginTop: "70px" }}>

                <div className="news_table">
                    <div className="title_header">
                        <h2>Tin tức & Ưu đãi</h2>
                    </div>
                    <div className="news_table_text">
                        <div className="news_table_left">
                            {/* <h2>{uudai.name}</h2> */}
                            <h1>{data.name} </h1>
                            <img src={data.image}></img>
                            <p className="news_table_left_p">Lời đầu tiên, PAVICO xin chân thành cảm ơn Quý khách hàng và toàn thể CBCNV đã đồng hành với công ty trong suốt 1 năm vừa qua. Năm 2021 quả thực là một năm đáng nhớ đối với tất cả chúng ta. Khi đại dịch Covid đã khiến mọi hoạt động sản xuất bị đảo lộn. Nhưng hơn hết, với sự cố gắng và quyết tâm chiến thắng đại dịch, PAVICO đã và đang nỗ lực khắc phục các khó khăn, đồng hành cùng Quý khách hàng vượt qua khoảng thời gian thử thách này. Để rồi chúng ta cùng đón nhận những thành quả tốt đẹp trong năm vừa qua và hướng tới những mục tiêu lớn trong năm 2022 sắp tới.</p>
                            {data.container.map((container, index) =>
                            <div key={index} className="news_table_left__content">
                                <h2>{container.title}</h2>
                                <p> {container.content} </p>
                                <p>Tính đến thời điểm hiện tại, PAVICO đã và đang trở thành đối tác chiến lược thương mại quan trọng của nhiều doanh nghiệp. Không chỉ hướng tới thị trường trong nước, trong năm 2021, công ty đã xuất khẩu thành công các sản phẩm bao bì sang thị trường quốc tế như: Nhật Bản, Hàn Quốc, Trung Quốc và Mỹ. Với tổng sản lượng hàng hóa vượt qua mục tiêu đề ra trong năm 2021. Điều đó chứng tỏ được sự nỗ lực và cố gắng không ngừng nghỉ của toàn thể Cán bộ CNV công ty. </p>
                                <p>Mặc dù đại dịch Covid đã ảnh hưởng đến hoạt động sản xuất của công ty vào nửa đầu năm 2021, nó khiến các hoạt động sản xuất bị trì hoãn. Nhưng với sự cố gắng và tinh thần đoàn kết, PAVICO vẫn luôn đảm bảo tốt nguồn cung ổn định cho tất cả các đối tác trong nước và quốc tế.</p>
                            </div>
                            )}

                            
                        </div>
                        <div className="policy_right">
                        <div className="policy_right_list">
                            <h3>Tin tức mới nhất</h3>
                            <div>
                                {ItemNavi.map((uudai, index) =>
                                    <div key={index} className="policy_list" >
                                        <img src={uudai.image} />

                                        <h2>{uudai.name}</h2>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="policy_right_facebook">
                            <h3>Facebook</h3>
                            <div className="policy_right_facebook_iframe">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="331" ></iframe>
                            </div>
                        </div>
                        <div className="policy_right_facebook">
                            <h3>Youtobe</h3>
                            <div className="policy_right_facebook_iframe">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Vueib12RkKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default News1;
import React, { Component } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/News.css'

import ItemNavi from "../item/ItemNavi"
import Footer from "./footer";

import logo from "../assets/logo_cty.png";




function News1(props) {
    let location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
            <nav className="home-header">
                <div className="header_container">
                    <div className="home-header_logo">
                        <img className="home-header-logo-image" src={logo} alt="" />
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
                            <h1>{data.title} </h1>
                            <img src={data.image}></img>
                            <p className="news_table_left_p">{data.synopsis}</p>
                            {data.container.map((container, index) =>
                                <div key={index} className="news_table_left__content">
                                    <h2>{container.name}</h2>
                                    {container.content.map((content, index) =>
                                        <p key={index}>{content.contentnew}</p>
                                    )}


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

                                            <h2>{uudai.title}</h2>

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
            {/* <Footer /> */}
        </div>
    )
}


export default News1;
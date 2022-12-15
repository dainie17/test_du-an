import React, { Component } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/News.css'
import Navbar from "./Navbar";
import ItemNavi from "../item/ItemNavi"
import Footer from "./footer";

import logo from "../assets/logo_cty.png";
import NavbarIn from "./NavbarIn";



function News1(props) {
    let location = useLocation();
    const data = location.state;

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
    return (
        <div>
            {chxNab ? <NavbarIn /> : <Navbar />}
            <div className="news" style={{ marginTop: "70px" }}>

                <div className="news_table">
                    <div className="title_header">
                        <h2>Tin tức & Ưu đãi</h2>
                    </div>
                    <div className="news_table_text">
                        <div className="news_table_left">
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
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}


export default News1;
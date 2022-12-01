import React, { Component } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/News.css'
import Navbar from "./Navbar";
import ItemNavi from "../item/ItemNavi"
import Footer from "./footer";

import logo from "../assets/logo_cty.png";




function News1(props) {
    let location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
          <Navbar/>
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
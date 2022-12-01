import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Grid from "@mui/material/Unstable_Grid2";
import '../css/Navigate.css'
import ItemNavi from '../item/ItemNavi'
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTopbtn";
import Navbar from "./Navbar";

const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
function Navigate() {


  let navgate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, []);

  return (
    <div className="home">
      <ScrollToTop />
      {
        loading ? <div className='loading'>
          <BeatLoader
            color={'#36d7b7'}
            loading={loading}
            size={15}
            margin={5}
            speedMultiplier={1}
          /></div>
          :
          <div>
  
            <Navbar/>
            <div className="title">
              <div className="title_header">
                <h2>Tin tức & Ưu đãi</h2>
              </div>
              <div className="title_list">
                <Grid container spacing={0} className="title_list_view">
                  {ItemNavi.map((uudai, index) =>
                    <div key={index} className="title_list_cottom">
                      <img src={uudai.image} />
                      <div className="title_list_cottom--content">
                        <h2>{uudai.title}</h2>
                        <p>{uudai.synopsis.substring(0, 230) + " [...]"}</p>


                        <Link className="title_list_cottom_button" to={{ pathname: `/ItemNews/${uudai.id} ` }} state={uudai}  >Đọc Thêm</Link>

                      </div>
                    </div>

                  )}
                </Grid>

              </div>
            </div>
            <div className="hashtag">
              <div className="hashtag_header">

                <div className="hashtag_header--list">
                  <p>HAGHTAG #VAGABONSHOP ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN TRANG CỦA CHÚNG TÔI</p>
                  <div className="hashtag_header--list--img">
                    <img src='https://i.9mobi.vn/cf/images/sa/2019/10/24/hinh-anh-nguoi-dep-cho-dien-thoai-9.jpg'></img>
                    <img src='https://bigdata-vn.com/wp-content/uploads/2022/01/1641168792_297_Tong-hop-hinh-nen-gai-xinh-cuc-dep.jpg'></img>
                    <img src='https://ss-images.saostar.vn/wp700/pc/1657511752254/saostar-gytty8hxodobknq0.jpg'></img>
                    <img src='https://anhdep123.com/wp-content/uploads/2021/03/Tong-hop-nhung-hinh-anh-sieu-mau-nam-dep-2.jpg'></img>
                    <img src='https://images.pexels.com/photos/9719017/pexels-photo-9719017.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
                    <img src='https://upanh123.com/wp-content/uploads/2019/01/hinh-nen-gai-xinh-trung-quoc-1-640x937.jpg'></img>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
      }
    </div>
  )
}

export default Navigate;
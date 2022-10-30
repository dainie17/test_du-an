import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Grid from "@mui/material/Unstable_Grid2";
import '../css/Navigate.css'
import { Girl } from "@mui/icons-material";
import Item from '../item/ItemNavigate'

const logo = "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";
function Navigate() {
  const uudai = [
    {
      id: 1,
      image: image5,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    },
    {
      id: 1,
      image: image5,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    },
    {
      id: 1,
      image: image5,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    },
    {
      id: 1,
      image: image5,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    }
  ]

  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  }
  return (
    <div className="home">
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
                onClick={onclickItem}>
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

      <div className="title">
        <div className="title_header">
          <h2>Tin tức & Ưu đãi</h2>
        </div>
        <div className="title_list">
          <Grid container spacing={0} className="title_list_view">
            <Item />
          </Grid>

        </div>
      </div>
      <div className="hashtag">
        <div className="hashtag_header">

          <div className="hashtag_header--list">
            <p>HAGHTAG #VAGABONSHOP ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN TRANG CỦA CHÚNG TÔI</p>
            <div className="hashtag_header--list--img">
              <img src={image5}></img>
              <img src={image5}></img>
              <img src={image5}></img>
              <img src={image5}></img>
              <img src={image5}></img>
              <img src={image5}></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Navigate;
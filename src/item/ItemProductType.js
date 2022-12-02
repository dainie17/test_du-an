import { useNavigate } from "react-router-dom";
import ItemProduct from "../item/ItemProduct";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const image1 =
  "https://www.chainhuagiare.com/wp-content/uploads/2019/11/94035916_631689647561933_5821421376195526656_n.jpg";

const image2 =
  "https://salubvietnam.com/wp-content/uploads/2022/07/chai-nhua-dung-dau-goi-sua-tam-dgst005.png";

const image3 =
  "http://nhuathanhdanh.com/vnt_upload/weblink/banner_2.jpg";

  const image4 =
  "https://cf.shopee.vn/file/074c82cfc1cc79f80974ca044322d44b";

  const image5 =
  "https://cf.shopee.vn/file/9d5ba115723905cbcb6c1cb2e7d477f1";

  const image6 =
  "https://ae01.alicdn.com/kf/HTB16VaeXqmWBuNkHFJHq6yatVXaG.jpg";

  const image7 =
  "https://thuytinhmiso.com/wp-content/uploads/2021/08/chai-nhua-pet-my-pham-300x300.jpg";

  const image8 =
  "https://thegioichainhua.com.vn/wp-content/uploads/2020/02/chai-nhua-pet-100ml-4.jpg";


function ItemProductType(props) {

  const ip = "http://localhost:8080"

  const [dsLoaiSP, setDsLoaiSP] = useState([])


  const getDataSPTheoLoai = () => {
    axios.get(ip + `/getData/${props.NameLoaiSP}`)
      .then((response) => {
        setDsLoaiSP(response.data);
      })
  }

  useEffect(()=>{
    getDataSPTheoLoai()
  },[])

  return (
    <>
      <div className="product_container">
        <div className="product-main-list-title">
          <p>{props.NameLoaiSP}</p>
        </div>
        <div className="product-main-list-content">
          {dsLoaiSP.map((vl, index) => (
            <ItemProduct
              key={vl._id}
              _id={vl._id}
              idImg = {vl.idImg}
              NameSP={vl.NameSP}
              GiaBanSP={vl.GiaBanSP}
              SoLuongSP={vl.SoLuongSP}
              SaleSP={vl.SaleSP}
              TrangThaiSP={vl.TrangThaiSP}
              LoaiSP={vl.LoaiSP}
              ChiTietSP = {vl.ChiTietSP}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemProductType;

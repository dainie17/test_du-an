import { useNavigate } from "react-router-dom";
import ItemProduct from "../item/ItemProduct";

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
  const dataProduct = [
    {
      id: 0,
      image: image1,
      name: "Lọ đựng mĩ phẩm",
      price: "100.000",
      number: 30,
    },
    {
      id: 1,
      image: image2,
      name: "Tên sản phẩm 2",
      price: "305.000",
      number: 30,
    },
    {
      id: 2,
      image: image3,
      name: "Tên sản phẩm 3",
      price: "305.000",
      number: 30,
    },
    {
      id: 3,
      image: image4,
      name: "Tên sản phẩm 4",
      price: "305.000",
      number: 30,
    },
    {
      id: 4,
      image: image5,
      name: "Tên sản phẩm 5",
      price: "305.000",
      number: 30,
    },
    {
      id: 5,
      image: image6,
      name: "Tên sản phẩm 6",
      price: "305.000",
      number: 30,
    },
    {
      id: 6,
      image: image7,
      name: "Tên sản phẩm 7",
      price: "305.000",
      number: 30,
    },
    {
      id: 7,
      image: image8,
      name: "Tên sản phẩm 8",
      price: "305.000",
      number: 30,
    },
  ];

  return (
    <>
      <div className="product_container">
        <div className="product-main-list-title">
          <p>{props.nameType}</p>
        </div>
        <div className="product-main-list-content">
          {dataProduct.map((item, index) => (
            <ItemProduct
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              number={item.number}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemProductType;

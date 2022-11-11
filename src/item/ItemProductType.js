import { useNavigate } from "react-router-dom";
import ItemProduct from "../item/ItemProduct";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";

function ItemProductType(props) {

    const dataProduct = [
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
          price: "305.000",
          number: 30,
        },
        {
          image: image1,
          name: "Tên sản phẩm",
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

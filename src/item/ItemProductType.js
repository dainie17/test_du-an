import { useNavigate } from "react-router-dom";
import ItemProduct from "../item/ItemProduct";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";

function ItemProductType(props) {

    const dataProduct = [
        { id: 0,
          image: image1,
          name: "Tên sản phẩm 1",
          price: "305.000",
          number: 30,
        },
        {
          id: 1,
          image: image1,
          name: "Tên sản phẩm 2",
          price: "305.000",
          number: 30,
        },
        {
          id: 2,
          image: image1,
          name: "Tên sản phẩm 3",
          price: "305.000",
          number: 30,
        },
        {
          id: 3,
          image: image1,
          name: "Tên sản phẩm 4",
          price: "305.000",
          number: 30,
        },
        {
          id: 4,
          image: image1,
          name: "Tên sản phẩm 5",
          price: "305.000",
          number: 30,
        },
        {
          id: 5,
          image: image1,
          name: "Tên sản phẩm 6",
          price: "305.000",
          number: 30,
        },
        {
          id: 6,
          image: image1,
          name: "Tên sản phẩm 7",
          price: "305.000",
          number: 30,
        },
        {
          id: 7,
          image: image1,
          name: "Tên sản phẩm 8",
          price: "305.000",
          number: 30,
        },
        {
          id: 8,
          image: image1,
          name: "Tên sản phẩm 9",
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

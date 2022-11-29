import { useNavigate } from "react-router-dom";
import {
  DeleteOutlineSharp,
  FavoriteBorderSharp,
  VerifiedUserSharp,
} from "@mui/icons-material";
import { useEffect } from "react";



function ItemCart(props) {

  let remove = [];
  const onclickRemove = (id) => {
    let storage = localStorage.getItem("cart");
    if (storage) {
      remove = JSON.parse(storage);
    }
      remove = remove.filter((remove) => remove.id != id);
      localStorage.setItem("cart", JSON.stringify(remove));
    props.getCart();
  };

  let reduce = [];
  const onclickReduce = (id) => {
    let storage = localStorage.getItem("cart");
    if (storage) {
      reduce = JSON.parse(storage);
    }

    let item = reduce.find((c) => c.id === id);

    if (item.num > 1) {
      item.num -= 1;
      localStorage.setItem("cart", JSON.stringify(reduce));
    } else if ((item.num = 1)) {
      reduce = reduce.filter((remove) => remove.id != id);
      localStorage.setItem("cart", JSON.stringify(reduce));
    }
    props.getCart();
  };

  let addNum = [];
  const addNumToCart = async (id) => {
    let storage = localStorage.getItem("cart");
    if (storage) {
      addNum = JSON.parse(storage);
    }

    let item = addNum.find((c) => c.id === id);

    if (item) {
      item.num += 1;
    }
    localStorage.setItem("cart", JSON.stringify(addNum));
    props.getCart();
  };

  const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";

  return (
    <>
      <div key={props.index} className="cart-main-left-list-card">
        <input
          className="cart-main-left-list-card-checkbox"
          type="checkbox"
          name={props.name}
          
        />
        <img className="cart-main-left-list-card-image" src={image1} alt="" />
        <div className="cart-main-left-list-card-content">
          <p className="cart-main-left-list-card-content-name">{props.name}</p>
          <p className="cart-main-left-list-card-content-type">
            Loại:/Ship từ:
          </p>
          <p className="cart-main-left-list-card-content-price">
            {props.price}&#8363;
          </p>
          <p className="cart-main-left-list-card-content-cod">COD</p>
        </div>
        <div className="cart-main-left-list-card-function">
          <div className="cart-main-left-list-card-function-button">
            <button
              onClick={() => {
                onclickReduce(props.id);
              }}
              className="cart-main-left-list-card-function-button-reduce"
            >
              -
            </button>
            <div className="cart-main-left-list-card-function-button-num">
              <p>{props.num}</p>
            </div>
            <button
              onClick={() => {
                addNumToCart(props.id);
              }}
              className="cart-main-left-list-card-function-button-more"
            >
              +
            </button>
          </div>
          <div className="cart-main-left-list-card-function-icon">
            <FavoriteBorderSharp style={{ fontSize: "20px" }} />
            <DeleteOutlineSharp
              onClick={() => {
                onclickRemove(props.id);
              }}
              style={{ fontSize: "20px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;

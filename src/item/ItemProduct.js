import { useNavigate } from "react-router-dom";
function ItemProduct(props) {
    let navga = useNavigate();
    const onClick = () => {
        navga(`/Detail/${props.id}/${props.name}/${props.price}/${props.number}`);
      };
  return (
    <>
      <div
        onClick={onClick}
        key={props.index}
        className="product-main-list-content-card"
      >
        <div className="reduce">
          <div className="reduce_background">
            <div className="reduce_content">
              <p>20%</p>
            </div>
          </div>
        </div>
        <img
          src={props.image}
          alt=""
          className="product-main-list-content-card-img"
        />
        <div className="content_card">
          <p className="product-main-list-content-card-name">{props.name}</p>
          <div className="product_price">
            <p className="product-main-list-content-card-price">
              {props.price} Đ
            </p>
            <p className="price_reduced">{props.price} Đ</p>
          </div>
          <p className="product-main-list-content-card-number">
            Số lượng: {props.number}
          </p>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;

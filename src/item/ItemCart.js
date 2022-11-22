import { useNavigate } from "react-router-dom";
function ItemCart(props) {
    let navga = useNavigate();
    const onClick = () => {
        navga(`/Detail`);
      };
  return (
    <>
            <div className="cart-main-left-title">
              <p className="cart-main-left-title-content">
                Giỏ hàng &#10088;1&#10089;
              </p>
              <div className="cart-main-left-title-check">
                <input
                  type="checkbox"
                  name="allSelect"
                  checked={
                    cart.filter((cart) => cart?.isChecked !== true).length < 1
                  }
                  onChange={handleChange}
                />
                <p>Chọn tất cả</p>
              </div>
            </div>
            <div className="cart-main-left-list">
              {cart.map((item, index) => (
                <div key={index} className="cart-main-left-list-card">
                  <input
                    className="cart-main-left-list-card-checkbox"
                    type="checkbox"
                    name={item.name}
                    checked={item?.isChecked || false}
                    onChange={handleChange}
                  />
                  <img
                    className="cart-main-left-list-card-image"
                    src={image1}
                    alt=""
                  />
                  <div className="cart-main-left-list-card-content">
                    <p className="cart-main-left-list-card-content-name">
                      {item.name}
                    </p>
                    <p className="cart-main-left-list-card-content-type">
                      Loại:{item.Loai}/Ship từ:{item.Ship}
                    </p>
                    <p className="cart-main-left-list-card-content-price">
                      {item.price}&#8363;
                    </p>
                    <p className="cart-main-left-list-card-content-cod">COD</p>
                  </div>
                  <div className="cart-main-left-list-card-function">
                    <div className="cart-main-left-list-card-function-button">
                      <button
                        onClick={() => {
                          onclickReduce(item.id);
                        }}
                        className="cart-main-left-list-card-function-button-reduce"
                      >
                        -
                      </button>
                      <div className="cart-main-left-list-card-function-button-num">
                        <p>{item.num}</p>
                      </div>
                      <button
                        onClick={() => {
                          addNumToCart(item.id);
                        }}
                        className="cart-main-left-list-card-function-button-more"
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-main-left-list-card-function-icon">
                      <FavoriteBorderSharp style={{fontSize: "20px"}} />
                      <DeleteOutlineSharp onClick={() => {
                        onclickRemove(item.id)
                      }} style={{fontSize: "20px"}}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    </>
  );
}

export default ItemCart;
import axios from "axios";

export default function ItemChiTietDH(props) {
  const ip = "http://localhost:8080";

  let TongTienSP = new Intl.NumberFormat("it-IT").format(props.GiaCX);

  return (
    <div className="frames_ChiTiet_DH">
      {/* <div>
          {vl.Image.map((file, index) => {
            console.log(file);
            return (
              <img
                src={ip + `/${file[0].filePath}`}
                width="50"
                height="100"
              />
            );
          })}
        </div>
        <div>{vl.NameSP}</div>
        <div>{vl.GiaCX} VND</div>
        <div>Số lượng: {vl.SoLuongSP}</div> */}
      <div className="img_ChiTiet_DH">
        <div>
          {props.Image.map((file, index) => {
            // console.log("chi tiết tt: " + file);
            return (
              <img
                src={ip + `/${file[0].filePath}`}
                width="90"
                height="130"
                style={{ borderRadius: "6px" }}
              />
            );
          })}
        </div>
      </div>
      {/* --------------- tên  ----------------- */}
      <div className="name_ChiTiet_DH">{props.NameSP}</div>
      {/* --------------- GiaCX ----------------- */}
      {/* --------------- Soluong ----------------- */}
      <div className="soluong_ChiTiet_DH"> Số lượng: {props.SoLuongSP}</div>
      {/* --------------- Tong tien SP ----------------- */}
      <div className="tongTien_ChiTiet_DH">Giá: {TongTienSP} VND</div>
    </div>
  );
}

import { useEffect, useState } from "react";
import ChiTietDonHang from "./ChiTietDonHang";
import Moment from "moment";
import axios from "axios";

export default function ItemDonHang(props) {
  const ip = "http://localhost:8080";

  const [disPlay, setDisPlay] = useState("block");
  useEffect(() => {
    if (props.TrangThaiDH == "Chờ xác nhận") {
      setDisPlay("block");
    } else if (props.TrangThaiDH == "Đã xác nhận") {
      setDisPlay("block");
    } else {
      setDisPlay("none");
    }
  });

  // dialog chi tiet
  const [openCT, setOpenCT] = useState(false);
  const handleClickItemChiTiet = () => {
    setOpenCT(true);
  };

  // delete Don hang
  //           axios.delete(ip + `/DeleteDonHang/${_id}`);

  const deleteDH = () => {
    axios.delete(ip + `/DeleteDonHang/${props._id}`);
    props.setChxDelete(true);
  };

  const formatDate = Moment(props.DateDH).format("DD/MM/yyyy");

  let GiaCX = new Intl.NumberFormat("it-IT").format(props.SumMoney);

  return (
    <>
      <ChiTietDonHang open={openCT} setOpen={setOpenCT} DsSP={props.DsSP} />
      <div className="card_itemDH">
        <div className="itemDH_ID">
          <p>{props._id}</p>
        </div>
        <p className="itemDH_TrangThai">{props.TrangThaiDH}</p>

        <div className="itemDH_ThanhTien">
          <p>{GiaCX} VND</p>
        </div>

        <div className="itemDH_Date">
          <p>{formatDate}</p>
        </div>
        <div className="itemDH_bth">
          <button onClick={handleClickItemChiTiet} className="btn_XemSP">
            Xem sản phẩm
          </button>
          <button
            onClick={deleteDH}
            style={{ display: disPlay }}
            className="btn_HuyDH"
          >
            Hủy đơn hàng
          </button>
        </div>
      </div>
    </>
  );
}

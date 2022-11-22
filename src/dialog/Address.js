import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@mui/material";
import "../css/Address.css";

export default function Address(props) {
  const [color2, setColor2] = useState("#d8dde1");
  const handleClose = () => {
    props.setOpen(false);
  };    

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddres] = useState("");

  const addToAddress = async () =>{
    var addre = {
        name: name,
        phone: phone,
        email: email,
        addres: addres
    };
    localStorage.setItem('address', JSON.stringify(addre));
    console.log(addre);
  }

  const getAddress =  () => {
    var storage = localStorage.getItem("address");
    var address = JSON.parse(storage);
    if(storage != null){
      setName(address.name);
      setPhone(address.phone);
      setEmail(address.email);
      setAddres(address.addres)
    }else{

    }

};

useEffect(() => {
  getAddress();
},);

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
    >

        <DialogContent>
          <div className="address_title">
            <p>Nhập địa chỉ giao hàng</p>
          </div>

          <div className="address_top">
            <div className="user_add">
              <input
                type="text"
                className="form__input"
                style={{ borderColor: color2 }}
                placeholder=" "
                name="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                //   onBlur={(e) => validateTK(e.target.value)}
                required
              />
              <label htmlFor="text" className="form__label">
                Họ và tên
              </label>
              {/* <ErrorTK isHidden={TKCheck} errorTK={errorTK} /> */}
            </div>

            <div className="user_add">
              <input
                type="text"
                className="form__input"
                style={{ borderColor: color2 }}
                placeholder=" "
                name="Số điện thoại"
                value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                //   onBlur={(e) => validateTK(e.target.value)}
                required
              />
              <label htmlFor="text" className="form__label">
                Số điện thoại
              </label>
              {/* <ErrorTK isHidden={TKCheck} errorTK={errorTK} /> */}
            </div>
          </div>

          <div className="user_addres">
            <input
              type="text"
              className="form__input"
              style={{ borderColor: color2 }}
              placeholder=" "
              name="Email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              //   onBlur={(e) => validateTK(e.target.value)}
              required
            />
            <label htmlFor="text" className="form__label">
              Email
            </label>
            {/* <ErrorTK isHidden={TKCheck} errorTK={errorTK} /> */}
          </div>

          <div className="user_addres">
            <input
              type="text"
              className="form__input"
              style={{ borderColor: color2 }}
              placeholder=" "
              name="địa chỉ"
              value={addres}
                onChange={(e) => setAddres(e.target.value)}
              //   onBlur={(e) => validateTK(e.target.value)}
              required
            />
            <label htmlFor="text" className="form__label">
              Tỉnh / Thành phố, Quận / Huyện, Phường / Xã
            </label>
            {/* <ErrorTK isHidden={TKCheck} errorTK={errorTK} /> */}
          </div>
        </DialogContent>
        <DialogActions className="btn-dialog">
          <Button
            variant="outlined"
            className="btn_add_cancel"
            onClick={handleClose}
          >
            Hủy
          </Button>
          <Button onClick={addToAddress} variant="outlined" className="btn_add_cancel" color="primary">
            Sửa
          </Button>
        </DialogActions>

    </Dialog>
  );
}

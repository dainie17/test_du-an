import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@mui/material";
import ItemChiTietDH from "./ItemChiTietDH";

export default function ChiTietDonHang(props) {
  const ip = "http://localhost:8080";

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="md"
    >
      <DialogContent>
        {props.DsSP.map((vl, index) => {
          return (
            <ItemChiTietDH
              key={index}
              _id={vl._id}
              Image={vl.Image}
              NameSP={vl.NameSP}
              GiaCX={vl.GiaCX}
              SoLuongSP={vl.SoLuongSP}
            />
          );
        })}
      </DialogContent>
      <DialogActions className="btn_xemThem_DH">
        <Button
          style={{
            fontSize: "13px",
          }}
          variant="outlined"
          className="btn_add_cancel_DH"
          onClick={handleClose}
        >
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
}

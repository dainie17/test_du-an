
// material
import {
  Checkbox,
  TableRow,
  TableCell,
  Typography,

} from '@mui/material';

import axios from "axios";
import ItemImgCart from './ItemImgCart';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


export default function ItemCart(props) {

  const ip = "http://localhost:8080"

  let navga = useNavigate();


  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    props.setSelected(newSelected);
  };

  let selected = props.selected

  let GiaCX = new Intl.NumberFormat('it-IT').format(props.GiaCX);



  const onClick = () => {

    var getDsSP = localStorage.getItem("DanhSachSP")
    var dbDsSP = JSON.parse(getDsSP)


    if (getDsSP == null) {
    }
    if (getDsSP != null) {
      let item = dbDsSP.find(c => c.idImg == props.idImg);
      if (item) {
        navga(`/Detail/${props._id}`);
        var ItemSP = {
          test: props.Image,
          _id: props._id,
          idImg: props.idImg,
          NameSP: props.NameSP,
          GiaCX: GiaCX,
          GiaBanSP: props.GiaBanSP,
          SoLuongSP: item.SoLuongSP,
          SaleSP: props.SaleSP,
          TrangThaiSP: props.TrangThaiSP,
          LoaiSP: props.LoaiSP,
          ChiTietSP: props.ChiTietSP,
        }
        localStorage.setItem('ItemSP', JSON.stringify(ItemSP));
      }
    }



  };
  let TongMoney = props.GiaCX * props.SoLuongSP

  return (

    <TableRow
      hover
      key={props._id}
      tabIndex={-1}
      role="checkbox"
      selected={props.isItemSelected}
      aria-checked={props.isItemSelected}
    >

      <TableCell padding="checkbox">
        <Checkbox checked={props.isItemSelected} onChange={(event) => handleClick(event, props._id)} />
      </TableCell>

      <TableCell className='image_sp' component="th" scope="row">
        <Typography>
          {props.Image.map((element, index) => {
            return (
              <ItemImgCart
                key={index}
                files={element}

              />
            )
          }
          )}
        </Typography>
      </TableCell>

      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          {props.NameSP}
        </Typography>
      </TableCell>

      <TableCell className='moTa_LSP' >
        <Typography align='left' variant="subtitle2" >
          {TongMoney}
        </Typography>
      </TableCell>

      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          {props.GiaBanSP}
        </Typography>
      </TableCell>

      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          {props.SaleSP}
        </Typography>
      </TableCell>
      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          {props.SoLuongSP}
        </Typography>
      </TableCell>
      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          <button onClick={onClick}>xem chi tiet</button>
        </Typography>
      </TableCell>
    </TableRow>

  )
}
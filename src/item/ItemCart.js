
import { useEffect, useState } from 'react';


// material
import {
  Checkbox,
  TableRow,
  TableCell,
  Typography,

} from '@mui/material';
// avatar
import Avatar from '@mui/material/Avatar';
// components


import axios from "axios";


export default function ItemCart(props) {

  const ip = "http://localhost:8080"



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
        <Avatar sx={{ minWidth: 100, minHeight: 130 }} variant="square">
          {/* <img className='img' src={ip + '/uploads/' + props.ImageLoaiSP} alt="login" width={'100%'} /> */}
        </Avatar>
      </TableCell>

      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          {props.NameSP}
        </Typography>
      </TableCell>

      <TableCell className='moTa_LSP' >
        <Typography align='left' variant="subtitle2" >
          {props.LoaiSP}
        </Typography>
      </TableCell>

      <TableCell className='name_sp' component="th" scope="row"  >
        <Typography align='left' variant="subtitle2"  >
          {props.GiaCX}
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
          {props.TrangThaiSP}
        </Typography>
      </TableCell>


      {/* ---------------------------------------------- */}
      {/* <TableCell align="right">
                <LoaiSPMoreMenu
                    key={props._id}
                    _id={props._id}
                    ImageLoaiSP={props.ImageLoaiSP}
                    NameLoaiSP={props.NameLoaiSP}
                    MotaLoaiSP={props.MotaLoaiSP}
                    TrangThaiLoaiSP={props.TrangThaiLoaiSP}
                    danhsachSP={props.danhsachSP}
                    setdanhsachSP={props.setdanhsachSP}

                />
            </TableCell> */}
    </TableRow>


  )
}
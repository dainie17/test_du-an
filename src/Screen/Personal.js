import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import "../css/Personal.css";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "react-scroll-to-top";
import Peson from "./Peson";
import Error from "./Error"

const img =
  "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

// online
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function openForm() {
  document.getElementById("openForm_pass").style.display = "block";
}

function Personal() {
  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, []);

  const data = [
    {
      name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc Dao cắt dầu Đầu kéo tông đơ",
      Loai: "B",
      Ship: "CN",
      price: "368.374",
      image: img,
    },
    {
      name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc",
      Loai: "B",
      Ship: "CN",
      price: "368.374",
      image: img,
    },
  ];

  let navgate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [chxNab, setChxNab] = useState(false);
  useEffect(()=>{
    var getUser = localStorage.getItem("UserUser")
    var data = JSON.parse(getUser)
    
    if (getUser == null) {
    }
  
    if(getUser != null){
      setChxNab(true)
    }
  },)

  return (
    <div className="fersonal">
      <ScrollToTop smooth></ScrollToTop>
      {loading ? (
        <div className="loading">
          <BeatLoader
            color={"#36d7b7"}
            loading={loading}
            size={15}
            margin={5}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <>
        {chxNab ? (<Peson/>) : (<Error/>)}
        </>
      )}
    </div>
  );
}

export default Personal;

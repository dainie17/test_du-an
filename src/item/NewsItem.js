import React, { useState } from "react";
import { useParams } from "react-router";
import Item from './ItemNavigate'
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";





function NewsItem() {
    const {id} = useParams();
    const[data, dataState] = useState();
    
    return (
        <>

            <p>{id}</p>
        </>

    )

}

export default NewsItem;
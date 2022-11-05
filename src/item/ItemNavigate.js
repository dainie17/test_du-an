import React, { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import NewsItem from "./NewsItem";
import News1 from "../Screen/News1";
import ItemNavi from "./ItemNavi"




function ItemNavigate() {
    
    console.log(ItemNavi)
    return (
        <>
            {ItemNavi.map((uudai, index) =>
                <div key={index}  className="title_list_cottom">
                <img src={uudai.image} />
                <div className="title_list_cottom--content">
                    <h2>{uudai.name}</h2>
                    <p>{uudai.mota.substring(0, 230) + " [...]"}</p>
                    
                        
                        <Link to={{pathname:`/ItemNews/${uudai.id}`, state:uudai}}>docthem</Link>
                </div>
            </div>
            )}
            
        </>

    )

}
// function Modal() {
    
//     let uudai = uudai[parseInt(id, 25)];
    
//     if (!uudai) return  <div> Image not found</div>;
//     return (
//       <div     >
          

//       </div>
//     );
//   }
export default ItemNavigate;
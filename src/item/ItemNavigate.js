import React, { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import NewsItem from "./NewsItem";
const image5 = "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";




function ItemNavigate() {
    const [uudai, setUudai] =  useState(
        [
            {
                id: 2,
                image: image5,
                name: 'Top 6 nóm đồ 2hand không nên ',
                mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
            },
            {
                id: 1,
                image: image5,
                name: 'Top 6 nóm đồ 2hand không nên mua1',
                mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
            },
            {
                id: 3,
                image: image5,
                name: 'Top 6 nóm đồ 2hand không nên mua',
                mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
            },
            {
                id: 4   ,
                image: image5,
                name: 'Top 6 nóm đồ 2hand không nên mua',
                mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
            }
        ]
    )
    return (
        <>
            {uudai.map((uudai, index) =>
                <div key={index}  className="title_list_cottom">
                <img src={uudai.image} />
                <div className="title_list_cottom--content">
                    <h2>{uudai.name}</h2>
                    <p>{uudai.mota.substring(0, 230) + " [...]"}</p>
                    
                        <Link   to={`/ItemNews/${uudai.id}`}>Đọc Thêm</Link>

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
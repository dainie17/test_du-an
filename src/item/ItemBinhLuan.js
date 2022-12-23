import { useEffect, useState } from "react"
import shieldImg from "../assets/shields.png";
export default function ItemBinhLuan(props) {
    const ip = "http://localhost:8080"
    var Infomation = localStorage.getItem("Infomation");
    var db = JSON.parse(Infomation);
    const [Check, setCheck] = useState("none")
    useEffect(() => {
        if (Infomation == null) {
            setCheck("none");
        } else if (Infomation != null) {
            if (db.data.TKUser == props.NameUser) {
                setCheck("block");
            } else {
                setCheck("none");
            }

        }
    }, [])
    return (
        <div style={{ display: "flex" }}>
            <div>
                <div>
                    <img src={shieldImg} width="20" height="20"></img>
                </div>
            </div>
            <div>
                <div>{props.NameUser}</div>
                <div>{props.Date}</div>
                <div>
                    <div className="input_intro">
                        {props.NoiDung}
                    </div>
                    <div style={{ display: Check }}>
                        <button >Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
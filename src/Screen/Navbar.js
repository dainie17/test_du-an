import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-ul"> 
                <li>
                <NavLink to="/Home">Trang chủ</NavLink>
                </li>
                <li>
                <NavLink to="/Introduce">Giới thiệu</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
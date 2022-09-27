import React from "react";
import { Routes, Route } from "react-router-dom";
import '../Screen/Navbar.css'
import Home from "./Home";
import Introduce from "./Introduce";
import Navbar from "./Navbar";


function Navigate() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Introduce" element={<Introduce />}/>
            </Routes>
        </div>
    )
}

export default Navigate;
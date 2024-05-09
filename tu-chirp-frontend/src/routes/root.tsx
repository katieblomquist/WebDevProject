import { Outlet, Link } from "react-router-dom";
import React from "react";
import NavBar from "../components/navbar";
import { Diversity2 } from "@mui/icons-material";

export default function Root() {
    return (
        <div style={{width:'100%'}}>
            <NavBar />

            <div id="routes" style={{margin:'2em'}}>
                <Outlet />
            </div>


        </div>
    );
}
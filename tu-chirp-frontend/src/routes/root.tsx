import { Outlet, Link } from "react-router-dom";
import React from "react";
import NavBar from "../components/navbar";
import { Diversity2 } from "@mui/icons-material";
import { Profile } from "../services/entities";


export default function Root(props: {user: Profile}) {
    return (
        <div style={{width:'100%'}}>
            <NavBar user={props.user} />

            <div id="routes" style={{margin:'2em'}}>
                <Outlet />
            </div>


        </div>
    );
}
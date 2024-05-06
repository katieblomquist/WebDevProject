import { Outlet, Link } from "react-router-dom";
import React from "react";

export default function Root() {
    return (
        <>
            {/* <div id="navbar">
               <nav>
                    <ul>
                        
                    </ul>
                </nav>
            </div> */}

            <div id="routes">
                <Outlet />
            </div>


        </>
    );
}
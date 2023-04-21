

import Header from "components/layout/header/Header";
import SideBar from "components/layout/sidebar/SideBar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout= () => {
    return (
        <div className="">
            <Header />
            <SideBar />

            <Outlet />
        </div>
    );
}

export default Layout;

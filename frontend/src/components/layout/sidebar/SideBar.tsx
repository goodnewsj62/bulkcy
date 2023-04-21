

import React from "react";
import SideNav from "./MainNav";
import FooterNav from "./FooterNav";
import styles  from "./css/sidebar.module.css";


const SideBar = () => {
    
    // storage capabilities
    return (
        <aside className={`${styles.side__bar} fixed w-60 md:text-white md:bg-secondary md:w-72`}>
            <div className="w-full h-3/4 overflow-y-auto">
                <SideNav />
            </div>
            <FooterNav />
        </aside>
    );
}

export default SideBar;

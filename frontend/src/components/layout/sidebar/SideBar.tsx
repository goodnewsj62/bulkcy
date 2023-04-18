

import React from "react";
import SideNav from "./MainNav";
import FooterNav from "./FooterNav";
import styles  from "./css/sidebar.module.css";


const SideBar = () => {
    
    // storage capabilities
    return (
        <aside className={`${styles.side__bar} fixed w-72 md:text-white md:bg-secondary`}>
            <div className="w-full h-3/4">
                <SideNav />
            </div>
            <FooterNav />
        </aside>
    );
}

export default SideBar;

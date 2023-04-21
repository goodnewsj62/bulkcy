

import React from "react";
import SideNav from "./MainNav";
import FooterNav from "./FooterNav";
import styles  from "./css/sidebar.module.css";
import { useAppSelector } from "hooks/reduxhook";


const SideBar = () => {
    const barState =  useAppSelector(store=>store.barState.state);
    // storage capabilities
    const moveLeft =  barState?``:`-left-64`
    return (
        <aside className={`${styles.side__bar} transition-all  fixed w-60 md:text-white md:bg-secondary md:w-64 ${moveLeft}`}>
            <div className="w-full h-3/4 overflow-y-auto">
                <SideNav />
            </div>
            <FooterNav />
        </aside>
    );
}

export default SideBar;

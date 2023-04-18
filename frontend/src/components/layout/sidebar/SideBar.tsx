

import React from "react";
import SideNav from "./MainNav";
import FooterNav from "./FooterNav";


const SideBar = () => {
    
    // storage capabilities
    return (
        <aside className="fixed">
            <div>
                <SideNav />
            </div>
            <FooterNav />
        </aside>
    );
}

export default SideBar;



import React from "react";
import { Link } from "react-router-dom";
import {RiDoorOpenLine} from "react-icons/ri";
import StorageIndicator from "components/stats/StorageIndicator";

const FooterNav= () => {
        return (
        <div>
            <StorageIndicator />
            <div className="divider"></div>
            <Link to="" className="flex items-center mt-4 p-4 md:pl-8">
                <RiDoorOpenLine size={18}  />
                <span className="ml-2">Logout</span>
            </Link>
        </div>
    );
}

export default FooterNav;



import React from "react";
import { Link } from "react-router-dom";
import {RiDoorOpenLine} from "react-icons/ri";
import StorageIndicator from "components/stats/StorageIndicator";

const FooterNav= () => {
    return (
        <div>
            <StorageIndicator />
            <div className="divider"></div>
            <Link to="">
                <RiDoorOpenLine />
                <span>Logout</span>
            </Link>
        </div>
    );
}

export default FooterNav;

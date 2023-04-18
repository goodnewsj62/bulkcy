import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {FaRegPaperPlane} from "react-icons/fa";
import {BsClock, BsCreditCard} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";
import {IoDocumentsOutline} from "react-icons/io5";

const SideNav = () => {
    return (
        <nav>
            <Link to="">
                <MdOutlineSpaceDashboard />
                <span>dasboard</span>
            </Link>
            <Link to="">
                <FaRegPaperPlane />
                <span>sent</span>
            </Link>
            <Link to="">
                <BsClock />
                <span>scheduled</span>
            </Link>
            <Link to="">
                <TiContacts />
                <span>contacts</span>
            </Link>
            <Link to="">
                <IoDocumentsOutline />
                <span>stored files</span>
            </Link>
            <Link to="">
                <BsCreditCard />
                <span>subscription</span>
            </Link>
        </nav>
    );
}

export default SideNav;

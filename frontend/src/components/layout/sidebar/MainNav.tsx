import React from "react";
import { Link, NavLink } from "react-router-dom";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {FaFeatherAlt, FaRegPaperPlane} from "react-icons/fa";
import {BsClock, BsCreditCard} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";
import {IoDocumentsOutline} from "react-icons/io5";

type navprops =  {isActive:boolean, isPending:boolean }

const SideNav = () => {
    const applyClass =  (state:navprops)=>state.isActive? `flex bg-primary text-white items-center py-3 w-100 pl-4 pr-2 md:pl-8 md:bg-[#b7949268]` :`flex items-center  py-3 w-100 pl-4 pr-2 md:pl-8 hover:bg-roseyBrownLight`;
    return (
        <nav >
            <Link to="" className="hidden items-center shadow-lg bg-primary mx-auto w-2/3 my-4 py-2 px-4 rounded-xl text-white font-bold hover:bg-[#8a73efaf] md:flex">
                <FaFeatherAlt size={23} />
                <span className="ml-1.5">Create</span>
            </Link>
            <NavLink to="/" className={applyClass}>
                <MdOutlineSpaceDashboard size={18}/>
                <span className="ml-3 capitalize">dasboard</span>
            </NavLink>
            <NavLink to="/sent" className={applyClass}>
                <FaRegPaperPlane size={18}/>
                <span className="ml-3 capitalize">sent</span>
            </NavLink>
            <NavLink to="/schedule" className={applyClass}>
                <BsClock size={18}/>
                <span className="ml-3 capitalize">scheduled</span>
            </NavLink>
            <NavLink to="/conacts" className={applyClass}>
                <TiContacts size={18}/>
                <span className="ml-3 capitalize">contacts</span>
            </NavLink>
            <NavLink to="/files" className={applyClass}>
                <IoDocumentsOutline size={18}/>
                <span className="ml-3 capitalize">stored files</span>
            </NavLink>
            <NavLink to="/subscrption" className={applyClass}>
                <BsCreditCard size={18}/>
                <span className="ml-3 capitalize">subscription</span>
            </NavLink>
        </nav>
    );
}

export default SideNav;

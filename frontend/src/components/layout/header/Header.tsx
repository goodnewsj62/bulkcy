import React, { useContext } from "react";
import {HiBars3} from "react-icons/hi2";
import BarLogoImg from "./BarLogoImg";
import ProfilePhoto from "./ProfilePhoto";
import SearchToggle from "./SearchToggle";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import {defaultIconSize} from "components/wrappers/IconSize";


const Header = () => {
    const iconSize =  useContext(defaultIconSize);

    return (
        <header className="flex w-full h-16">
            <section className="w-auto h-full flex items-center pl-4 md:pl-8 md:text-white md:w-72 md:bg-secondary">
                <div className="h-10 w-10 flex justify-center items-center cursor-pointer  rounded-full  hover:bg-roseyBrownLight md:hover:bg-[#ffffff19]">
                    <HiBars3 size={iconSize} />
                </div>
                <div className="md:pl-3">
                    <Link to="/" className="flex items-center">
                        <BarLogoImg />
                        <h2 className="font-bold ml-2 text-2xl">Bulkcy</h2> 
                    </Link>
                    
                </div>
            </section>
            <section className="flex flex-grow">
                <SearchToggle />
                <Link to="/" className="h-full flex items-center justify-center mr-2">
                    <span className="h-10 w-10 flex justify-center items-center  rounded-full hover:bg-roseyBrownLight">
                    <FiSettings size={iconSize} />
                    </span>
                </Link>
                <ProfilePhoto />
            </section>
        </header>
    );
}

export default Header;

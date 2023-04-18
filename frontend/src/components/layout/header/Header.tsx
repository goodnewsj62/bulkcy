import React from "react";
import {HiBars3} from "react-icons/hi2";
import BarLogoImg from "./BarLogoImg";
import ProfilePhoto from "./ProfilePhoto";
import SearchToggle from "./SearchToggle";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex w-full h-16">
            <section className="w-auto h-full flex items-center pl-8 text-white md:w-72 md:bg-secondary">
                <div>
                    <HiBars3 />
                </div>
                <div className="flex items-center">
                    <BarLogoImg />
                    <h2 className="font-bold ">Bulkcy</h2>
                </div>
            </section>
            <section className="pr-8">
                <SearchToggle />
                <Link to="/">
                    <FiSettings />
                </Link>
                <ProfilePhoto />
            </section>
        </header>
    );
}

export default Header;

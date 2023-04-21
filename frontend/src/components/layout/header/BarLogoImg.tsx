import React from "react";
import logowhite from "assets/logowhite.svg";
import logo from "assets/logo.svg";
import { useAppSelector } from "hooks/reduxhook";


export default function BarLogoImg(){
    const barState =  useAppSelector(store=>store.barState.state);
    return(
        <div className="hidden  justify-center transition-all items-center md:flex">
            {barState && <img className="w-12"  src={logowhite} alt="logo" />}
            {!barState && <img className="w-12"  src={logo} alt="logo" />}
        </div>
    )
}

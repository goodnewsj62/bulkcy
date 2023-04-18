import React from "react";
import logowhite from "assets/logowhite.svg";


export default function BarLogoImg(){
    return(
        <div className="hidden  justify-center items-center md:flex">
            <img className="w-12"  src={logowhite} alt="logo" />
        </div>
    )
}

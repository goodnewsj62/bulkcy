import React from "react";
import logowhite from "assets/logowhite.svg";


export default function BarLogoImg(){
    return(
        <div className="flex justify-center items-center">
            <img className="w-12"  src={logowhite} alt="logo" />
        </div>
    )
}

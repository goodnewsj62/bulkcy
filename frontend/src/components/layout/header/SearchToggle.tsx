import { defaultIconSize } from "components/wrappers/IconSize";
import React, { useContext } from "react";
import {FiSearch} from "react-icons/fi";



export default function SearchToggle(){
    const size =  useContext(defaultIconSize);
    // search is a popup and do stuff like gmail page search `in:sent`
    return(
        <div className="ml-auto mr-2 h-full relative flex justify-center items-center">
            <span className="h-10 w-10 flex justify-center items-center  rounded-full hover:bg-roseyBrownLight" >
                <FiSearch size={size} />
            </span>
        </div>
    )
}
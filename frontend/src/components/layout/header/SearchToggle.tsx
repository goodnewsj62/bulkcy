import React from "react";
import {FiSearch} from "react-icons/fi";



export default function SearchToggle(){
    // search is a popup and do stuff like gmail page search `in:sent`
    return(
        <div>
            <span>
                <FiSearch />
            </span>
        </div>
    )
}
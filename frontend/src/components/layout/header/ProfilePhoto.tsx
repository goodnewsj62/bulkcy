import React from "react";
import dp from "assets/profile-pic.png";

const ProfilePhoto = ()=>{
    // either username or img
    return(
        <div>
            <img src={dp} alt="dp" />
            <span>
                <h3>G</h3>
            </span>
        </div>
    )
}


export default ProfilePhoto;

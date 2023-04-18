import React from "react";
import dp from "assets/profile-pic.png";

const ProfilePhoto = ()=>{
    // either username or img
    return(
        <div className="w-12 h-12 rounded-full mr-4 md:mr-8 self-center">
            <img className="w-full h-full object-cover" src={dp} alt="dp" />
            {/* <div className="w-full h-full flex items-center justify-center bg-primary rounded-full">
                <h3 className="font-bold text-white text-2xl">G</h3>
            </div> */}
        </div>
    )
}


export default ProfilePhoto;

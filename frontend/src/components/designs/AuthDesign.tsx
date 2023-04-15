import React from "react";
import icon from "assets/envdesign.svg";
import logo from "assets/logowhite.svg";
import { Link } from "react-router-dom";





const AuthDesign= () => {
    return (
        <div className="hidden relative !w-full overflow-hidden !h-screen  md:flex " >
            <div className="flex flex-col h-full bg-primary  basis-3/4 ">
                <div className="logo flex items-center py-4 px-2 md:px-4">
                    <Link to="/">
                        <img className="w-14" src={logo} alt="logo" />
                    </Link>
                    <Link to="/">
                    <h2 className="text-white mx-2 pb-2 font-bold text-3xl text-center">Bulkcy</h2>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center grow">
                    <img className="w-40  rotate-0 lg:w-56 xl:w-64" src={icon} alt="envelop" />
                    <h1 className="text-white font-bold text-3xl text-center">Lets get you all started</h1>
                </div>
            </div>
            <div className="basis-1/4 relative">
                <svg className="absolute rotate-90 aspect-square h-full bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 -561 1440 320"><path fill="#8973EF" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,277.3C672,288,768,288,864,250.7C960,213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    );
}

export default AuthDesign;

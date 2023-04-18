

import React, {PropsWithChildren, createContext} from "react";


type size = number ;

const defaultIconSize  =  createContext<size>(16);

const IconSizeWrapper:React.FC<PropsWithChildren> = (props) => {
    
    return (
        <defaultIconSize.Provider value={25} >
            {props.children}
        </defaultIconSize.Provider>
    );
}

export default IconSizeWrapper;
export {defaultIconSize};


import React, {PropsWithChildren, createContext} from "react";


type size = number ;

const DefaultIconSize  =  createContext<size>(16);

const IconSizeWrapper:React.FC<PropsWithChildren> = (props) => {
    
    return (
        <DefaultIconSize.Provider value={16} >
            {props.children}
        </DefaultIconSize.Provider>
    );
}

export default IconSizeWrapper;

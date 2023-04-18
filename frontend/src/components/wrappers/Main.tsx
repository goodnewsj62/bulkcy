

import React, { PropsWithChildren } from "react";

type others =  {
    id?: string,
    ariaLabel?: string,
    ariaLabelledBy?: string,
}

interface Props{
    classNames?: string,
    others:  others,
}
const Main:React.FC<PropsWithChildren<Props>> = ({ children,  classNames = "", others ={ }}) => {
    return (
            <main className={classNames} {...others}>
                {children}
            </main>
    );
}

export default Main;

import React from "react";
import cl from './LoginButton.module.css';


const AppRouter = ({children, callback}) => {
    return (
        <button className={cl.button} onClick={callback}>{children}</button>
    )
}

export default AppRouter;

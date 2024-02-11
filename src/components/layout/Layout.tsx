import {Header} from "./header/Header";
import React, {PropsWithChildren} from "react";

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
};
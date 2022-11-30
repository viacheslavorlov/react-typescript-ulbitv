import React, {FC} from 'react';
import Navigation from "./Navigation";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
    return (
        <div>
            <h1>Header of cool site</h1>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default Layout;

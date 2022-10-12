import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbarr from '../Navbar/Navbarr';
// import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Navbarr></Navbarr>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
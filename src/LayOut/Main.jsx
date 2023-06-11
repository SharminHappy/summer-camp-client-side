import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";



const Main = () => {
    const location = useLocation();
    console.log(location)
    // const [mode, setMode] = useState('light');

    // useEffect(() => {
    //     setMode(localStorage.getItem('theme'))
    // }, [])
    return (

        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Main;
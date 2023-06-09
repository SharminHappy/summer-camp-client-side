import { NavLink, Outlet } from "react-router-dom";




import { useState } from 'react';
import { FaAddressBook, FaCaretLeft, FaFootballBall, FaHome, FaWallet } from "react-icons/fa";

const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="flex h-screen ">
            {/* Sidebar */}
            <div
                className={` w-80 bg-gray-800 text-white mb-0 pb-0 h-screen overflow-y-auto ${isDrawerOpen ? 'translate-x-0 ' : '-translate-x-full  fixed'
                    } transition-transform duration-300 ease-in-out   `}
            >

                <a className="btn btn-ghost normal-case text-xl ml-8  pt-5"><span className='font-bold text-cyan-950 text-4xl uppercase'>sps</span><span className='font-bold text-4xl text-yellow-700 uppercase '>c<span className=' font-bold text-cyan-950 text-4xl uppercase'>@</span>mp</span></a>
                <ul className="menu p-4   my-5 text-white uppercase gap-3 justify-center">
                    <li className=" w-56 ml-4 "><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li className="w-56 ml-4 "><NavLink to='/dashboard/myselectedclasses'><FaFootballBall></FaFootballBall>my selected classes</NavLink></li>
                    <li className="w-56 ml-4 "><NavLink to='/dashboard/enroll'><FaAddressBook></FaAddressBook> my Enrolled classes</NavLink></li>
                    <li className="w-56 ml-4"><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment history</NavLink></li>
                    <div className="divider h-1 w-60 ml-2 rounded-lg  bg-yellow-500"></div>
                    <li className=" w-56 ml-4 "><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li className=" w-56 ml-4 "><NavLink to='/classes'><FaFootballBall></FaFootballBall>classes</NavLink></li>

                </ul>
            </div>


            {/* Main Content */}
            <div className="flex-1">
                <Outlet></Outlet>
                <button
                    className="fixed left-0 top-0  p-0 w-5 h-full bg-gray-800  text-white"
                    onClick={toggleDrawer}
                >
                    <FaCaretLeft className=" ml-0 mt-7"></FaCaretLeft>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

import { NavLink, Outlet } from "react-router-dom";




import { useContext, useState } from 'react';
import { FaAddressBook, FaCaretLeft, FaFootballBall, FaHome, FaSignOutAlt, FaWallet } from "react-icons/fa";
import useSelect from "../hooks/useSelect";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {

    const [select] = useSelect();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })

    }


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
                    <li className=" w-64 ml-4 "><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li className="w-64 ml-4 ">
                        <NavLink to='/dashboard/myselectedclasses'><FaFootballBall></FaFootballBall>my selected classes
                            <span className="badge  bg-yellow-500  text-white ">+{select?.length || 0}</span>
                        </NavLink>

                    </li>
                    <li className="w-64 ml-4 "><NavLink to='/dashboard/enroll'><FaAddressBook></FaAddressBook> my Enrolled classes</NavLink></li>
                    <li className="w-64 ml-4"><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment history</NavLink></li>
                    <div className="divider h-1 w-60 ml-2 rounded-lg  bg-yellow-500"></div>
                    <li className=" w-64 ml-4 "><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li className=" w-64 ml-4 "><NavLink to='/classes'><FaFootballBall></FaFootballBall>classes</NavLink></li>
                    <li className=" w-64 ml-4" onClick={handleLogOut} ><a ><FaSignOutAlt></FaSignOutAlt>Logout</a></li>

                </ul>
            </div>


            {/* Main Content */}
            <div className="flex-1">
                <Outlet></Outlet>
                <button
                    className="fixed left-0 top-0  p-0  h-full bg-gray-800  text-white"
                    onClick={toggleDrawer}
                >
                    <FaCaretLeft className=" ml-0 mt-7"></FaCaretLeft>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

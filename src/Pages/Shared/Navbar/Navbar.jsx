import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import { FaShoppingCart } from 'react-icons/fa';
// import useSelect from "../../../hooks/useSelect";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // here change
    const [theme, setTheme] = useState('light');

    // const [select,setSelect] = useSelect();

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };






    const navOptions = <>

        <li><Link className=" w-28" to='/'>Home</Link></li>
        <li><Link className=" w-28" to='/instructors'>Instructors</Link></li>
        <li><Link className=" w-28" to='/classes'>Classes</Link></li>
        <li>
            {/* here first had a dashboard/myselectedclasses now has a only dashboard  */}
            <Link className=" w-28" to='/dashboard'>
                <button className="flex  h-10 gap-2">
                    Dashboard
                    {/* TODO:if student login then will be see number of time otherwish no */}
                    {/* <div>
                        {
                            !user.role == "admin" || !user.role == "instructor" ?
                                <div className="badge bg-yellow-500 p-2 text-white h-4">+{select?.length || 0}</div> :
                                <></>
                        }
                    </div> */}

                </button>
            </Link>
        </li>
        <li>
            <label className="swap swap-rotate">
                <input onClick={toggleTheme} type="checkbox" />
                <div className="swap-off"><MdOutlineLightMode className="text-2xl"></MdOutlineLightMode></div>
                <div className="swap-on"><MdDarkMode className="text-2xl"></MdDarkMode></div>
            </label>
        </li>

        {
            user ?
                <>
                    <img src={user.photoURL} className="img-responsive  rounded-full w-12 h-12 " alt="" />
                    <li><button onClick={handleLogOut} className="btn ml-2 pt-4 w-20">Logout</button></li>
                </>
                :
                <>
                    <li><Link className="btn pt-4 ms-48 " to='/login'>Login</Link></li>
                </>
        }



    </>
    return (

        <div className="navbar fixed z-10  bg-opacity-40 max-w-screen-xl bg-cyan-700 text-white  uppercase rounded-b ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-950 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl "><span className='font-bold text-cyan-950 text-4xl uppercase'>sps</span><span className='font-bold text-4xl text-yellow-700 uppercase '>c<span className=' font-bold text-cyan-950 text-4xl uppercase'>@</span>mp</span></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

        </div>

    );
};

export default Navbar;
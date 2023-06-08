import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })

    }

    const navOptions = <>

        <li><Link className=" w-28" to='/'>Home</Link></li>
        <li><Link className=" w-28" to='/instructors'>Instructors</Link></li>
        <li><Link className=" w-28" to='/classes'>Classes</Link></li>
        <li>
            <Link  className=" w-28" to='/'>
                <button className="flex  h-10 gap-2">
                    <FaShoppingCart className="text-xl "></FaShoppingCart>
                    <div className="badge bg-yellow-500 h-4">+0</div>
                </button>
            </Link>
        </li>

        {
            user ?
                <>
                    <li><Link to='/dashboard' className=" w-28 mr-20 ">dashboard</Link></li>
                    <img src={user.photoURL} className="img-responsive w-12 rounded-full mr-10 " alt="" />
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
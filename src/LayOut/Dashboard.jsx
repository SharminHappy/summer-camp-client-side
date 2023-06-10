import { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LuUsers } from 'react-icons/lu';
import { MdSportsCricket } from 'react-icons/md';
import {
  FaAddressBook,
  FaCaretLeft,
  FaFootballBall,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaWallet
} from 'react-icons/fa';
import useSelect from '../hooks/useSelect';
import { AuthContext } from '../providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';

const Dashboard = () => {
  const [select] = useSelect();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { logOut } = useContext(AuthContext);

  // TODO: Load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  // const isInstructor = true;

  const [isStudent] = useStudent();

  const [isInstructor] = useInstructor();

  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error);
      });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* here i want to side bar also scroll or  move with main content */}
      <div
        className={`w-80 bg-gray-800 text-white mb-0 pb-0 h-screen overflow-y-auto   ${isDrawerOpen ? 'translate-x-0 ' : '-translate-x-full fixed  '
          } transition-transform duration-300 ease-in-out`}
      >
        <a className="btn btn-ghost normal-case text-xl ml-8  pt-5">
          <span className="font-bold text-cyan-950 text-4xl uppercase">sps</span>
          <span className="font-bold text-4xl text-yellow-700 uppercase">
            c<span className=" font-bold text-cyan-950 text-4xl uppercase">@</span>mp
          </span>
        </a>
        <ul className="menu p-4 my-5 text-white uppercase gap-3 justify-center">
          {isAdmin ? (
            <>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/manageclasses">
                  <MdSportsCricket />
                  Manage Classes
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/manageusers">
                  <LuUsers />
                  Manage Users
                </NavLink>
              </li>
              <div className="divider h-1 w-60 ml-2 rounded-lg bg-yellow-500"></div>
              <li className="w-64 ml-4">
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/classes">
                  <FaFootballBall />
                  Classes
                </NavLink>
              </li>
              <li className="w-64 ml-4" onClick={handleLogOut}>
              <NavLink to='/'>
                  <FaSignOutAlt />
                  Logout
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/instructor">
                  <FaHome />
                  Instructor Home
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/addclass">
                  <MdSportsCricket />
                  Add a Class
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/myclass">
                  <FaUser />
                  My Class
                </NavLink>
              </li>
              <div className="divider h-1 w-60 ml-2 rounded-lg bg-yellow-500"></div>
              <li className="w-64 ml-4">
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li className="w-64 ml-4" onClick={handleLogOut}>
                <NavLink to='/'>
                  <FaSignOutAlt />
                  Logout
                </NavLink>
              </li>
            </>
          ) : isStudent ? (
            <>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Student Home
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/myselectedclasses">
                  <FaFootballBall />
                  My Selected Classes
                  <span className="badge bg-yellow-500 text-white">+{select?.length || 0}</span>
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/enroll">
                  <FaAddressBook />
                  My Enrolled Classes
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/dashboard/history">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <div className="divider h-1 w-60 ml-2 rounded-lg bg-yellow-500"></div>
              <li className="w-64 ml-4">
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li className="w-64 ml-4">
                <NavLink to="/classes">
                  <FaFootballBall />
                  Classes
                </NavLink>
              </li>
              <li className="w-64 ml-4" onClick={handleLogOut}>
                <NavLink to='/'>
                  <FaSignOutAlt />
                  Logout
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
        <button className="fixed left-0 top-0 p-0 h-full bg-gray-800 text-white" onClick={toggleDrawer}>
          <FaCaretLeft className="ml-0 mt-7" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

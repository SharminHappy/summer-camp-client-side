import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import {FaUserShield } from "react-icons/fa";

import { GrUserAdmin } from "react-icons/gr";
// import Swal from "sweetalert2";


const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
       

    }
    const handleMakeInstructor=(user)=>{

    }
  

    
    return (
        <div className="w-full  ml-2">
            <Helmet>
                <title>SPSC@MP | Manage Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total users:{users.length}</h3>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    {/* head */}
                    <thead className=" bg-gray-800  text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className=" flex gap-2 text-end ">
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-800 btn-sm"><FaUserShield className="text-white"></FaUserShield></button>

                                    }

                                    {
                                        user.role === 'instructor' ? 'instructor' : <button  onClick={() => handleMakeInstructor(user)} className="btn  btn-ghost  bg-yellow-500 btn-sm"><GrUserAdmin></GrUserAdmin></button>
                                    }
                                </td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";

import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";



const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })



    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-server-side-phi.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-server-side-phi.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }









    return (
        <div className="w-full  ml-2 mt-2">
            <Helmet>
                <title>SPSC@MP | Manage Users</title>
            </Helmet>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    {/* head */}
                    <thead className=" bg-gray-800 font-bold  text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold">
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="text-end" >
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-800 btn-sm"><FaUserShield className="text-white"></FaUserShield></button>

                                    }
                                </td>
                                <td className="text-end">
                                    {
                                        user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn  btn-ghost  bg-yellow-500 btn-sm"><GrUserAdmin></GrUserAdmin></button>
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
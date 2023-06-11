import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { useState } from "react";

const ManageClasses = () => {





    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('http://localhost:5000/classes')
        return res.data;
    })


    const handleApprove = (pendingclass) => {
        fetch(`http://localhost:5000/classes/approve/${pendingclass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${pendingclass.class_name} is approve now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }
    const handleDeny = (pendingclass) => {
        fetch(`http://localhost:5000/classes/deny/${pendingclass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'danger',
                        title: `${pendingclass.class_name} is Deny now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }



    return (
        <div className="w-full  ml-2 mt-2">
            <Helmet>
                <title>SPSC@MP | Manage Classes</title>
            </Helmet>
            {classes.length}
            {classes.status}
            <div className="overflow-x-auto w-full">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>ClassName</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(pendingclass => <tr
                                key={pendingclass._id}
                            >

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pendingclass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{pendingclass.class_name}</td>
                                <td>{pendingclass.instructor_name}</td>
                                <td>{pendingclass?.instructor_email}</td>
                                <td>{pendingclass.available_seats}</td>
                                <td>{pendingclass.price}</td>
                                <td>{pendingclass.status}</td>
                                <td >
                                    {
                                        pendingclass.status === 'approve' ? 'approve' :
                                            <button onClick={() => handleApprove(pendingclass)} className="btn text-white bg-orange-800 btn-sm">Approve</button>

                                    }
                                </td>
                                <td >
                                    {
                                        pendingclass.status === 'deny' ? 'deny':
                                            <button onClick={() => handleDeny(pendingclass)}  className="btn text-white bg-orange-800 btn-sm">Deny</button>

                                    }
                                </td>
                                <td>

                                    <button className="btn bg-orange-800 text-white btn-sm">Send FeedBack</button>


                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;

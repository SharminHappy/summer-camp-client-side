import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useSelect from "../../../hooks/useSelect";
import { FaTrashAlt } from "react-icons/fa";


const MySelectedClasses = () => {
    const [select] = useSelect();
    console.log(select);
    const total = select.reduce((sum, classes) => classes.price + sum, 0)

    return (

        <div className="flex-1">
            <Helmet>
                <title>SPSC@MP |My Selected Classes</title>
            </Helmet>
            <SectionTitle
                heading={'my selected classes'}
            ></SectionTitle>
            <div className="flex justify-evenly h-[60px] uppercase my-10  ">
                <h1 className="text-2xl">Total Selected:{select.length}</h1>
                <h1 className="text-2xl">Total Price:{total}</h1>
                <button className="btn btn-outline btn-warning btn-sm">pay</button>
            </div>
            <div className="overflow-x-auto  w-full ">
                <table className="table w-full ml-4">
                    {/* head */}
                    <thead>
                        <tr className=" bg-gray-800  text-white">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Avatar</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            select.map(row => <tr
                                key={row._id}
                            >
                                <td>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                  
                                        <div className="font-bold">{row.class_name}</div>

                                  
                                </td>
                                <td>
                                    {row.instructor_name}
                                </td>
                                <td>{row.price}</td>
                                <td>
                                    <button className="btn btn-ghost bg-red-600 btn-md"><FaTrashAlt className="text-white"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>


    );
};

export default MySelectedClasses;
import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useHistory from "../../../hooks/useHistory";


const PaymentHistory = () => {
    const [history] = useHistory();
    return (
        <div>
            <SectionTitle
                heading={'Payment History'}
            ></SectionTitle>
            <div className="overflow-x-auto  w-full">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className=" bg-gray-800  text-white">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Avatar</th>
                            <th>Item Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(row => <tr
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
                                    <div className="font-bold">{row.itemName}</div>
                                </td>
                                <td>
                                    {row.name}
                                </td>
                                <td>{row.email}</td>
                                <td>{row.price}</td>
                                <td>{row.transactionId}</td>
                                <td>{row.date}</td>
                                <td>{row.status}</td>
                                

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
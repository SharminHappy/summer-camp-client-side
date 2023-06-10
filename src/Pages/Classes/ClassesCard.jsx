import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelect from "../../hooks/useSelect";
import { motion } from 'framer-motion';

const ClassesCard = ({ data }) => {
    const { image, class_name, instructor_name, available_seats, price, enrollment, _id } = data;

    const [, refetch] = useSelect();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleSelect = (data) => {
        console.log(data);

        if (user && user.email) {
            const selectClass = { classId: _id, image, class_name, instructor_name, available_seats, price, enrollment, email: user.email }
            fetch('http://localhost:5000/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your Selected Class Saved',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }


    }


    return (
        <motion.div
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
            <div className="bg-base-100 shadow-xl rounded-lg">
                <figure className="w-full">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-cyan-950">{class_name}</h2>
                    <p className="font-semibold"><span className=" text-cyan-950  font-semibold uppercase">Instructor Name:</span> {instructor_name}</p>
                    <p className="font-semibold"><span className=" text-cyan-950  font-semibold uppercase">Available Seats:</span> {available_seats}</p>
                    <p className="font-semibold"><span className=" text-cyan-950  font-semibold uppercase">Price:</span>{price}</p>


                    <div className="text-right">
                        <button onClick={() => handleSelect(data)} className="btn bg-yellow-500  uppercase">select</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ClassesCard;
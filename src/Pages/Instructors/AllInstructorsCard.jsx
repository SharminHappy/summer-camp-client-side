import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import Modal from "./Modal";

const AllInstructorsCard = ({ data }) => {
    // const [isModalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
        // setModalOpen(true);
    };

    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    const { user } = useContext(AuthContext)

    // const [modal, setModal] = useState(false);
    const [tempdata, setTempdata] = useState([]);
    // const [showModal,setShowModal] = useState(false);

    const { instructorName, image } = data;

    const getData = (instructorName, image) => {
        const tempData = [instructorName, image];
        console.log(tempData);
        setTempdata(item => [1, ...tempData])

        // return setModal(true);


    }
    return (
        <>

            <section>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-cyan-950">{instructorName}</h2>
                        <div className="card-actions">

                     <a onClick={handleButtonClick} className="btn bg-yellow-500  w-60 uppercase">open modal</a>

                        </div>
                    </div>
                </div>
            </section>
           
                {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
        

        </>
    );
};

export default AllInstructorsCard;
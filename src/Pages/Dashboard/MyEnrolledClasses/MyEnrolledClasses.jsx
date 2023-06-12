import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useEnroll from "../../../hooks/useEnroll";
// import useEnroll from "../../../hooks/useEnroll";


const MyEnrolledClasses = () => {
    const [enroll] = useEnroll();
    return (
        <div>
            <SectionTitle
                heading={'my enrolled classes'}
            ></SectionTitle>
            <div className=" grid grid-cols-2 ml-2  mt-5">

                {
                    enroll.map(classItem => <div
                        key={classItem._id}
                        className="card w-96 bg-base-100 shadow-xl mb-4">
                        <figure><img src={classItem.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">{classItem.itemName}</h2>
                            <p>Price:{classItem.price}</p>
                            <p>Status:{classItem.status}</p>
                            <p>Available Seats:{classItem.availableSeats}</p>
                            <p>Date:{classItem.date}</p>
                          
                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default MyEnrolledClasses;
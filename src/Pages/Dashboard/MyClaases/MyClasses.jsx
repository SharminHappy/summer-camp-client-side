import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";


const MyClasses = () => {
    const [classes] = useClasses();

    const handleUpdate = id => {

        fetch(`https://summer-camp-server-side-phi.vercel.app/classes/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'update'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    // 
                }
            })

    }
    return (
        <div>
            <SectionTitle heading={'My Classes'}></SectionTitle>
            <div className=" grid grid-cols-2 ml-2  mt-5">

                {
                    classes.map(classItem => <div
                        key={classItem._id}
                        className="card w-96 bg-base-100 shadow-xl mb-4">
                        <figure><img src={classItem.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold">{classItem.class_name}</h2>
                            <p>Price:{classItem.price}</p>
                            <p>Enrolled:{classItem?.enrollment}</p>
                            <p>Status:{classItem.status}</p>
                            <p>Available Seats:{classItem.available_seats}</p>
                            {classItem.status === 'deny' && (
                                <p>Feedback: {classItem.feedback}</p>
                            )}

                            <div className="card-actions justify-end">
                                <button onClick={()=> handleUpdate(classItem._id)} className="btn bg-yellow-500 text-white">Update</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyClasses;
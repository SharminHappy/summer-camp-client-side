
const ClassesCard = ({ data }) => {
    const { image, class_name, instructor_name, available_seats, price, enrollment } = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-cyan-950">{class_name}</h2>
                    <p className="font-semibold"><span  className=" text-cyan-950  font-semibold uppercase">Instructor Name:</span> {instructor_name}</p>
                    <p  className="font-semibold"><span  className=" text-cyan-950  font-semibold uppercase">Available Seats:</span> {available_seats}</p>
                    <p  className="font-semibold"><span  className=" text-cyan-950  font-semibold uppercase">Price:</span>{price}</p>

                    
                    <div className="text-right">
                        <button className="btn bg-yellow-500  uppercase">select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;
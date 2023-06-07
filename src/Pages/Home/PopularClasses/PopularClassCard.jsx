
// TODO:sorting 5-2
const PopularClassCard = ({ pClass }) => {
    const {image,class_name}=pClass;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <p className="font-bold text-2xl text-cyan-950">{class_name}</p>
                        <div className="badge bg-yellow-500 text-white uppercase p-3">popular</div>
                    </h2>  
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;
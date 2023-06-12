import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="w-full ">
            <img className=" mx-auto h-96" src="https://i.ibb.co/GPV3kzW/page-404-with-people-81894-2952.jpg" alt="" />
            <Link to='/'> <button className="bg-pink-200 w-60 gap-10 p-2 text-white text-bold text-3xl flex"><FaArrowLeft></FaArrowLeft>GO BACK</button></Link>
        </div>

    );
};

export default Error;
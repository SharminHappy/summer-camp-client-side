
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import PopularInstructors from "./PopularInstructors/PopularInstructors";




const Home = () => {
    return (
       
        <div >
            <Helmet>
                <title>SPSC@MP | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>


        </div>
        
    );
};

export default Home;
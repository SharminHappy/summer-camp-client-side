
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";




const Home = () => {
    return (
            <div>
                {/* <Helmet>
                    <title>SPSC@MP | Home</title>
                </Helmet> */}
            <Slider></Slider>
            <PopularClasses></PopularClasses>


        </div>
    );
};

export default Home;
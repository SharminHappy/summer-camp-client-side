// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Slider = () => {
    return (

        <AwesomeSlider className='mb-20'
            media={[
                {
                    source: 'https://i.ibb.co/2ygw7v1/kids-fashion-concept-group-teen-boys-girls-sitting-green-grass-park-155003-32286.jpg',
                },
                {
                    source: 'https://i.ibb.co/NLbCNMh/kids-football-equipment-getting-ready-match-23-2148631525.jpg',
                },
                {
                    source: "https://i.ibb.co/gPLsBCM/football-trainer-teaching-his-pupils-23-2149707985.jpg",
                },
                {
                    source: "https://i.ibb.co/LrQYGxT/two-multiracional-brothers-playing-basketball-court-near-park-1157-49430.jpg",
                },
                {
                    source: "https://i.ibb.co/CBGGsXK/portrait-group-girls-boy-as-tennis-players-holding-tennis-rackets-against-green-grass-outdoor-court.jpg",
                },
            ]}
        />

    );
};

export default Slider;
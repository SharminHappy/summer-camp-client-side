import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className=" w-full h-4/5">
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/NLbCNMh/kids-football-equipment-getting-ready-match-23-2148631525.jpg" />
                    <p className=" legend font-bold">Professional sports academics in a traditional camp environment.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/2ygw7v1/kids-fashion-concept-group-teen-boys-girls-sitting-green-grass-park-155003-32286.jpg" />
                    <p className="legend font-bold">“I have a conviction that a few weeks spent in a well-organized summer camp may be of more value educationally than a whole year of formal school work.” ~ Charles William Eliot</p>
                </div>

                <div>
                    <img src="https://i.ibb.co/gPLsBCM/football-trainer-teaching-his-pupils-23-2149707985.jpg" />
                    <p className="legend font-bold">“We do not want to tell our dreams, we want to show them.”</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/LrQYGxT/two-multiracional-brothers-playing-basketball-court-near-park-1157-49430.jpg" />
                    <p className="legend font-bold">“The most important thing is to try and inspire people so that they can be great in whatever they want to do.”
                        Kobe Bryant, American Basketball Player</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/CBGGsXK/portrait-group-girls-boy-as-tennis-players-holding-tennis-rackets-against-green-grass-outdoor-court.jpg" />
                    <p className="legend font-bold">“I really think a champion is defined not by their wins, but how they can recover when they fall.”
                        Serena Williams, American Tennis Player</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;
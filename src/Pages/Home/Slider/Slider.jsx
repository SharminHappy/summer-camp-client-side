



const Slider = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/NLbCNMh/kids-football-equipment-getting-ready-match-23-2148631525.jpg" className="w-full" />
                   
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/2ygw7v1/kids-fashion-concept-group-teen-boys-girls-sitting-green-grass-park-155003-32286.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/gPLsBCM/football-trainer-teaching-his-pupils-23-2149707985.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/LrQYGxT/two-multiracional-brothers-playing-basketball-court-near-park-1157-49430.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs bg-cyan-950 text-white font-bold">1</a>
                <a href="#item2" className="btn btn-xs bg-cyan-950 text-white font-bold">2</a>
                <a href="#item3" className="btn btn-xs bg-cyan-950 text-white font-bold">3</a>
                <a href="#item4" className="btn btn-xs bg-cyan-950 text-white font-bold">4</a>
            </div>
        </div>

    );
};

export default Slider;
import { Helmet } from 'react-helmet-async';
import AllInstructorsCard from './AllInstructorsCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';

const Instructors = () => {


    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        // Fetch data from the server and update the cardData state
        fetch('https://summer-camp-server-side-phi.vercel.app/instructors')
            .then((response) => response.json())
            .then((data) => setCardData(data));
    }, []);
    
    return (
        <div>
            <Helmet>
                <title>SPSC@MP | Instructors</title>
            </Helmet>
            <SectionTitle
                heading={'all instructors information'}
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-3'>
                {
                    cardData.map(data => <AllInstructorsCard
                        key={data._id}
                        data={data}
                    ></AllInstructorsCard>)
                }
            </div>


        </div>
    );
};

export default Instructors;
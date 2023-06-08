import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import AllInstructorsCard from './AllInstructorsCard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Instructors = () => {

    const loadedInsData = useLoaderData();

   

   

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
                    loadedInsData.map(data => <AllInstructorsCard
                        key={data._id}
                        data={data}
                        


                    ></AllInstructorsCard>)
                }
            </div>


        </div>
    );
};

export default Instructors;
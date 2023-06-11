import { Helmet } from "react-helmet-async";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

// Todo:impement pagination here

const Classes = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        // Fetch data from the server and update the cardData state
        fetch('http://localhost:5000/classes')
            .then((response) => response.json())
            .then((data) => setCardData(data));
    }, []);

    // TODO Approve load data from ther to have dynamic isapprove based on data

    const isApprove = true;

    // is Admin taw kora try korbo

    return (
        <div>
            <Helmet>
                <title>SPSC@MP | Classes</title>
            </Helmet>
            <SectionTitle
                heading={'All Classes information'}
            ></SectionTitle>
            {
                isApprove ? <>
                    <div className='grid grid-cols-3 my-10 gap-3'>
                        {
                            cardData?.map(data => <ClassesCard
                                key={data._id}
                                data={data}
                            ></ClassesCard>)
                        }
                    </div>
                </>:
                <></>
            }
        </div>
    );
};

export default Classes;
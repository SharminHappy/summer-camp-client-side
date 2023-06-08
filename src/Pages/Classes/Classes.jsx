import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ClassesCard from "./ClassesCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Classes = () => {
    const loadedClaData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>SPSC@MP | Classes</title>
            </Helmet>
            <SectionTitle
            heading={'All Classes information'}
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-3'>
                {
                    loadedClaData.map(data => <ClassesCard
                        key={data._id}
                        data={data}
                    >
                    </ClassesCard>
                    )
                }
            </div>
        </div>
    );
};

export default Classes;
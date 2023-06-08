import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularClasses = () => {

    const [pClasses, setPClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setPClasses(data)
            })
    }, [])
    return (
        <div className="my-5">
            <SectionTitle
            heading={'Popular Classes'}
            >
            </SectionTitle>
            <div className="grid lg:grid-cols-3 justify-center items-center gap-3 ">
                {
                    pClasses.map(pClass=><PopularClassCard
                    key={pClass._id}
                    pClass={pClass}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;
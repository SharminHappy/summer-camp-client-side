import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructors = () => {
    const [pInstructors, setPInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setPInstructors(data)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading={'Popular Instructors'}
            ></SectionTitle>
            <div className="grid lg:grid-cols-3 justify-center items-center gap-3">
                {
                    pInstructors.map(pInstructor=><PopularInstructorCard
                    key={pInstructor._id}
                    pInstructor={pInstructor}
                    ></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;
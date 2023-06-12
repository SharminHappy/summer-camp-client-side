import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularClasses = () => {

    const [pClasses, setPClasses] = useState([]);
    // const [sort, setSort] = useState();
    // const [unsort, setUnsort] = useState();
    // const [view, setView] = useState();
    // const [flag, setFlag] = useState(0);

    // .sort((a, b) => {
    //     return b.enrollment - a.enrollment;
    // })
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setPClasses(data)


            })
    }, [])
    // const handlesort = () => {
    //     console.log('i am unhappy')
    //     if (flag == 0) {

    //         setFlag(1)

    //     }
    //     else {

    //         setFlag(0)


    //     }

    // }
    return (
        <div className="my-5">
            <SectionTitle
                heading={'Popular Classes'}
            >
            </SectionTitle>
            {/* <button onClick={handlesort}>sort</button> */}
            <div className="grid lg:grid-cols-3 justify-center items-center gap-3 ">
                {

                    pClasses.map(pClass => <PopularClassCard
                        key={pClass._id}
                        pClass={pClass}
                    ></PopularClassCard>)



                }
            </div>
        </div>
    );
};

export default PopularClasses;
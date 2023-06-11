import { useEffect } from "react";


const MyClass = () => {

    useEffect(()=>{
        fetch('http://localhost:5000/dashboard/myclasses')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <h1>here are all my class</h1>
        </div>
    );
};

export default MyClass;
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import useSelect from "../../../hooks/useSelect";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_payment_PK);

const Payment = () => {
    const [select] = useSelect();
    console.log(select)
   const {id}=useParams();
   const [item,setItem]=useState({});
   useEffect(()=>{
    const data=select.find(i=>i._id==id)
    setItem(data);
   },[id])
   console.log(item);

    return (
        <div key={item?._id}>
            <SectionTitle
                heading={`Payment for ${item?.class_name}`}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutFrom price={item?.price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;








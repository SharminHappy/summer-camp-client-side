import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";


const CheckoutFrom = ({ price, item, select }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure, navigate] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // const [availableSeats, setAvailableSeats] = useState(0);
    // const navigate = useNavigate();

    const currentPrice = parseFloat(price);
    const from = location.state?.from?.pathname || "/myselectedclasses";
    useEffect(() => {
        if (currentPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: currentPrice })
                .then(data => {
                    // console.log(data.data.clientSecret)
                    setClientSecret(data.data.clientSecret);

                })

        }

    }, [currentPrice, user])

    console.log(item.classId);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('[paymentMethod]', paymentMethod);
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || '',
                        email: user?.email || ''
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const updatedSeats = item.available_seats - 1;
            axiosSecure.patch(`/classes/${item.classId}`)
            .then(res=>console.log(res))




            // save payment information to the server
            const payment = {
                name: user?.displayName,
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: select.length,
                selectItem: item._id,
                classItem: item.classId,
                itemName: item.class_name,
                status: 'pending',
                availableSeats: updatedSeats,
                image:item.image,
            }
            // console.log(payment);
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.result.insertedId) {
                        // navigate('/myselectedclasses', { state: { from: location } })
                    }
                })
                // TODO:navigation
               
        }
    }

    return (
        <>
            <form className="w-1/2 m-8 mx-auto " onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline mt-5 btn-sm  btn-warning" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=" text-red-700">{cardError}</p>
            }
            {
                transactionId && (
                    <>
                        <p className=" text-green-500 text-center">Transaction succeeded:{transactionId}</p>
                    </>

                )






            }
        </>
    );
};

export default CheckoutFrom;
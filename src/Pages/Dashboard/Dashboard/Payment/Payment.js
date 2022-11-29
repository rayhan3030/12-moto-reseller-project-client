// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



// const Payment = () => {
//     const booking = useLoaderData();

//     return (
//         <div>
//             <h3 className='text-3xl'>Payment for {booking.name}</h3>
//             <p className='text-xl text-white '>Please Pay TK, <span className='font-bold bg-black'>{booking.resaleprice}</span> for your Bike.</p>
//             <div className='w-96 my-12 bg-white text-black border rounded-lg p-5'>
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm
//                         booking={booking}
//                     />
//                 </Elements>
//             </div>
//         </div>
//     );
// };

// export default Payment;
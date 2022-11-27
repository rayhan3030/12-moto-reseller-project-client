import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryIdCard from './CategoryIdCard';

const CategoryId = () => {
    const [bikes, setBikes] = useState(null) // empty object dibo error khaile
    const products = useLoaderData()
    return (
        <div className='mt-10'>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3 h-screen place-items-center'>
                {
                    products?.map(product => <CategoryIdCard
                        key={product?._id}
                        product={product}
                        setBikes={setBikes}
                    ></CategoryIdCard>)
                }
            </div>
            {
                bikes &&
                <BookingModal
                    bikes={bikes}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryId;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryIdCard from './CategoryIdCard';

const CategoryId = () => {
    const products = useLoaderData()
    return (
        <div className='mt-10'>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3 mt-10  h-screen place-items-center'>
                {
                    products?.map(product => <CategoryIdCard
                        key={product?._id}
                        product={product}
                    ></CategoryIdCard>)
                }
            </div>
        </div>
    );
};

export default CategoryId;
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Category3 from './Category3';

const Category = () => {
    // const [categories, setCategories] = useState([]);

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('https://moto-resale-server.vercel.app/category')
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('https://moto-resale-server.vercel.app/category')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1> this is  category- {categories.length}</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
                {
                    categories.map(category => <Category3
                        key={category._id}
                        category={category}
                    ></Category3>)
                }
            </div>
        </div>
    );
};

export default Category;
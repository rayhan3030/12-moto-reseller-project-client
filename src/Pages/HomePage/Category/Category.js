import React, { useEffect, useState } from 'react';
import Category3 from './Category3';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1> this is  category- {categories.length}</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
                {
                    categories.map(category => <Category3
                        key={category.id}
                        category={category}
                    ></Category3>)
                }
            </div>
        </div>
    );
};

export default Category;
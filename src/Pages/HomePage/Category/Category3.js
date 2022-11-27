import React from 'react';
import { Link } from 'react-router-dom';

const Category3 = ({ category }) => {
    const { catname, image, _id } = category
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-40 h-44 rounded' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center ">Bike Segment: {catname}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-center">
                    <Link to={`/category/${_id}`}>
                        <button className="btn  hover:text-white normal-case text-xl bg-gradient-to-r from-yellow-400 to-yellow-100 text-black ">View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category3;
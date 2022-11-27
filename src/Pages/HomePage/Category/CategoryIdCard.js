import React from 'react';

const CategoryIdCard = ({ product, setBikes }) => {
    const { name, img, cc, resaleprice, originalprice, yearsofuse, posttime, sellername, location } = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl border  text-white ">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl h-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <div className="card-actions  items-center text-center">

                    <label
                        htmlFor="booking-modal"
                        className="btn  hover:text-white normal-case text-xl bg-gradient-to-r from-yellow-400 to-yellow-100 text-black"
                        onClick={() => setBikes(product)}
                    >Book NOW</label>
                </div>
                <div className="divider"></div>
            </div>
            <div className='px-10 '>
                <p className='font-bold text-yellow-200'>Relevant info</p>
                <p><small>Bike CC</small>: <span className='font-bold'>{cc}</span></p>
                <p><small>Owner Name</small>: <span className='font-bold'>{sellername}</span></p>
                <p><small>Retail Price</small>: BDT, <span className='font-bold'>{originalprice}৳</span></p>
                <p><small>Asking Price</small>: BDT, <span className='font-bold'>{resaleprice}৳</span></p>
                <p><small>Item Location</small>: <span className='font-bold'>{location}</span></p>
                <br />
                <div className='flex gap-2 border'>
                    <p>Years of Use: {yearsofuse}|</p>
                    <p>Post Time: {posttime}</p>
                </div>
            </div>
            <div className="divider"></div>


        </div>
    );
};

export default CategoryIdCard;
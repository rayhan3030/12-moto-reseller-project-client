import React from 'react';
import banner1 from '../../../assets/banner1.gif'
import banner2 from '../../../assets/banner2.gif'

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <img className=' mx-auto rounded-t' src={banner2} alt="" />
            <img className='mx-auto rounded-b' src={banner1} alt="" />
        </div>
    );
};

export default Banner;
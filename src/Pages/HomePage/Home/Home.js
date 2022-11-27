import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ExtraCard from '../ExtraCard/ExtraCard';

const Home = () => {
    return (
        <div className='mx-5 mt-10'>
            <Banner></Banner>
            <ExtraCard></ExtraCard>
            <Category></Category>
        </div>
    );
};

export default Home;
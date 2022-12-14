import React from 'react';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ExtraCard from '../ExtraCard/ExtraCard';
import Leaflet from '../ExtraCard/Leaflet';

const Home = () => {
    return (
        <div className='mx-5 mt-10'>
            <Banner></Banner>
            <ExtraCard></ExtraCard>
            <Category></Category>
            <AdvertisedItem></AdvertisedItem>
            <Leaflet></Leaflet>
        </div>
    );
};

export default Home;
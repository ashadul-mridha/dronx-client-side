import React from 'react';
import Header from '../../Shared/Header/Header';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Feature></Feature>
            <Accessories></Accessories>
        </div>
    );
};

export default Home;
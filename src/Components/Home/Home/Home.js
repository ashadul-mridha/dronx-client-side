import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Feature></Feature>
            <HomeProducts></HomeProducts>
            <Accessories></Accessories>
            <Footer></Footer>
        </div>
    );
};

export default Home;
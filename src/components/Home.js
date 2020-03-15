import React from 'react';

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Banner from '../components/home/Banner';
import Pricing from '../components/home/Pricing';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Pricing />
            {/* how it works */}
            {/* levels */}
            <Footer />
        </React.Fragment>
    )
}

export default Home;
import React from 'react';

import SectionCarousel from 'components/SectionCarousel'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SectionAnimes from 'components/SectionAnimes'
import SectionWhatDoHere from 'components/SectionWhatDoHere'

const Home = () => {
    return (
        <>
        <Header />
        <SectionCarousel />
        <SectionWhatDoHere />
        <SectionAnimes />
        <Footer />
        </>
    )
}

export default Home;
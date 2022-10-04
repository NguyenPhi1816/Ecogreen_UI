import { useState, useEffect } from 'react';

import Home from '../components/Home';
import Product from '../components/Product';
import LargeSlider from '../components/LargeSlider';
import Gallery from '../components/Gallery';
import Agents from '../components/Agents';
import Services from '../components/Services';
import Videos from '../components/Videos';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';

function DefaultLayout() {
    const [offsetY, setOffsetY] = useState(0);

    function handleScroll() {
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Home />
            <Product />
            <LargeSlider />
            <Gallery />
            <Agents />
            <Services />
            <Blog />
            <Videos />
            <Footer />
            {offsetY >= 300 && <BackToTop id={'#home'} />}
        </>
    );
}

export default DefaultLayout;

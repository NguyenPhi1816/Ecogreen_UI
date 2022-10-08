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
    const [offsetWidth, setOffsetWidth] = useState(window.innerWidth);

    function handleScroll() {
        setOffsetY(window.pageYOffset);
    }

    function handleGetWidth() {
        setOffsetWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleGetWidth);

        return () => window.removeEventListener('resize', handleGetWidth);
    }, []);

    return (
        <>
            <Home width={offsetWidth} />
            <Product />
            <LargeSlider />
            <Gallery />
            <Agents />
            <Services />
            <Blog />
            <Videos width={offsetWidth} />
            <Footer />
            {offsetY >= 300 && <BackToTop id={'#home'} />}
        </>
    );
}

export default DefaultLayout;

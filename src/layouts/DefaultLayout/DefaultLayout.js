import LazyLoad from 'react-lazyload';

import Home from '../components/Home';
import Product from '../components/Product';
import LargeSlider from '../components/LargeSlider';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Videos from '../components/Videos';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';
import ContactButtons from '../../components/ContactButtons';

function DefaultLayout({ offsetY, offsetWidth }) {
    return (
        <>
            <Home width={offsetWidth} id="home" />
            <LazyLoad>
                <Product offsetWidth={offsetWidth} id="product" />
            </LazyLoad>
            <LazyLoad>
                <LargeSlider id="about" />
            </LazyLoad>
            <LazyLoad>
                <Gallery id="gallery" />
            </LazyLoad>
            <LazyLoad>
                <Videos width={offsetWidth} id="videos" />
            </LazyLoad>
            <LazyLoad>
                <Services id="services" />
            </LazyLoad>
            <LazyLoad>
                <Footer />
            </LazyLoad>
            {offsetY >= 300 && <BackToTop />}
            {offsetY >= 300 && <ContactButtons width={offsetWidth} />}
        </>
    );
}

export default DefaultLayout;

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
            <Product offsetWidth={offsetWidth} id="product" />
            <LargeSlider id="about" />
            <Gallery id="gallery" />
            <Videos width={offsetWidth} id="videos" />
            <Services id="services" />
            <Footer />
            {offsetY >= 300 && <BackToTop />}
            {offsetY >= 300 && <ContactButtons width={offsetWidth} />}
        </>
    );
}

export default DefaultLayout;

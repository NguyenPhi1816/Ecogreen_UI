import Home from '../components/Home';
import Product from '../components/Product';
import LargeSlider from '../components/LargeSlider';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Videos from '../components/Videos';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';
import ContactButtons from '../../components/ContactButtons';
import Utilities from '../components/Utilities';

function DefaultLayout({ offsetY, offsetWidth }) {
    return (
        <>
            <Home width={offsetWidth} id="home" />
            <Product offsetWidth={offsetWidth} id="product" />
            <LargeSlider id="about" />
            <Gallery id="gallery" />
            <Utilities offsetWidth={offsetWidth} id="utilities" />
            <Videos width={offsetWidth} id="videos" />
            <Services id="services" />
            <Footer />
            {offsetY >= 300 && <BackToTop />}
            <ContactButtons width={offsetWidth} />
        </>
    );
}

export default DefaultLayout;

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

function DefaultLayout({ offsetY, offsetWidth }) {
    return (
        <>
            <Home width={offsetWidth} />
            <Product offsetWidth={offsetWidth} />
            <LargeSlider />
            <Gallery />
            <Agents />
            <Services />
            <Blog />
            <Videos width={offsetWidth} />
            <Footer />
            {offsetY >= 300 && <BackToTop />}
        </>
    );
}

export default DefaultLayout;

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
import NavbarBottom from '../../components/NavbarBottom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Form from '../../components/Form';

const cx = classNames.bind(styles);

function DefaultLayout({ offsetY, offsetWidth }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Home width={offsetWidth} id="home" name="home" />
            <Product offsetWidth={offsetWidth} id="product" name="product" />
            <LargeSlider id="about" name="about" />
            <Gallery id="gallery" name="gallery" />
            <Utilities
                offsetWidth={offsetWidth}
                id="utilities"
                name="utilities"
            />
            <Videos width={offsetWidth} id="videos" name="videos" />
            <Services id="services" name="services" />
            <Footer />
            {offsetY >= 300 && offsetWidth > 767 && (
                <BackToTop
                    styles={
                        offsetWidth < 768
                            ? {
                                  bottom: '85px',
                                  right: '10px',
                              }
                            : {}
                    }
                />
            )}
            {offsetWidth > 768 && <ContactButtons width={offsetWidth} />}
            {offsetWidth <= 768 && offsetY >= 100 && (
                <NavbarBottom
                    offsetWidth={offsetWidth}
                    setShowForm={setShowForm}
                />
            )}

            {showForm && (
                <div className={cx('modal-form')}>
                    <div className={cx('modal')}>
                        <button
                            className={cx('close-btn')}
                            onClick={() => setShowForm(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <Form type={'vertical'} className={cx('form')} />
                    </div>
                </div>
            )}
        </>
    );
}

export default DefaultLayout;

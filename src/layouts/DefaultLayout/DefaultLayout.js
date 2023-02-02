import { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

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
import Form from '../../components/Form';
import { Context } from '../../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const [showForm, setShowForm] = useState(false);
    const { offsetY } = useContext(Context);

    return (
        <>
            <Home id="home" />
            <Product id="product" />
            <LargeSlider id="about" />
            <Gallery id="gallery" />
            <Utilities id="utilities" />
            <Videos id="videos" />
            <Services id="services" />
            <Footer />
            {offsetY >= 300 && <BackToTop />}
            <ContactButtons />
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

import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Property.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBath,
    faBed,
    faChevronRight,
    faLocationDot,
    faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../../components/Navbar';
import NavbarMobile from '../../../components/NavbarMobile';
import ImagesModal from '../../../components/ImagesModal';
import { LanguageContext } from '../../../App';

const cx = classNames.bind(styles);

function Property({ offsetWidth, data = {} }) {
    const { language } = useContext(LanguageContext);
    const [marginTop, setMarginTop] = useState('125px');
    const [showImagesSlider, setShowImagesSlider] = useState(false);

    useEffect(() => {
        if (offsetWidth >= 768 && offsetWidth < 1000) {
            setMarginTop('95px');
        } else if (offsetWidth < 768) {
            setMarginTop('60px');
        } else {
            setMarginTop('125px');
        }
    }, [offsetWidth]);

    useEffect(() => {
        if (showImagesSlider) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showImagesSlider]);

    return (
        <section className={cx('property')} id="property">
            {offsetWidth < 1000 ? (
                <NavbarMobile
                    styles={offsetWidth >= 768 ? { top: '35px' } : {}}
                />
            ) : (
                <Navbar styles={{ color: 'black' }} logoColor="black" />
            )}

            <div className={cx('property-container')} id="apartment-infor">
                <div
                    className={cx('title-wrapper')}
                    style={{ marginTop: marginTop }}
                >
                    <div className={cx('title-header')}>
                        <div className={cx('title-header-path')}>
                            <Link to="/">Home</Link>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <p>{data.name}</p>
                        </div>
                    </div>
                    <div className={cx('title-body')}>
                        <div>
                            <div className={cx('property-name')}>
                                {data.name}
                            </div>
                            <div className={cx('property-price')}>
                                {data.price}
                            </div>
                        </div>
                        <div>
                            <div className={cx('primary-label')}>
                                {language === 'en' ? 'FOR RENT' : 'CHO THUÊ'}
                            </div>
                        </div>
                    </div>
                    <div className={cx('title-footer')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>{data.address}</p>
                    </div>
                </div>

                <div className={cx('property-images')}>
                    <div className={cx('property-images-grid')}>
                        <div
                            className={cx('property-image', 'img1')}
                            onClick={() => setShowImagesSlider(true)}
                        >
                            <img src={data.images[0]} alt="property images" />
                        </div>
                        {offsetWidth >= 678 && (
                            <>
                                <div
                                    className={cx('property-image', 'img2')}
                                    onClick={() => setShowImagesSlider(true)}
                                >
                                    <img
                                        src={data.images[1]}
                                        alt="property images"
                                    />
                                </div>
                                <div
                                    className={cx('property-image', 'img3')}
                                    onClick={() => setShowImagesSlider(true)}
                                >
                                    {data.images.length - 3 > 0 && (
                                        <span className={cx('the-rest')}>
                                            {data.images.length - 3} More
                                        </span>
                                    )}
                                    <img
                                        src={data.images[2]}
                                        alt="property images"
                                    />
                                </div>
                            </>
                        )}
                        {offsetWidth < 678 && (
                            <div className={cx('the-rest-mobile')}>
                                <span>+ {data.images.length - 1} More</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className={cx('property-summary')}>
                    {offsetWidth < 768 && (
                        <>
                            <div className={cx('title')}>
                                {language === 'en' ? 'Overview' : 'Tổng quan'}
                            </div>
                            <div className={cx('property-id')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property ID:'
                                        : 'Mã căn hộ'}
                                </h4>
                                <p>{data.id}</p>
                            </div>
                        </>
                    )}
                    <div className={cx('property-type')}>
                        <h4>{data.type}</h4>
                        <p>
                            {language === 'en'
                                ? 'Property Type'
                                : 'Loại căn hộ'}
                        </p>
                    </div>
                    <div className={cx('property-bedrooms')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faBed}
                                className={cx('property-icon')}
                            />
                            <h4>{data.bedrooms}</h4>
                        </div>
                        <p>{language === 'en' ? 'Bedrooms' : 'Phòng ngủ'}</p>
                    </div>
                    <div className={cx('property-bathrooms')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faBath}
                                className={cx('property-icon')}
                            />
                            <h4>{data.bathrooms}</h4>
                        </div>
                        <p>{language === 'en' ? 'Bathrooms' : 'Phòng tắm'}</p>
                    </div>
                    <div className={cx('property-area')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faRulerCombined}
                                className={cx('property-icon')}
                            />
                            <h4>{data.area}</h4>
                        </div>
                        <p>
                            m<sup>2</sup>
                        </p>
                    </div>
                </div>
            </div>
            {showImagesSlider && (
                <ImagesModal
                    offsetWidth={offsetWidth}
                    handleClose={() => {
                        setShowImagesSlider(false);
                    }}
                    data={data}
                />
            )}
        </section>
    );
}

export default Property;

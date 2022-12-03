import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Property.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBath,
    faBed,
    faCalendar,
    faChevronRight,
    faLocationDot,
    faRulerCombined,
    faSquareParking,
} from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../../components/Navbar';
import NavbarMobile from '../../../components/NavbarMobile';
import InforBar from '../../../components/InforBar';
import ImagesModal from '../../../components/ImagesModal';

const cx = classNames.bind(styles);

function Property({ offsetWidth, data = {} }) {
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
            {offsetWidth >= 768 && <InforBar />}
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
                            {/* <div className={cx('property-price')}>
                                {data.price}
                            </div> */}
                        </div>
                        <div>
                            <div className={cx('primary-label')}>FEATURED</div>
                            <div className={cx('secondary-label')}>
                                FOR RENT
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
                            <div className={cx('title')}>Overview</div>
                            <div className={cx('property-id')}>
                                <h4>Property ID:</h4>
                                <p>{data.id}</p>
                            </div>
                        </>
                    )}
                    <div className={cx('property-type')}>
                        <h4>{data.type}</h4>
                        <p>Property Type</p>
                    </div>
                    <div className={cx('property-bedrooms')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faBed}
                                className={cx('property-icon')}
                            />
                            <h4>{data.bedrooms}</h4>
                        </div>
                        <p>Bedrooms</p>
                    </div>
                    <div className={cx('property-bathrooms')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faBath}
                                className={cx('property-icon')}
                            />
                            <h4>{data.bathrooms}</h4>
                        </div>
                        <p>Bathrooms</p>
                    </div>
                    <div className={cx('property-garage')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faSquareParking}
                                className={cx('property-icon')}
                            />
                            <h4>{data.parkingLot}</h4>
                        </div>
                        <p>Garage</p>
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
                    <div className={cx('property-year-built')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faCalendar}
                                className={cx('property-icon')}
                            />
                            <h4>{data.yearBuilt}</h4>
                        </div>
                        <p>Year Built</p>
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

import { useState, useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Property.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBath,
    faBed,
    faImages,
    faLocationDot,
    faRulerCombined,
} from '@fortawesome/free-solid-svg-icons';

import ImagesModal from '../../../components/ImagesModal';
import { LanguageContext } from '../../../App';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const cx = classNames.bind(styles);

function Property({ offsetWidth, data = {} }) {
    const swiperRef = useRef(null);
    const { language } = useContext(LanguageContext);
    const [showImagesSlider, setShowImagesSlider] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (showImagesSlider) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showImagesSlider]);

    useEffect(() => {
        let current = currentSlide + 1;
        if (current > data.images.length) {
            current = 0;
        }
        swiperRef.current.swiper.slideTo(current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);

    return (
        <section className={cx('property')} id="property">
            <div className={cx('wrapper')}>
                <div className={cx('property-images')}>
                    <div className={cx('property-images-grid')}>
                        <div className={cx('property-image')}>
                            <button
                                className={cx('more-image')}
                                onClick={() => setShowImagesSlider(true)}
                            >
                                <FontAwesomeIcon icon={faImages} />
                            </button>
                            <Swiper
                                modules={[Navigation, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                loop
                                autoplay={{ delay: 5000 }}
                                ref={swiperRef}
                            >
                                {data.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={item}
                                            alt="images"
                                            className={cx('slide-image')}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={cx('slider')}>
                            <Swiper
                                modules={[Navigation, A11y]}
                                spaceBetween={10}
                                slidesPerView={5}
                                navigation
                                loop
                            >
                                {data.images.map((item, index) => (
                                    <SwiperSlide
                                        className={cx('slide')}
                                        key={index}
                                    >
                                        <img
                                            src={item}
                                            alt="images"
                                            onClick={() => {
                                                setCurrentSlide(index);
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className={cx('property-container')} id="apartment-infor">
                    <div className={cx('title-wrapper')}>
                        <div className={cx('title-body')}>
                            <div className={cx('labels')}>
                                <div className={cx('primary-label')}>
                                    {language === 'en'
                                        ? 'FOR RENT'
                                        : 'CHO THU??'}
                                </div>
                                <div className={cx('secondary-label')}>
                                    {language === 'en' ? 'AVAILABLE' : 'C?? S???N'}
                                </div>
                            </div>
                            <div className={cx('name-price')}>
                                <div className={cx('property-name')}>
                                    {data.name}
                                </div>
                                <div className={cx('property-price')}>
                                    {data.price}
                                </div>
                            </div>
                        </div>
                        <div className={cx('title-footer')}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('property-summary')}>
                {offsetWidth < 768 && (
                    <>
                        <div className={cx('title')}>
                            {language === 'en' ? 'Overview' : 'T???ng quan'}
                        </div>
                        <div className={cx('property-id')}>
                            <h4>
                                {language === 'en'
                                    ? 'Property ID:'
                                    : 'M?? c??n h???'}
                            </h4>
                            <p>{data.id}</p>
                        </div>
                    </>
                )}
                <div className={cx('property-type')}>
                    <h4>{data.type}</h4>
                    <p>{language === 'en' ? 'Property Type' : 'Lo???i c??n h???'}</p>
                </div>
                <div className={cx('property-bedrooms')}>
                    <div>
                        <FontAwesomeIcon
                            icon={faBed}
                            className={cx('property-icon')}
                        />
                        <h4>{data.bedrooms}</h4>
                    </div>
                    <p>{language === 'en' ? 'Bedrooms' : 'Ph??ng ng???'}</p>
                </div>
                <div className={cx('property-bathrooms')}>
                    <div>
                        <FontAwesomeIcon
                            icon={faBath}
                            className={cx('property-icon')}
                        />
                        <h4>{data.bathrooms}</h4>
                    </div>
                    <p>{language === 'en' ? 'Bathrooms' : 'Ph??ng t???m'}</p>
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

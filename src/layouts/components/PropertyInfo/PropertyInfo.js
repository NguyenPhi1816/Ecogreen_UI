import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PropertyInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faCircleCheck,
    faMessage,
    faPhone,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Form from '../../../components/Form';
import ProductItem from '../../../components/ProductItem';
import ImagesModal from '../../../components/ImagesModal';

const cx = classNames.bind(styles);

function PropertyInfo({ offsetWidth, offsetY, currentItem, data }) {
    const rightSectionRef = useRef();
    const [anotherItem, setAnotherItem] = useState({});

    const styleNormal = {
        paddingTop: '1px',
        paddingBottom: '1px',
        position: 'static',
        transform: 'none',
        top: '0px',
        left: '66,0625vw',
        width: '100%',
        maxWidth: '324px',
    };

    const styleFixed = {
        paddingTop: '1px',
        paddingBottom: '1px',
        position: 'fixed',
        transform: 'translateY(20px)',
        top: '0px',
        left: '66,0625vw',
        width: `${
            !!rightSectionRef.current
                ? rightSectionRef.current.offsetWidth - 30
                : 324
        }px`,
    };

    const styleAbsolute = {
        paddingTop: '1px',
        paddingBottom: '1px',
        position: 'absolute',
        transform: `translateY(0px)`,
        bottom: '0px',
        left: '66,0625vw',
        width: '100%',
        maxWidth: '324px',
    };

    const topRef = useRef();
    const formRef = useRef();
    const videoRef = useRef();
    const [formStyles, setFormStyles] = useState(styleNormal);
    const [showForm, setShowForm] = useState(false);
    const [showImagesSlider, setShowImagesSlider] = useState(false);

    useEffect(() => {
        if (formRef.current && topRef.current) {
            if (
                offsetY >= topRef.current.offsetTop &&
                offsetY + formRef.current.offsetHeight <
                    topRef.current.offsetTop + topRef.current.offsetHeight
            ) {
                setFormStyles(styleFixed);
            } else if (offsetY < topRef.current.offsetTop) {
                setFormStyles(styleNormal);
            } else {
                setFormStyles(styleAbsolute);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offsetY]);

    return (
        <section className={cx('property-info')} ref={topRef}>
            <div className={cx('property-info-container')} id="about-apartment">
                <div className={cx('left-section')}>
                    <div className={cx('description')}>
                        <div className={cx('title')}>
                            <h3>Description</h3>
                        </div>
                        <div className={cx('content')}>
                            <p>
                                “Eco Green Saigon” is located at the southern
                                gateway of Ho Chi Minh City. It is the
                                intersection of 3 largest urban areas: Center of
                                Ho Chi Minh City - Phu My Hung International
                                Financial Center - New administrative center of
                                Thu Thiem city.
                            </p>
                            <p>
                                Eco Green Saigon is a complex of commerce,
                                services, hotels and apartments with a system of
                                high-class internal utilities.
                            </p>
                            <p>
                                Bustling commercial center and Grand Hyatt hotel
                                with 69 floors (600 rooms) and 30,000 square
                                meters. Along with a large-scale wedding
                                conference center of 2,300m2 and an automatic
                                generator system to supply electricity to all
                                apartments when a local power failure occurs.
                                Eco Green apartment project District 7 is a
                                5-star complex with a huge scale of 14.36
                                hectares including 7 apartment blocks, 1 office
                                building - Park Hyatt luxury hotel - the tallest
                                tower in District 7 with height 68 Floors.
                            </p>
                        </div>
                    </div>
                    <div className={cx('details')}>
                        <div className={cx('title')}>
                            <h3>Details</h3>
                            <div>
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    style={{
                                        color: '#636363',
                                        marginRight: '8px',
                                    }}
                                />
                                <p>Updated on April 4, 2020 at 10:23 pm</p>
                            </div>
                        </div>
                        <div className={cx('details-info')}>
                            <div className={cx('details-info-item')}>
                                <h4>Property ID:</h4>
                                <p>{currentItem.id}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>Price:</h4>
                                <p>{currentItem.price}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>Property size:</h4>
                                <p>
                                    {currentItem.area} m<sup>2</sup>
                                </p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>Bedrooms:</h4>
                                <p>{currentItem.bedrooms}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>Property Type:</h4>
                                <p>{currentItem.type}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>Bathrooms:</h4>
                                <p>{currentItem.bathrooms}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('features')}>
                        <div className={cx('title')}>
                            <h3>Features</h3>
                        </div>
                        <div className={cx('features-container')}>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Air Conditioning</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Barbeque</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Dryer</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Gym</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Laundry</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Lawn</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Microware</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Refrigerator</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Swimming pool</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>TV Cable</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Washer</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>WiFi</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Window Coverings</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Coffee Shop</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Convenience Store</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video')} id="apartment-video">
                        <div className={cx('title')}>
                            <h3>Video</h3>
                        </div>
                        <div className={cx('video-container')} ref={videoRef}>
                            <iframe
                                src={currentItem.video['video-url']}
                                width={`${
                                    videoRef.current &&
                                    videoRef.current.offsetWidth
                                }`}
                                height={`${
                                    ((videoRef.current &&
                                        videoRef.current.offsetWidth) /
                                        16) *
                                    9
                                }`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className={cx('full-form')} id="apartment-form">
                        <div className={cx('title')}>
                            <h3>Enquire About This Property</h3>
                        </div>
                        <div className={cx('form-container')}>
                            <Form
                                type={
                                    offsetWidth >= 768
                                        ? 'horizontal'
                                        : 'vertical'
                                }
                                className={cx('form-custom')}
                            />
                        </div>
                    </div>
                    <div
                        className={cx('another-property')}
                        id="another-apartments"
                    >
                        <div className={cx('title')}>
                            <h3>Similar Listings</h3>
                        </div>
                        {data.map(
                            (item) =>
                                currentItem.id !== item.id && (
                                    <Link
                                        key={item.id}
                                        to={`/productId=${item.id}`}
                                    >
                                        <ProductItem
                                            data={item}
                                            className={cx('product')}
                                            offsetWidth={offsetWidth}
                                            handleExpandClick={(e) => {
                                                e.preventDefault();
                                                let selectedItem = data.filter(
                                                    (i) => i.id === item.id,
                                                );
                                                setAnotherItem(selectedItem[0]);
                                                setShowImagesSlider(true);
                                            }}
                                        />
                                    </Link>
                                ),
                        )}
                    </div>
                </div>
                {offsetWidth >= 1024 && (
                    <div className={cx('right-section')} ref={rightSectionRef}>
                        <div
                            className={cx('form-container')}
                            ref={formRef}
                            style={formStyles}
                        >
                            <Form type="vertical" />
                        </div>
                    </div>
                )}

                {offsetWidth < 768 && (
                    <nav className={cx('navbar-bottom')}>
                        <div>
                            <button
                                className={cx('chat')}
                                onClick={() => setShowForm(true)}
                            >
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                            <a href={`tel:0941256257`} className={cx('phone')}>
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        </div>
                    </nav>
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
                            <Form type={'vertical'} />
                        </div>
                    </div>
                )}

                {showImagesSlider && (
                    <ImagesModal
                        offsetWidth={offsetWidth}
                        handleClose={() => {
                            setShowImagesSlider(false);
                        }}
                        data={anotherItem}
                    />
                )}
            </div>
        </section>
    );
}

export default PropertyInfo;

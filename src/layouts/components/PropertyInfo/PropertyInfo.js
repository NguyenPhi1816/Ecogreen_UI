import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PropertyInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faMessage,
    faPhone,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Form from '../../../components/Form';
import ProductItem from '../../../components/ProductItem';
import ImagesModal from '../../../components/ImagesModal';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';
import Property from '../Property/Property';

const cx = classNames.bind(styles);

function PropertyInfo({ offsetWidth, offsetY, currentItem, data }) {
    const DESKTOP_AMOUNT = 6;
    const MOBILE_AMOUNT = 4;
    const { language } = useContext(LanguageContext);
    const rightSectionRef = useRef();
    const [anotherItem, setAnotherItem] = useState({});
    const [amount, setAmount] = useState(() =>
        offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT,
    );

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
        top: '60px',
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

    const handleLoadMore = (e) => {
        if (amount === data.length) {
            setAmount(() =>
                offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT,
            );
        } else {
            e.preventDefault();
            const addition =
                offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT;
            let newAmount = amount + addition;
            if (newAmount > data.length) {
                newAmount = data.length;
            }
            setAmount(newAmount);
        }
    };

    return (
        <section className={cx('property-info')} ref={topRef}>
            <div className={cx('blank')}></div>
            <div className={cx('property-info-container')} id="about-apartment">
                <div className={cx('left-section')}>
                    <Property offsetWidth={offsetWidth} data={currentItem} />

                    <div className={cx('details')}>
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en' ? 'Details' : 'Chi tiết'}
                            </h3>
                        </div>
                        <div className={cx('details-info')}>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property ID:'
                                        : 'Mã căn hộ'}
                                </h4>
                                <p>{currentItem.id}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>{language === 'en' ? 'Price:' : 'Giá'}</h4>
                                <p>{currentItem.price}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property size:'
                                        : 'Diện tích'}
                                </h4>
                                <p>
                                    {currentItem.area} m<sup>2</sup>
                                </p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Bedrooms:'
                                        : 'Phòng ngủ'}
                                </h4>
                                <p>{currentItem.bedrooms}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property Type:'
                                        : 'Loại căn hộ'}
                                </h4>
                                <p>{currentItem.type}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Bathrooms:'
                                        : 'Phòng tắm'}
                                </h4>
                                <p>{currentItem.bathrooms}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en' ? 'Description' : 'Mô tả'}
                            </h3>
                        </div>
                        <div className={cx('content')}>
                            {language === 'en' ? (
                                <>
                                    <p>
                                        “Eco Green Saigon” is located at the
                                        southern gateway of Ho Chi Minh City. It
                                        is the intersection of 3 largest urban
                                        areas: Center of Ho Chi Minh City - Phu
                                        My Hung International Financial Center -
                                        New administrative center of Thu Thiem
                                        city.
                                    </p>
                                    <p>
                                        Eco Green Saigon is a complex of
                                        commerce, services, hotels and
                                        apartments with a system of high-class
                                        internal utilities.
                                    </p>
                                    <p>
                                        Bustling commercial center and Grand
                                        Hyatt hotel with 69 floors (600 rooms)
                                        and 30,000 square meters. Along with a
                                        large-scale wedding conference center of
                                        2,300m2 and an automatic generator
                                        system to supply electricity to all
                                        apartments when a local power failure
                                        occurs. Eco Green apartment project
                                        District 7 is a 5-star complex with a
                                        huge scale of 14.36 hectares including 7
                                        apartment blocks, 1 office building -
                                        Park Hyatt luxury hotel - the tallest
                                        tower in District 7 with height 68
                                        Floors.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        “Eco Green Sài Gòn” tọa lạc ngay cửa ngõ
                                        phía Nam Thành Phố. Là nơi giao thoa của
                                        3 khu đô thị lớn bậc nhất: Trung tâm Tp
                                        Hồ Chí Minh - Trung tâm tài chính quốc
                                        tế Phú Mỹ Hưng - Trung tâm hành chính
                                        mới của thành phố Thủ Thiêm.
                                    </p>
                                    <p>
                                        Eco Green Saigon là tổ hợp thương mại,
                                        dịch vụ, khách sạn và nhà ở cao cấp cùng
                                        với hệ thống tiện ích nội khu đẳng cấp,
                                        trang thiết bị nội thất cao cấp đem đến
                                        một môi trường sống xanh an lành.
                                    </p>
                                    <p>
                                        Trung tâm thương mại sầm uất và khách
                                        sạn 6 sao Grand Hyatt cao 69 tầng (600
                                        phòng) rộng 30.000m2. Cùng với trung tâm
                                        hội nghị tiệc cưới với quy mô lớn rộng
                                        2.300m2 và hệ thông máy phát điện âm tự
                                        động cung cấp điện cho toàn bộ các căn
                                        hộ khi xảy ra mất điện cục bộ. Dự án căn
                                        hộ Eco Green Quận 7 là Khu Phức Hợp đẳng
                                        cấp 5 sao quy mô cực lớn 14,36 hecta bao
                                        gồm 7 Block căn hộ, 1 tòa Văn phòng –
                                        Khách sạn cao cấp Park Hyatt - Tòa tháp
                                        cao nhất Quận 7 với chiều cao 68 Tầng.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={cx('features')}>
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en' ? 'Features' : 'Tính năng'}
                            </h3>
                        </div>
                        <div className={cx('features-container')}>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Air Conditioning'
                                        : 'Điều hòa'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Barbeque' : 'BBQ'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Dryer' : 'Máy sấy'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Gym</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Laundry' : 'Giặt ủi'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Lawn' : 'Bãi cỏ'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Microware'
                                        : 'Lò vi sóng'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Refrigerator'
                                        : 'Tủ lạnh'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Swimming pool'
                                        : 'Hồ bơi'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>TV</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Washer' : 'Máy giặt'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>WiFi</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Window Coverings'
                                        : 'Màn che cửa sổ'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Coffee Shop'
                                        : 'Cửa hàng cà phê'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Convenience Store'
                                        : 'Cửa hàng tiện lợi'}
                                </span>
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
                            <h3>
                                {language === 'en'
                                    ? 'Enquire About This Property'
                                    : 'Thông tin thêm về căn hộ này'}
                            </h3>
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
                            <h3>
                                {language === 'en'
                                    ? 'Similar Listings'
                                    : 'Danh sách căn hộ tương tự'}
                            </h3>
                        </div>
                        {data.slice(0, amount).map(
                            (item) =>
                                item.id !== currentItem.id && (
                                    <ProductItem
                                        key={item.id}
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
                                ),
                        )}
                        <div className={cx('load-more-container')}>
                            <a
                                href={'#another-apartments'}
                                className={cx('load-more')}
                                onClick={(e) => handleLoadMore(e)}
                            >
                                {amount === data.length
                                    ? language === 'en'
                                        ? 'HIDE'
                                        : 'ẨN BỚT'
                                    : language === 'en'
                                    ? 'LOAD MORE'
                                    : 'TẢI THÊM'}
                            </a>
                        </div>
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
                            <Form type={'vertical'} className={cx('form')} />
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

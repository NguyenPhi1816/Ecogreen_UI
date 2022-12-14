import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './PropertyInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import Form from '../../../components/Form';
import ProductItem from '../../../components/ProductItem';
import ImagesModal from '../../../components/ImagesModal';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';
import Property from '../Property/Property';
import NavbarBottom from '../../../components/NavbarBottom';
import { Link } from 'react-router-dom';

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
            <div
                className={cx('property-info-container')}
                id="about-apartment"
                name="about-apartment"
            >
                <div className={cx('left-section')}>
                    <Property offsetWidth={offsetWidth} data={currentItem} />

                    <div className={cx('details')}>
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en' ? 'Details' : 'Chi ti???t'}
                            </h3>
                        </div>
                        <div className={cx('details-info')}>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property ID:'
                                        : 'M?? c??n h???'}
                                </h4>
                                <p>{currentItem.id}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>{language === 'en' ? 'Price:' : 'Gi??'}</h4>
                                <p>{currentItem.price}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property size:'
                                        : 'Di???n t??ch'}
                                </h4>
                                <p>
                                    {currentItem.area} m<sup>2</sup>
                                </p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Bedrooms:'
                                        : 'Ph??ng ng???'}
                                </h4>
                                <p>{currentItem.bedrooms}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Property Type:'
                                        : 'Lo???i c??n h???'}
                                </h4>
                                <p>{currentItem.type}</p>
                            </div>
                            <div className={cx('details-info-item')}>
                                <h4>
                                    {language === 'en'
                                        ? 'Bathrooms:'
                                        : 'Ph??ng t???m'}
                                </h4>
                                <p>{currentItem.bathrooms}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en' ? 'Description' : 'M?? t???'}
                            </h3>
                        </div>
                        <div className={cx('content')}>
                            {language === 'en' ? (
                                <>
                                    <p>
                                        ???Eco Green Saigon??? is located at the
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
                                        ???Eco Green S??i G??n??? to??a la??c ngay c????a ngo??
                                        phi??a Nam Tha??nh Ph????. La?? n??i giao thoa cu??a
                                        3 khu ???? thi?? l????n b????c nh????t: Trung t??m Tp
                                        H???? Chi?? Minh - Trung t??m ta??i chi??nh qu????c
                                        t???? Phu?? My?? H??ng - Trung t??m ha??nh chi??nh
                                        m????i cu??a tha??nh ph???? Thu?? Thi??m.
                                    </p>
                                    <p>
                                        Eco Green Saigon la?? t???? h????p th????ng ma??i,
                                        di??ch vu??, kha??ch sa??n va?? nha?? ???? cao c????p cu??ng
                                        v????i h???? th????ng ti????n i??ch n????i khu ??????ng c????p,
                                        trang thi????t bi?? n????i th????t cao c????p ??em ??????n
                                        m???t m??i tr??????ng s????ng xanh an la??nh.
                                    </p>
                                    <p>
                                        Trung t??m th????ng ma??i s????m u????t va?? kha??ch
                                        sa??n 6 sao Grand Hyatt cao 69 t????ng (600
                                        pho??ng) r????ng 30.000m2. Cu??ng v????i trung t??m
                                        h????i nghi?? ti????c c??????i v????i quy m?? l????n r????ng
                                        2.300m2 va?? h???? th??ng ma??y pha??t ??i????n ??m t????
                                        ??????ng cung c????p ??i????n cho toa??n b???? ca??c c??n
                                        h???? khi xa??y ra m????t ??i????n cu??c b????. D??? ??n c??n
                                        h??? Eco Green Qu???n 7 l?? Khu Ph???c H???p ?????ng
                                        c???p 5 sao quy m?? c???c l???n 14,36 hecta bao
                                        g???m 7 Block c??n h???, 1 t??a V??n ph??ng ???
                                        Kh??ch s???n cao c???p Park Hyatt - T??a th??p
                                        cao nh???t Qu???n 7 v???i chi???u cao 68 T???ng.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={cx('features')}>
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en' ? 'Features' : 'T??nh n??ng'}
                            </h3>
                        </div>
                        <div className={cx('features-container')}>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Air Conditioning'
                                        : '??i???u h??a'}
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
                                    {language === 'en' ? 'Dryer' : 'M??y s???y'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Gym</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Laundry' : 'Gi???t ???i'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Lawn' : 'B??i c???'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Microware'
                                        : 'L?? vi s??ng'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Refrigerator'
                                        : 'T??? l???nh'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Swimming pool'
                                        : 'H??? b??i'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>TV</span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en' ? 'Washer' : 'M??y gi???t'}
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
                                        : 'M??n che c???a s???'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Coffee Shop'
                                        : 'C???a h??ng c?? ph??'}
                                </span>
                            </div>
                            <div className={cx('feature')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>
                                    {language === 'en'
                                        ? 'Convenience Store'
                                        : 'C???a h??ng ti???n l???i'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx('video')}
                        id="apartment-video"
                        name="apartment-video"
                    >
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
                    <div
                        className={cx('full-form')}
                        id="apartment-form"
                        name="apartment-form"
                    >
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en'
                                    ? 'Enquire About This Property'
                                    : 'Th??ng tin th??m v??? c??n h??? n??y'}
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
                        name="another-apartments"
                    >
                        <div className={cx('title')}>
                            <h3>
                                {language === 'en'
                                    ? 'Similar Listings'
                                    : 'Danh s??ch c??n h??? t????ng t???'}
                            </h3>
                        </div>
                        {data.slice(0, amount).map(
                            (item) =>
                                item.id !== currentItem.id && (
                                    <Link
                                        key={item.id}
                                        to={`/productId=${item.id}`}
                                    >
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
                                    </Link>
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
                                        : '???N B???T'
                                    : language === 'en'
                                    ? 'LOAD MORE'
                                    : 'T???I TH??M'}
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

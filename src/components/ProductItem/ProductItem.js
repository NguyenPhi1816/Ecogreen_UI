import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBath,
    faBed,
    faRulerCombined,
    faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';

let cx = classNames.bind(styles);

function ProductItem({ data, handleExpandClick, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('product-item-container')}>
                <div className={cx('slider')}>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        loop
                        // autoplay={{ delay: 3000 }}
                    >
                        {data.thumbs.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className={cx('slide')}>
                                    <img src={image} alt="About product" />
                                </div>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            <div className={cx('slide', 'last-image')}>
                                <img src={data.thumbs[3]} alt="About product" />
                                <p className={cx('remain-amount')}>{`${
                                    data.images.length - 4
                                } more images`}</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button
                        className={cx('show-modal')}
                        onClick={handleExpandClick}
                    >
                        <FontAwesomeIcon
                            icon={faUpRightAndDownLeftFromCenter}
                        />
                    </button>
                    <div className={cx('apartment-type')}>
                        <p>For rent</p>
                    </div>
                </div>
                <div className={cx('product-details')}>
                    <h3 className={cx('name')}>{data.name}</h3>
                    <span className={cx('price')}>{data.whoIsInterested}</span>
                    <div className={cx('details')}>
                        <div className={cx('details-item')}>
                            <FontAwesomeIcon icon={faBed} />
                            <span>{data.bedrooms}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <FontAwesomeIcon icon={faBath} />
                            <span>{data.bathrooms}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <FontAwesomeIcon icon={faRulerCombined} />
                            <span>
                                {data.area} m<sup>2</sup>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;

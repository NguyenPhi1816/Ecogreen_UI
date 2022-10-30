import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlurImg from '../BlurImage';

import { icons } from '../../assets/index';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

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
                        autoplay={{ delay: 3000 }}
                    >
                        {data.images.slice(0, 3).map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className={cx('slide')}>
                                    <BlurImg
                                        blurhash="i8AUWrax0nt7S5ayxZt7R.D%j[IqWBxXfkxWaxax4ofls+axayfRNHR*jr?dWB-nt7WEjsNLoft60Ooe-lR+oJj[fjj?s,"
                                        src={image}
                                        alt="About product"
                                        punch={1}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            <div className={cx('slide', 'last-image')}>
                                <BlurImg
                                    blurhash="i8AUWrax0nt7S5ayxZt7R.D%j[IqWBxXfkxWaxax4ofls+axayfRNHR*jr?dWB-nt7WEjsNLoft60Ooe-lR+oJj[fjj?s,"
                                    src={data.images[3]}
                                    alt="About product"
                                    punch={1}
                                />
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
                </div>
                <div className={cx('product-details')}>
                    <h3 className={cx('name')}>{data.name}</h3>
                    <span className={cx('price')}>Sample</span>
                    <div className={cx('details')}>
                        <div className={cx('details-item')}>
                            <img src={icons.bed} alt="bed" />
                            <span>{data.bedrooms}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <img src={icons.shower} alt="shower" />
                            <span>{data.bathrooms}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <img src={icons.car} alt="car" />
                            <span>{data.parkingLot}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <img src={icons.area} alt="area" />
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

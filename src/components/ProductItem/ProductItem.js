import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { icons } from '../../assets/index';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <div className={cx('wrapper')}>
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
                        {data.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className={cx('slide')}>
                                    <img src={image} alt="About product" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={cx('product-details')}>
                    <h3 className={cx('name')}>{data.name}</h3>
                    <span className={cx('price')}>{data.price}</span>
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

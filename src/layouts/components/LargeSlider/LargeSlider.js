import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './LargeSlider.module.scss';

import { LARGE_SLIDER_IMAGES } from '../../../config';

const cx = classNames.bind(styles);

function LargeSlider() {
    return (
        <section className={cx('large-slider')}>
            <Swiper
                modules={[A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                autoplay={{ delay: 5000 }}
            >
                {LARGE_SLIDER_IMAGES.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt="About product"
                            className={cx('slide')}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={cx('modal')}>
                <h2 className={cx('modal-main-title')}>
                    Discover Our Finest Selection
                </h2>
                <p className={cx('modal-sub-title')}>
                    CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT AS
                    LISTS OR GRIDS, FULL-WIDTH OR BOXED
                </p>
                <a href="/" className={cx('discover')}>
                    <span>Discover</span>
                </a>
            </div>
        </section>
    );
}

export default LargeSlider;

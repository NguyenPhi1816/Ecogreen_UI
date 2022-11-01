import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import styles from './LargeSlider.module.scss';

import { LARGE_SLIDER_IMAGES } from '../../../config';

const cx = classNames.bind(styles);

function LargeSlider({ id }) {
    return (
        <section className={cx('large-slider')} id={id}>
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
                <Swiper
                    modules={[A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 5000 }}
                >
                    <SwiperSlide>
                        <h2 className={cx('modal-main-title')}>
                            Most Green Environment
                        </h2>
                        <p className={cx('modal-sub-title')}>
                            Construction density at Eco Green Saigon is only
                            30%, with an 3.6ha internal park. It is bordered to
                            the Saigon River, Tan My Lake and Huong Tram Park.
                            All make one "Peaceful Green Oasis" in the city
                            center.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 className={cx('modal-main-title')}>Amazing view</h2>
                        <p className={cx('modal-sub-title')}>
                            All bedrooms and living rooms are equipped with a
                            3-layer Solar Control glass system with high UV
                            protection from floor to ceiling. Create a time
                            period shimmering view for owners in all directions.
                            Especially the view to the Sai Gon River, Thu Thiem
                            and the district 1.
                        </p>
                    </SwiperSlide>
                </Swiper>
                <a href="#product" className={cx('discover')}>
                    <span>Discover</span>
                </a>
            </div>
        </section>
    );
}

export default LargeSlider;

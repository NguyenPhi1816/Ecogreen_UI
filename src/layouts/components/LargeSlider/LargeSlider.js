import { useEffect, useState } from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames/bind';
import styles from './LargeSlider.module.scss';
import { get, child } from 'firebase/database';
import { dbRef } from '../../../firebase';

const cx = classnames.bind(styles);

function LargeSlider({ id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        get(child(dbRef, `outsideImages`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className={cx('large-slider')} id={id}>
            <Swiper
                modules={[A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                autoplay={{ delay: 5000 }}
            >
                {data.map((image, index) => (
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
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 5000 }}
                >
                    <SwiperSlide>
                        <div>
                            <h2 className={cx('modal-main-title')}>
                                Most Green Environment
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                Construction density at Eco Green Saigon is only
                                30%, with an 3.6ha internal park. It is bordered
                                to the Saigon River, Tan My Lake and Huong Tram
                                Park. All make one "Peaceful Green Oasis" in the
                                city center.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cx('modal-item')}>
                            <h2 className={cx('modal-main-title')}>
                                Amazing view
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                All bedrooms and living rooms are equipped with
                                a 3-layer Solar Control glass system with high
                                UV protection from floor to ceiling. Create a
                                time period shimmering view for owners in all
                                directions. Especially the view to the Sai Gon
                                River, Thu Thiem and the district 1.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2 className={cx('modal-main-title')}>
                                Outstanding apartment quality
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                Eco-Green was built by Xuan Mai Corp - a
                                prestigious unit with 20 years of experience.
                                Every apartment is equipped with imported
                                materials from leading brands in the world.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <a href="#product" className={cx('discover')}>
                    <span>Discover</span>
                </a> */}
            </div>
        </section>
    );
}

export default LargeSlider;

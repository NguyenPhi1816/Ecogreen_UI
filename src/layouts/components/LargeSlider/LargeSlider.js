import { useRef } from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames/bind';
import styles from './LargeSlider.module.scss';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';
import { outsideImages } from '../../../config';

const cx = classnames.bind(styles);

function LargeSlider({ id }) {
    const { language } = useContext(LanguageContext);
    const imagesRef = useRef(null);

    return (
        <section className={cx('large-slider')} id={id}>
            <Swiper
                modules={[A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                allowTouchMove={false}
                draggable={false}
                ref={imagesRef}
            >
                {outsideImages.map((image, index) => (
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
                    onSlideNextTransitionStart={() => {
                        imagesRef.current.swiper.slideNext();
                    }}
                    onSlidePrevTransitionStart={() => {
                        imagesRef.current.swiper.slidePrev();
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <h2 className={cx('modal-main-title')}>
                                {language === 'en'
                                    ? 'Most Green Environment'
                                    : 'M??i tr?????ng xanh l?? t?????ng'}
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                {language === 'en'
                                    ? 'Construction density at Eco Green Saigon is only 30%, with an 3.6ha internal park. It is bordered to the Saigon River, Tan My Lake and Huong Tram Park. All make one "Peaceful Green Oasis" in the city center.'
                                    : 'M???t ????? x??y d???ng t???i Eco Green S??i G??n ch??? 30%, c?? c??ng vi??n n???i khu r???ng 3,6ha. Gi??p s??ng S??i G??n, h??? T??n M??? v?? c??ng vi??n H????ng Tr??m. T???t c??? t???o n??n m???t ??????c ?????o xanh y??n b??nh??? gi???a l??ng th??nh ph???.'}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cx('modal-item')}>
                            <h2 className={cx('modal-main-title')}>
                                {language === 'en'
                                    ? 'Amazing view'
                                    : 'T???m nh??n tuy???t v???i'}
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                {language === 'en'
                                    ? 'All bedrooms and living rooms are equipped with a 3-layer Solar Control glass system with high UV protection from floor to ceiling. Create a time period shimmering view for owners in all directions. Especially the view to the Sai Gon River, Thu Thiem and the district 1.'
                                    : 'T???t c??? c??c ph??ng ng??? v?? ph??ng kh??ch ?????u ???????c trang b??? h??? th???ng k??nh Solar Control 3 l???p ch???ng tia UV cao t??? s??n ?????n tr???n. T???o kho???ng view lung linh cho ch??? nh??n v??? m???i h?????ng. ?????c bi???t view ra s??ng S??i G??n, Th??? Thi??m v?? qu???n 1.'}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2 className={cx('modal-main-title')}>
                                {language === 'en'
                                    ? 'Outstanding apartment quality'
                                    : 'Ch???t l?????ng c??n h??? v?????t tr???i'}
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                {language === 'en'
                                    ? 'Eco-Green was built by Xuan Mai Corp - a prestigious unit with 20 years of experience. Every apartment is equipped with imported materials from leading brands in the world.'
                                    : 'Eco-Green ???????c x??y d???ng b???i Xu??n Mai Corp - ????n v??? uy t??n v???i 20 n??m kinh nghi???m. M???i c??n h??? ?????u ???????c trang b??? v???t li???u nh???p kh???u t??? c??c th????ng hi???u h??ng ?????u th??? gi???i.'}
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default LargeSlider;

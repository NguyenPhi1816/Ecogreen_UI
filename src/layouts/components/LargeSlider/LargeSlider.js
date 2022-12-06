import { useEffect, useState } from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classnames from 'classnames/bind';
import styles from './LargeSlider.module.scss';
import { get, child } from 'firebase/database';
import { dbRef } from '../../../firebase';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';

const cx = classnames.bind(styles);

function LargeSlider({ id }) {
    const { language } = useContext(LanguageContext);
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
                                {language === 'en'
                                    ? 'Most Green Environment'
                                    : 'Môi trường xanh lý tưởng'}
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                {language === 'en'
                                    ? 'Construction density at Eco Green Saigon is only 30%, with an 3.6ha internal park. It is bordered to the Saigon River, Tan My Lake and Huong Tram Park. All make one "Peaceful Green Oasis" in the city center.'
                                    : 'Mật độ xây dựng tại Eco Green Sài Gòn chỉ 30%, có công viên nội khu rộng 3,6ha. Giáp sông Sài Gòn, hồ Tân Mỹ và công viên Hương Tràm. Tất cả tạo nên một “Ốc đảo xanh yên bình” giữa lòng thành phố.'}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cx('modal-item')}>
                            <h2 className={cx('modal-main-title')}>
                                {language === 'en'
                                    ? 'Amazing view'
                                    : 'Tầm nhìn tuyệt vời'}
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                {language === 'en'
                                    ? 'All bedrooms and living rooms are equipped with a 3-layer Solar Control glass system with high UV protection from floor to ceiling. Create a time period shimmering view for owners in all directions. Especially the view to the Sai Gon River, Thu Thiem and the district 1.'
                                    : 'Tất cả các phòng ngủ và phòng khách đều được trang bị hệ thống kính Solar Control 3 lớp chống tia UV cao từ sàn đến trần. Tạo khoảng view lung linh cho chủ nhân về mọi hướng. Đặc biệt view ra sông Sài Gòn, Thủ Thiêm và quận 1.'}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <h2 className={cx('modal-main-title')}>
                                {language === 'en'
                                    ? 'Outstanding apartment quality'
                                    : 'Chất lượng căn hộ vượt trội'}
                            </h2>
                            <p className={cx('modal-sub-title')}>
                                {language === 'en'
                                    ? 'Eco-Green was built by Xuan Mai Corp - a prestigious unit with 20 years of experience. Every apartment is equipped with imported materials from leading brands in the world.'
                                    : 'Eco-Green được xây dựng bởi Xuân Mai Corp - đơn vị uy tín với 20 năm kinh nghiệm. Mỗi căn hộ đều được trang bị vật liệu nhập khẩu từ các thương hiệu hàng đầu thế giới.'}
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default LargeSlider;

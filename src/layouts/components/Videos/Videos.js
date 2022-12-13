import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Videos.module.scss';

import { useContext } from 'react';
import { LanguageContext } from '../../../App';
import { videos } from '../../../config';

const cx = classNames.bind(styles);

function Videos({ width, id }) {
    const { language } = useContext(LanguageContext);
    const [currentVideo, setCurrentVideo] = useState(videos[0].video_url);

    return (
        <section className={cx('videos')} id={id}>
            <div className={cx('videos-container')}>
                <div className={cx('videos-title')}>
                    <h2 className={cx('videos-title-main')}>
                        {language === 'en'
                            ? 'Updates From Our Videos'
                            : 'Cập nhật từ video của chúng tôi'}
                    </h2>
                    <p className={cx('videos-title-sub')}>
                        {language === 'en'
                            ? 'Overview of the project through our videos'
                            : 'Tổng quan về dự án qua video của chúng tôi'}
                    </p>
                </div>
                <div className={cx('large-video')}>
                    <iframe
                        src={currentVideo}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={cx('videos-slider')}>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={15}
                        slidesPerView={width < 768 ? 3 : 4}
                        navigation
                        loop
                    >
                        {videos.map((video, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={cx('video-slide')}
                                    onClick={() =>
                                        setCurrentVideo(video.video_url)
                                    }
                                >
                                    <img
                                        src={video.video_thumb}
                                        alt="video thumb"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Videos;

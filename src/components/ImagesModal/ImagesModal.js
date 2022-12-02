import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faTimes,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './ImagesModal.module.scss';
import { logo_url } from '../../config';
import { AGENTS } from '../../config';

import Form from '../Form';

const cx = classNames.bind(styles);

function ImagesModal({ offsetWidth, handleClose, data }) {
    const [showForm, setShowForm] = useState(
        offsetWidth >= 1024 ? true : false,
    );

    const formStyles = {
        transform: 'translateX(100%)',
        opacity: '0',
    };

    const formStylesMobile = {
        position: 'absolute',
        top: '0',
        right: '0',
        transform: 'translateX(0)',
        opacity: '1',
        zIndex: '2',
        backgroundColor: '#fff',
        padding: '15px',
        width: '45%',
        minHeight: '100%',
    };

    const sliderStyles = {
        width: '100%',
        maxWidth: '1170px',
        maxHeight: '795px',
    };

    const buttonStyles = {
        right: '45%',
    };

    return (
        <div className={cx('images-modal')}>
            <div className={cx('images-modal-container')}>
                <div className={cx('modal-header')}>
                    <div className={cx('modal-logo')}>
                        <img src={logo_url} alt="logo" />
                    </div>
                    <button
                        className={cx('modal-close-btn')}
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className={cx('modal-body')}>
                    <div
                        className={cx('slider')}
                        style={
                            !showForm
                                ? sliderStyles
                                : offsetWidth < 1024
                                ? sliderStyles
                                : {}
                        }
                    >
                        <Swiper
                            modules={[Navigation, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            loop
                            // autoplay={{ delay: 3000 }}
                        >
                            {data.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className={cx('slide')}>
                                        <img src={image} alt="About product" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button
                            className={cx('zoom')}
                            onClick={() => setShowForm(!showForm)}
                            style={
                                showForm && offsetWidth < 1024
                                    ? buttonStyles
                                    : {}
                            }
                        >
                            {!showForm && (
                                <FontAwesomeIcon icon={faChevronLeft} />
                            )}
                            {showForm && (
                                <FontAwesomeIcon icon={faChevronRight} />
                            )}
                        </button>
                    </div>
                    {showForm && (
                        <div
                            className={cx('images-modal-form')}
                            style={
                                !showForm
                                    ? formStyles
                                    : offsetWidth < 1024
                                    ? formStylesMobile
                                    : {}
                            }
                        >
                            <Form type={'vertical'} className={cx('form')} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImagesModal;

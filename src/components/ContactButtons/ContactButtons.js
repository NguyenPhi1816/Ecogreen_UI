import classNames from 'classnames/bind';
import styles from './ContactButtons.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { agent } from '../../config';

const cx = classNames.bind(styles);

function ContactButtons() {
    const [show, setShow] = useState(false);
    return (
        <Tippy
            visible={show}
            interactive
            onClickOutside={() => setShow(false)}
            render={(attrs) => (
                <div className={cx('tooltip-container')}>
                    <ul className={cx('tooltip-list')}>
                        <li className={cx('tooltip-item')}>
                            <a href="mailto:rentalservicesg@gmail.com">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className={cx('icon')}
                                />
                                <span>Gmail</span>
                            </a>
                        </li>
                        <li className={cx('tooltip-item')}>
                            <a href={`https://zalo.me/${agent.phone}`}>
                                <img
                                    src="https://ecogreenq7.vn/rentalservicesg/images/zalo.png"
                                    alt="zalo"
                                    className={cx('icon')}
                                />
                                <span>Zalo</span>
                            </a>
                        </li>
                        <li className={cx('tooltip-item')}>
                            <a href={`tel:${agent.phone}`}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className={cx('icon')}
                                />
                                <span>{agent.phone}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        >
            <div className={cx('container')} onClick={() => setShow(!show)}>
                <div className={cx('wrapper')}>
                    <Swiper
                        modules={[A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop
                        allowTouchMove={false}
                        draggable={false}
                        autoplay={{ delay: 1000 }}
                        className={cx('slider')}
                    >
                        <SwiperSlide className={cx('slide')}>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={cx('icon')}
                            />
                        </SwiperSlide>
                        <SwiperSlide className={cx('slide')}>
                            <img
                                src="https://ecogreenq7.vn/rentalservicesg/images/zalo.png"
                                alt="zalo"
                                className={cx('icon')}
                            />
                        </SwiperSlide>
                        <SwiperSlide className={cx('slide')}>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={cx('icon')}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Tippy>
    );
}

export default ContactButtons;

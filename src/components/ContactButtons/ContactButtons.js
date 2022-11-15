import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactButtons.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faMessage,
    faPaperPlane,
    faPhone,
    faTimes,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContactButtons({ width }) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className={cx('wrapper')}>
            {(width >= 768 || !show) && (
                <div className={cx('arrow-container')}>
                    <div className={cx('arrow')}>
                        <div className={cx('curve')}></div>
                        <div className={cx('point')}></div>
                    </div>
                </div>
            )}
            {width < 768 &&
                (show ? (
                    <button
                        className={cx('item', 'circle')}
                        onClick={handleShow}
                    >
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={cx('icon')}
                        />
                    </button>
                ) : (
                    <button
                        className={cx('item', 'round', 'gmail')}
                        onClick={handleShow}
                    >
                        <FontAwesomeIcon
                            icon={faMessage}
                            className={cx('icon')}
                        />
                        <span>Contact Us</span>
                    </button>
                ))}
            <div
                className={cx('contact-container', {
                    show: width >= 768 || show,
                })}
            >
                <a
                    href="mailto:Diaoclvland@gmail.com"
                    className={cx('item', 'gmail')}
                >
                    <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                    <span>Gmail</span>
                </a>
                <a
                    href="https://zalo.me/0941256257"
                    className={cx('item', 'zalo')}
                >
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className={cx('icon')}
                    />
                    <span>Zalo</span>
                </a>
                <a href="tel:0941256257" className={cx('item')}>
                    <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                    <span>0941256257</span>
                </a>
            </div>
        </div>
    );
}

export default ContactButtons;

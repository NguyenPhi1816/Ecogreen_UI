import classNames from 'classnames/bind';
import styles from './ContactButtons.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContactButtons({ width, onlyIcon = false }) {
    const onlyIconStyles = {
        marginLeft: '10px',
        width: '50px',
        height: '50px',
        justifyContent: 'center',
    };

    return (
        <div
            className={cx('wrapper')}
            style={
                onlyIcon ? { flexDirection: 'row-reverse', bottom: '0' } : {}
            }
        >
            <div
                className={cx('item1', 'gmail')}
                style={onlyIcon ? onlyIconStyles : {}}
            >
                <a href="mailto:rentalservicesg@gmail.com">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={cx('icon')}
                        style={onlyIcon ? { marginRight: '0' } : {}}
                    />
                    {!onlyIcon && <span>Gmail</span>}
                </a>
            </div>
            <div
                className={cx('item1', 'zalo')}
                style={onlyIcon ? onlyIconStyles : {}}
            >
                <a href="https://zalo.me/0941256257">
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className={cx('icon')}
                        style={onlyIcon ? { marginRight: '0' } : {}}
                    />
                    {!onlyIcon && <span>Zalo</span>}
                </a>
            </div>
            <div className={cx('item', 'phone')}>
                {onlyIcon && (
                    <a href="tel:0941256257" className={cx('icon')}>
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                )}
                {!onlyIcon && (
                    <>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <a href="tel:0941256257">
                            <span>0941256257</span>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}

export default ContactButtons;

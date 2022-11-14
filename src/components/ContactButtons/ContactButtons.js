import classNames from 'classnames/bind';
import styles from './ContactButtons.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContactButtons() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('arrow-container')}>
                <div className={cx('arrow')}>
                    <div className={cx('curve')}></div>
                    <div className={cx('point')}></div>
                </div>
            </div>
            <a
                href="mailto:Diaoclvland@gmail.com"
                className={cx('item', 'gmail')}
            >
                <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                <span>Gmail</span>
            </a>
            <a href="https://zalo.me/0941256257" className={cx('item', 'zalo')}>
                <FontAwesomeIcon icon={faPaperPlane} className={cx('icon')} />
                <span>Zalo</span>
            </a>
            <a href="tel:0941256257" className={cx('item')}>
                <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                <span>0941256257</span>
            </a>
        </div>
    );
}

export default ContactButtons;

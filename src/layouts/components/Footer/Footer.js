import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok,
    faGoogle,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { logo_url } from '../../../config';

const cx = classNames.bind(styles);

function Footer({ footerForm = true }) {
    return (
        <section className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-wrapper')}>
                    <div className={cx('footer-infor')}>
                        <div className={cx('logo-container')}>
                            <img src={logo_url} alt="logo" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis mollis et sem sed sollicitudin. Donec non
                            odio neque. Aliquam hendrerit sollicitudin purus,
                            quis rutrum mi accumsan nec.
                        </p>
                    </div>
                </div>
                <div className={cx('license')}>
                    <span>© Ecogreen Saigon - All rights reserved</span>
                    <div className={cx('footer-social-network-links')}>
                        <a href="/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

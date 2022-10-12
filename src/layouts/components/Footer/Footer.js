import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { logo_url } from '../../../config';

const cx = classNames.bind(styles);

function Footer({ footerForm = true }) {
    const [email, setEmail] = useState('');
    return (
        <section className={cx('footer')}>
            {footerForm && (
                <div className={cx('footer-form')}>
                    <h2 className={cx('footer-form-title')}>
                        NEWSLETTER SING UP
                    </h2>
                    <form className={cx('footer-form-wrapper')}>
                        <input
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className={cx('submit-btn')}
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(email);
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
            <div className={cx('footer-container')}>
                <div className={cx('footer-wrapper')}>
                    <div className={cx('footer-infor')}>
                        <img src={logo_url} alt="logo" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis mollis et sem sed sollicitudin. Donec non
                            odio neque. Aliquam hendrerit sollicitudin purus,
                            quis rutrum mi accumsan nec.
                        </p>
                    </div>
                    <div className={cx('footer-links')}>
                        <div className={cx('footer-links-wrapper')}>
                            <h4 className={cx('footer-links-title')}>
                                Discover
                            </h4>
                            <div className={cx('footer-links-container')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Miami</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Los Angeles</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Chicago</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>New York</span>
                                </a>
                            </div>
                        </div>
                        <div className={cx('footer-links-wrapper')}>
                            <h4 className={cx('footer-links-title')}>
                                LifeStyle
                            </h4>
                            <div className={cx('footer-links-container')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Apartment</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Single Family Home</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Villa</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span>Loft</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('license')}>
                    <span>© Houzez - All rights reserved</span>
                    <div className={cx('footer-social-network-links')}>
                        <a href="/">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

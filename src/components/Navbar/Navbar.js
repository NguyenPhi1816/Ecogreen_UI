import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { logo_url } from '../../config';
import { useParams } from 'react-router-dom';

let cx = classNames.bind(styles);

function Navbar({ styles = {}, logoColor = 'default' }) {
    const productId = useParams().id;
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="/" className={cx('logo')}>
                    <img src={logo_url} alt="Logo" />
                </a>

                <ul className={cx('menu')} style={styles}>
                    {productId ? (
                        <>
                            <li className={cx('menu-item')}>
                                <a href="/">HOME</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#apartment-infor`}
                                >
                                    APARTMENT
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#about-apartment`}
                                >
                                    ABOUT APARTMENT
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#apartment-video`}
                                >
                                    VIDEO
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#apartment-form`}
                                >
                                    CONTACT
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#another-apartments`}
                                >
                                    ANOTHER APARTMENTS
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={cx('menu-item')}>
                                <a href="/#home">HOME</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#product">APARTMENTS</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#about">ABOUT PROJECT</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#gallery">GALLERY</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#videos">VIDEOS</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#services">SERVICES</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#contact">CONTACT</a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { logo_url } from '../../config';
import { useParams } from 'react-router-dom';
import LanguageButton from '../LanguageButton/LanguageButton';
import { useContext } from 'react';
import { Context } from '../../App';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

let cx = classNames.bind(styles);

function Navbar({ styles = {} }) {
    const { language } = useContext(Context);
    const productId = useParams().id;
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <RouterLink to="/" className={cx('logo')}>
                    <img src={logo_url} alt="Logo" />
                </RouterLink>

                <ul className={cx('menu')} style={styles}>
                    {productId ? (
                        <>
                            <li className={cx('menu-item')}>
                                <RouterLink to="/">
                                    {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
                                </RouterLink>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`about-apartment`}
                                >
                                    {language === 'en'
                                        ? 'ABOUT APARTMENT'
                                        : 'THÔNG TIN CĂN HỘ'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`apartment-video`}
                                >
                                    VIDEO
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`apartment-form`}
                                >
                                    {language === 'en' ? 'CONTACT' : 'LIÊN LẠC'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`another-apartments`}
                                >
                                    {language === 'en'
                                        ? 'ANOTHER APARTMENTS'
                                        : 'CĂN HỘ KHÁC'}
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={cx('menu-item')}>
                                <RouterLink to="/">
                                    {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
                                </RouterLink>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="product"
                                >
                                    {language === 'en'
                                        ? 'APARTMENTS'
                                        : 'CĂN HỘ'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="about"
                                >
                                    {language === 'en'
                                        ? 'ABOUT PROJECT'
                                        : 'THÔNG TIN DỰ ÁN'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="gallery"
                                >
                                    {language === 'en' ? 'GALLERY' : 'HÌNH ẢNH'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="utilities"
                                >
                                    {language === 'en'
                                        ? 'UTILITIES'
                                        : 'TIỆN ÍCH'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="videos"
                                >
                                    VIDEOS
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="services"
                                >
                                    {language === 'en' ? 'SERVICES' : 'DỊCH VỤ'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="contact"
                                >
                                    {language === 'en' ? 'CONTACT' : 'LIÊN LẠC'}
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <LanguageButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

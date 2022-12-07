import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { logo_url } from '../../config';
import { useParams } from 'react-router-dom';
import LanguageButton from '../LanguageButton/LanguageButton';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

let cx = classNames.bind(styles);

function Navbar({ styles = {}, logoColor = 'default' }) {
    const { language } = useContext(LanguageContext);
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
                                <a href="/">
                                    {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#apartment-infor`}
                                >
                                    {language === 'en' ? 'APARTMENT' : 'CĂN HỘ'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#about-apartment`}
                                >
                                    {language === 'en'
                                        ? 'ABOUT APARTMENT'
                                        : 'THÔNG TIN CĂN HỘ'}
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
                                    {language === 'en' ? 'CONTACT' : 'LIÊN LẠC'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a
                                    href={`/productId=${productId}/#another-apartments`}
                                >
                                    {language === 'en'
                                        ? 'ANOTHER APARTMENTS'
                                        : 'CĂN HỘ KHÁC'}
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={cx('menu-item')}>
                                <a href="/#home">
                                    {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#product">
                                    {language === 'en'
                                        ? 'APARTMENTS'
                                        : 'CĂN HỘ'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#about">
                                    {language === 'en'
                                        ? 'ABOUT PROJECT'
                                        : 'THÔNG TIN DỰ ÁN'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#gallery">
                                    {language === 'en' ? 'GALLERY' : 'HÌNH ẢNH'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#feedback">
                                    {language === 'en'
                                        ? 'FEEDBACK'
                                        : 'PHẢN HỒI'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#videos">VIDEOS</a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#services">
                                    {language === 'en' ? 'SERVICES' : 'DỊCH VỤ'}
                                </a>
                            </li>
                            <li className={cx('menu-item')}>
                                <a href="/#contact">
                                    {language === 'en' ? 'CONTACT' : 'LIÊN LẠC'}
                                </a>
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

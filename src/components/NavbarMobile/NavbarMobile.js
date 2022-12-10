import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NavbarMobile.module.scss';

import { logo_url } from '../../config';
import LanguageButton from '../LanguageButton/LanguageButton';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

const cx = classNames.bind(styles);

function NavbarMobile({ styles }) {
    const { language } = useContext(LanguageContext);
    const productId = useParams().id;
    const menuRef = useRef();
    const hamburgerRef = useRef();
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !hamburgerRef.current.contains(e.target)
            ) {
                setShowMenu(false);
            }
        };
        window.addEventListener('click', (e) => handleClickOutside(e));
        return window.removeEventListener('click', (e) =>
            handleClickOutside(e),
        );
    }, [menuRef]);

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showMenu]);

    return (
        <nav className={cx('nav')} style={styles}>
            <div
                className={cx('hamburger')}
                onClick={handleShowMenu}
                ref={hamburgerRef}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <a href="/" className={cx('logo')}>
                <img src={logo_url} alt="Logo" />
            </a>
            <aside
                className={`${cx('sidebar')} ${
                    showMenu ? 'showMenu' : 'hideMenu'
                }`}
                ref={menuRef}
            >
                <ul className={cx('menu')} id="sidebar">
                    <li className={cx('close-btn')} onClick={handleShowMenu}>
                        <FontAwesomeIcon icon={faXmark} />
                    </li>
                    {productId ? (
                        <>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/">
                                    {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#apartment-infor`}
                                >
                                    {language === 'en' ? 'APARTMENT' : 'CĂN HỘ'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#about-apartment`}
                                >
                                    {language === 'en'
                                        ? 'ABOUT APARTMENT'
                                        : 'THÔNG TIN CĂN HỘ'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#apartment-video`}
                                >
                                    VIDEO
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#apartment-form`}
                                >
                                    {language === 'en' ? 'CONTACT' : 'LIÊN LẠC'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
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
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#home">
                                    {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#product">
                                    {language === 'en'
                                        ? 'APARTMENTS'
                                        : 'CĂN HỘ'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#about">
                                    {language === 'en'
                                        ? 'ABOUT PROJECT'
                                        : 'THÔNG TIN DỰ ÁN'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#gallery">
                                    {language === 'en' ? 'GALLERY' : 'HÌNH ẢNH'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#utilities">
                                    {language === 'en'
                                        ? 'UTILITIES'
                                        : 'TIỆN ÍCH'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#videos">VIDEOS</a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#services">
                                    {language === 'en' ? 'SERVICES' : 'DỊCH VỤ'}
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#contact">
                                    {language === 'en' ? 'CONTACT' : 'LIÊN LẠC'}
                                </a>
                            </li>
                        </>
                    )}
                    <li onClick={handleShowMenu}>
                        <LanguageButton customClass={cx('lang-btn')} />
                    </li>
                </ul>
            </aside>
        </nav>
    );
}

export default NavbarMobile;

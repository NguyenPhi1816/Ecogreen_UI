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
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

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
            <RouterLink to="/" className={cx('logo')}>
                <img src={logo_url} alt="Logo" />
            </RouterLink>
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
                            <li className={cx('menu-item')}>
                                <RouterLink to="/" onClick={handleShowMenu}>
                                    {language === 'en' ? 'HOME' : 'TRANG CH???'}
                                </RouterLink>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`about-apartment`}
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en'
                                        ? 'ABOUT APARTMENT'
                                        : 'TH??NG TIN C??N H???'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`apartment-video`}
                                    onClick={handleShowMenu}
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
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en' ? 'CONTACT' : 'LI??N L???C'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to={`another-apartments`}
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en'
                                        ? 'ANOTHER APARTMENTS'
                                        : 'C??N H??? KH??C'}
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={cx('menu-item')}>
                                <RouterLink to="/" onClick={handleShowMenu}>
                                    {language === 'en' ? 'HOME' : 'TRANG CH???'}
                                </RouterLink>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="product"
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en'
                                        ? 'APARTMENTS'
                                        : 'C??N H???'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="about"
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en'
                                        ? 'ABOUT PROJECT'
                                        : 'TH??NG TIN D??? ??N'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="gallery"
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en' ? 'GALLERY' : 'H??NH ???NH'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="utilities"
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en'
                                        ? 'UTILITIES'
                                        : 'TI???N ??CH'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="videos"
                                    onClick={handleShowMenu}
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
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en' ? 'SERVICES' : 'D???CH V???'}
                                </Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="contact"
                                    onClick={handleShowMenu}
                                >
                                    {language === 'en' ? 'CONTACT' : 'LI??N L???C'}
                                </Link>
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

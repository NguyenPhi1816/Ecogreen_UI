import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NavbarMobile.module.scss';

import { logo_url } from '../../config';
import { useContext } from 'react';
import { Context } from '../../App';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import LanguageButtonMobile from '../LanguageButtonMobile';
import { languages } from '../../languages';

const cx = classNames.bind(styles);

function NavbarMobile({ styles }) {
    const { language } = useContext(Context);
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
                                    {
                                        languages.navbar.productPage.home[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.productPage
                                            .aboutApartment[language]
                                    }
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
                                    {
                                        languages.navbar.productPage.video[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.productPage.contact[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.productPage
                                            .anotherApartments[language]
                                    }
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={cx('menu-item')}>
                                <RouterLink to="/" onClick={handleShowMenu}>
                                    {languages.navbar.homePage.home[language]}
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
                                    {
                                        languages.navbar.homePage.apartments[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.homePage.aboutProject[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.homePage.gallery[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.homePage.utilities[
                                            language
                                        ]
                                    }
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
                                    {languages.navbar.homePage.videos[language]}
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
                                    {
                                        languages.navbar.homePage.services[
                                            language
                                        ]
                                    }
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
                                    {
                                        languages.navbar.homePage.contact[
                                            language
                                        ]
                                    }
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <LanguageButtonMobile />
                    </li>
                </ul>
            </aside>
        </nav>
    );
}

export default NavbarMobile;

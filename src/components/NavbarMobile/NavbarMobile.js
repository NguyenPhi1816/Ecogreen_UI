import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NavbarMobile.module.scss';

import { logo_url } from '../../config';

const cx = classNames.bind(styles);

function NavbarMobile({ styles }) {
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
                                <a href="/">HOME</a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#apartment-infor`}
                                >
                                    APARTMENT
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#about-apartment`}
                                >
                                    ABOUT APARTMENT
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
                                    CONTACT
                                </a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a
                                    href={`/productId=${productId}/#another-apartments`}
                                >
                                    ANOTHER APARTMENTS
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#home">HOME</a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#product">APARTMENTS</a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#about">ABOUT PROJECT</a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#gallery">GALLERY</a>
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
                                <a href="/#services">SERVICES</a>
                            </li>
                            <li
                                className={cx('menu-item')}
                                onClick={handleShowMenu}
                            >
                                <a href="/#contact">CONTACT</a>
                            </li>
                        </>
                    )}
                </ul>
            </aside>
        </nav>
    );
}

export default NavbarMobile;

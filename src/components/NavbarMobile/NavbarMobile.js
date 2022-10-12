import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NavbarMobile.module.scss';

import { logo_black_url } from '../../config';

const cx = classNames.bind(styles);

function NavbarMobile({ styles }) {
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
            <div className={cx('logo')}>
                <img src={logo_black_url} alt="Logo" />
            </div>
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
                    <li className={cx('menu-item')}>
                        <a href="/">HOME</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="/">ABOUT US</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="/">FOR RENT</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="/">FOR SALE</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="/">OUR AGENTS</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="/">BLOG</a>
                    </li>
                    <li className={cx('menu-item')}>
                        <a href="/">CONTACT</a>
                    </li>
                </ul>
            </aside>
        </nav>
    );
}

export default NavbarMobile;

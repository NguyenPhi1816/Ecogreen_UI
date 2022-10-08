import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { logo_url } from '../../config';

let cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="/" className={cx('logo')}>
                    <img src={logo_url} alt="Logo" />
                </a>

                <ul className={cx('menu')}>
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
            </div>
        </nav>
    );
}

export default Navbar;

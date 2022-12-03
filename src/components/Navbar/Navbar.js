import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { logo_url } from '../../config';

let cx = classNames.bind(styles);

function Navbar({ styles = {}, logoColor = 'default' }) {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="/" className={cx('logo')}>
                    <img src={logo_url} alt="Logo" />
                </a>

                <ul className={cx('menu')} style={styles}>
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
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

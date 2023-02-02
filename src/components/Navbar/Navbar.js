import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { logo_url } from '../../config';
import { useParams } from 'react-router-dom';
import LanguageButton from '../LanguageButton/LanguageButton';
import { useContext } from 'react';
import { Context } from '../../App';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { languages } from '../../languages';

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
                                <RouterLink to="/">
                                    {languages.navbar.homePage.home[language]}
                                </RouterLink>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    to="product"
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
                        <LanguageButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

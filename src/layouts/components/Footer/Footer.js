import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok,
    faGoogle,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {
    faEnvelope,
    faGlobe,
    faHouse,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import Form from '../../../components/Form';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';

const cx = classNames.bind(styles);

function Footer({ footerForm = true }) {
    const { language } = useContext(LanguageContext);
    return (
        <section className={cx('footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-wrapper')}>
                    <div className={cx('footer-infor')}>
                        <div className={cx('partner')}>
                            <h2>
                                {language === 'en'
                                    ? 'Partner & Investor'
                                    : 'Đơn vị đồng hành và đầu tư'}
                            </h2>
                        </div>
                        <div className={cx('logos')}>
                            <img
                                src="https://nguyenmanhninh.com/wp-content/uploads/2015/04/logo-xuan-mai.png"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://giathuecanho.com/wp-content/uploads/2021/08/cbre1.jpg"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bblubuqzbhg8rebnqxna"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://cdn.cdnlogo.com/logos/o/78/otis.png"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/de/thumb/f/fc/Logo_Duravit.svg/2560px-Logo_Duravit.svg.png"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hansgrohe-Logo.svg/2560px-Hansgrohe-Logo.svg.png"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://hoangphatlighting.vn/upload/images/2022/02/1645498087-schneiderlogo.jpg"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://seeklogo.com/images/F/fg-wilson-logo-5A05AC22A5-seeklogo.com.png"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Teka_svg.svg/1024px-Logo_Teka_svg.svg.png"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://mltc.com.vn/wp-content/uploads/2018/01/logo-daikin-1.png"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/7051px-Samsung_wordmark.svg.png"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://cdn.nhanlucnganhluat.vn/uploads/images/8B5AB457/logo/2019-11/image.jpg"
                                alt="logo"
                                className={cx('partner-logo')}
                            />
                        </div>
                        <div className={cx('contact-form')}>
                            <div className={cx('contact')}>
                                <h3 className={cx('contact-title')}>
                                    {language === 'en'
                                        ? "Eco Green's Business Department"
                                        : 'Phòng kinh doanh Eco Green'}
                                </h3>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon icon={faHouse} />
                                    <p>
                                        {language === 'en'
                                            ? 'Address: 107 Nguyen Van Linh Street, Tan Thuan Tay ward, District 7, Ho Chi Minh city'
                                            : 'Địa chỉ: 107 Nguyễn Văn Linh, phường Tân Thuận Tây, Quận 7, TP.HCM'}
                                    </p>
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p>Hotline(24/7): 0941 256 257</p>
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>Email: rentalservicesg@gmail.com</p>
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    <p>Website: http://www.ecogreenq7.vn/</p>
                                </div>
                            </div>
                            <div className={cx('form')}>
                                <h3 className={cx('form-title')}>
                                    {language === 'en'
                                        ? 'I want more information'
                                        : 'Đăng ký nhận thông tin'}
                                </h3>
                                <Form showAgent={false} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('license')}>
                    <span>© Ecogreen Saigon - All rights reserved</span>
                    <div className={cx('footer-social-network-links')}>
                        <a href="/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
                <div className={cx('leaf')}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/leaf.jpg?alt=media&token=05b98e5d-cdc9-4018-b663-0961d4768a8f"
                        alt="leaf"
                    ></img>
                </div>
            </div>
        </section>
    );
}

export default Footer;

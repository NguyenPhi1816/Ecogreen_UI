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
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/xuan-mai-corp-logo.png?alt=media&token=99953b65-fac8-40e9-97fe-1251cd31a810"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/cbre1.jpg?alt=media&token=92f3b14b-0147-48ac-93a8-0d29f21026aa"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/skk.png?alt=media&token=88806379-2d33-4f17-9a91-cd44ac083e57"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/otis.png?alt=media&token=cc5fe3c3-8d08-4bfd-bb66-9033d5f7b649"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/solar-control.png?alt=media&token=d0c2382e-ee2b-4f11-8b46-dc21fe152e80"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/Duravit.png?alt=media&token=5524bcf5-4648-42e8-90b4-23522dd26621"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/hansgrohe.png?alt=media&token=57275bf5-456d-48e9-825e-010825ea6f89"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/schneider.png?alt=media&token=1d62379c-3ddc-4e0d-9a0b-9e8af0ea3647"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/FGwilson.png?alt=media&token=ab50a132-d207-4651-8637-e77e1923e752"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/teka.png?alt=media&token=a1a5be43-8ef1-4025-b627-5aa939c81c55"
                                alt="logo"
                                className={cx('partner-logo', 'mg-r-15')}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/daikin.png?alt=media&token=79ec665e-ec72-4cc7-a7db-bca96cec7c6c"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/samsung.png?alt=media&token=7473f409-3eb2-4780-88bd-8f5361afac5b"
                                alt="logo"
                                className={cx(
                                    'partner-logo',
                                    'mg-r-15',
                                    'ob-f-contain',
                                )}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/tuongviet.png?alt=media&token=9a63b42b-3965-4b47-b625-71cf230a820a"
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
                                    <p>Email: diaoclv@gmail.com</p>
                                </div>
                                <div className={cx('contact-item')}>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    <p>Website: https://www.abc.com/</p>
                                </div>
                            </div>
                            <div className={cx('form')}>
                                <h3 className={cx('form-title')}>
                                    {language === 'en'
                                        ? 'I want more information'
                                        : 'Đăng ký nhận thông tin'}
                                </h3>
                                <Form />
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

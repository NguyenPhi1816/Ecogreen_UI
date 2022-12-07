import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { LanguageContext } from '../../../App';
import NavbarMobile from '../../../components/NavbarMobile';
import Navbar from '../../../components/Navbar';

const cx = classNames.bind(styles);

function Home({ width, id }) {
    const { language } = useContext(LanguageContext);
    return (
        <section className={cx('home')} id={id}>
            {width < 1000 ? <NavbarMobile /> : <Navbar />}
            <div className={cx('title')}>
                <h1 className={cx('main-title')}>
                    {language === 'en'
                        ? 'Discover Your Place To Live'
                        : 'Khám Phá Nơi Sống Của Bạn'}
                </h1>
                <span className={cx('sub-title')}>
                    {language === 'en'
                        ? 'ENJOY YOUR GREEN LIFE WITH OUR ECOSYSTEM'
                        : 'TẬN HƯỞNG CUỘC SỐNG XANH CỦA BẠN VỚI HỆ SINH THÁI XANH CỦA CHÚNG TÔI'}
                </span>
            </div>
        </section>
    );
}

export default Home;

import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Context } from '../../../App';
import NavbarMobile from '../../../components/NavbarMobile';
import Navbar from '../../../components/Navbar';

const cx = classNames.bind(styles);

function Home({ id }) {
    const { language, offsetWidth } = useContext(Context);
    return (
        <section className={cx('home')} id={id}>
            {offsetWidth < 1000 ? <NavbarMobile /> : <Navbar />}
            <div className={cx('title')}>
                <h1 className={cx('main-title')}>
                    {language === 'en'
                        ? 'Discover Your Place To Live'
                        : 'Khám Phá Nơi Sống Của Bạn'}
                </h1>
                <span className={cx('sub-title')}>
                    {language === 'en'
                        ? 'ENJOY YOUR GREEN LIFE WITH OUR ECOSYSTEM'
                        : 'TẬN HƯỞNG HỆ SINH THÁI XANH CỦA ECO GREEN'}
                </span>
            </div>
        </section>
    );
}

export default Home;

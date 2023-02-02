import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Context } from '../../../App';
import NavbarMobile from '../../../components/NavbarMobile';
import Navbar from '../../../components/Navbar';
import { languages } from '../../../languages';

const cx = classNames.bind(styles);

function Home({ id }) {
    const { language, offsetWidth } = useContext(Context);
    return (
        <section className={cx('home')} id={id}>
            {offsetWidth < 1000 ? <NavbarMobile /> : <Navbar />}
            <div className={cx('title')}>
                <h1 className={cx('main-title')}>
                    {languages.homePage.welcome.title[language]}
                </h1>
                <span className={cx('sub-title')}>
                    {languages.homePage.welcome.subTitle[language]}
                </span>
            </div>
        </section>
    );
}

export default Home;

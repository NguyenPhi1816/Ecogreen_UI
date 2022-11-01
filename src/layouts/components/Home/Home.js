import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import InforBar from '../../../components/InforBar';
import NavbarMobile from '../../../components/NavbarMobile';
import Navbar from '../../../components/Navbar';

const cx = classNames.bind(styles);

function Home({ width, id }) {
    return (
        <section className={cx('home')} id={id}>
            {/* {width >= 768 && <InforBar />} */}
            {width < 1000 ? (
                <NavbarMobile styles={width >= 768 ? { top: '35px' } : {}} />
            ) : (
                <Navbar />
            )}
            <div className={cx('title')}>
                <h1 className={cx('main-title')}>
                    Discover Your Place To Live
                </h1>
                <span className={cx('sub-title')}>
                    ENJOY YOUR GREEN LIFE WITH OUR ECOSYSTEM
                </span>
            </div>
        </section>
    );
}

export default Home;

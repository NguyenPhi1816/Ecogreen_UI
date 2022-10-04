import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import InforBar from '../../../components/InforBar';
import Navbar from '../../../components/Navbar';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('home')} id="home">
            <InforBar />
            <Navbar />
            <div className={cx('title')}>
                <h1 className={cx('main-title')}>
                    Discover Your Place To Live
                </h1>
                <span className={cx('sub-title')}>
                    GET STARTED IN FEW CLICKS
                </span>
            </div>
        </section>
    );
}

export default Home;

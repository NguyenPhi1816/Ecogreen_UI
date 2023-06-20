import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NewsLayout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { NEWS } from '../../news';
import { useEffect, useState } from 'react';
import ContactButtons from '../../components/ContactButtons/ContactButtons';

const cx = classNames.bind(styles);

const NewsLayout = ({ offsetWidth }) => {
    const id = useParams().id;
    const [data, setData] = useState({});
    const [dataIndex, setDataIndex] = useState(-1);

    useEffect(() => {
        let myData = NEWS.filter((item) => item.id === id)[0];
        if (myData) setData(myData);
        else window.location.replace('/');
    }, [id]);

    useEffect(() => {
        setDataIndex(NEWS.indexOf(data));
    }, [data]);

    return (
        <>
            {offsetWidth < 1000 ? <NavbarMobile /> : <Navbar />}
            <section>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('header')}>
                            <a href="/news">Tin tức Ecogreen</a>
                            <h1>{data && data.title}</h1>
                        </div>
                        <div className={cx('body')}>{data && data.body}</div>
                        <div className={cx('footer')}>
                            <div className={cx('navigator')}>
                                <a
                                    href={`/news/id=${
                                        dataIndex !== -1 &&
                                        NEWS[
                                            dataIndex - 1 < 0
                                                ? NEWS.length - 1
                                                : dataIndex - 1
                                        ].id
                                    }`}
                                >
                                    <div>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </div>
                                    <div>
                                        <p>
                                            {dataIndex !== -1 &&
                                                NEWS[
                                                    dataIndex - 1 < 0
                                                        ? NEWS.length - 1
                                                        : dataIndex - 1
                                                ].title}
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href={`/news/id=${
                                        dataIndex !== -1 &&
                                        NEWS[
                                            dataIndex + 1 > NEWS.length - 1
                                                ? NEWS.length - 1
                                                : dataIndex + 1
                                        ].id
                                    }`}
                                >
                                    <div>
                                        <p>
                                            {dataIndex !== -1 &&
                                                NEWS[
                                                    dataIndex + 1 >
                                                    NEWS.length - 1
                                                        ? 0
                                                        : dataIndex + 1
                                                ].title}
                                        </p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('another-content')}>
                        <h2>Tin mới</h2>
                        <ul>
                            {NEWS.slice(-5).map(
                                (item) =>
                                    item.id !== id && (
                                        <li>
                                            <a href={`/news/id=${item.id}`}>
                                                {item.title}
                                            </a>
                                        </li>
                                    ),
                            )}
                        </ul>
                        <a href="/news">Xem thêm {'>>>'}</a>
                    </div>
                </div>
                <ContactButtons />
            </section>
            <Footer />
        </>
    );
};

export default NewsLayout;

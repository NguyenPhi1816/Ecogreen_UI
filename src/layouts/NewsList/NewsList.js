import classNames from 'classnames/bind';
import styles from './NewsList.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/NavbarMobile/NavbarMobile';
import Footer from '../components/Footer/Footer';
import { NEWS } from '../../news';
import NewsItem from '../../components/NewsItem/NewsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const NewsList = ({ offsetWidth }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    console.log((currentPage - 1) * 10, currentPage * 10);

    return (
        <>
            {offsetWidth < 1000 ? <NavbarMobile /> : <Navbar />}
            <section>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <h1>Tin tức Eco green</h1>
                        <ul>
                            {NEWS.slice(
                                (currentPage - 1) * 10,
                                currentPage * 10,
                            ).map((item) => (
                                <li key={item.id}>
                                    <NewsItem data={item} />
                                </li>
                            ))}
                        </ul>
                        <div className={cx('navigator')}>
                            <span
                                className={cx('navigator-item')}
                                onClick={() =>
                                    handleChangePage(
                                        currentPage - 1 > 0
                                            ? currentPage - 1
                                            : 1,
                                    )
                                }
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                            {Array.from({
                                length: Math.ceil(NEWS.length / 10),
                            }).map((_, index) => (
                                <span
                                    key={index}
                                    className={cx('navigator-item', {
                                        active: currentPage === index + 1,
                                    })}
                                    onClick={() => handleChangePage(index + 1)}
                                >
                                    {index + 1}
                                </span>
                            ))}

                            <span
                                className={cx('navigator-item')}
                                onClick={() =>
                                    handleChangePage(
                                        currentPage + 1 <=
                                            Math.ceil(NEWS.length / 10)
                                            ? currentPage + 1
                                            : Math.ceil(NEWS.length / 10),
                                    )
                                }
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>
                    </div>
                    <div className={cx('another-content')}>
                        <h2>Tin mới</h2>
                        <ul>
                            {NEWS.slice(-5).map((item) => (
                                <li key={item.id}>
                                    <a href={`/news/id=${item.id}`}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsList;

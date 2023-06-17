import classNames from 'classnames/bind';
import styles from './News.module.scss';

import { NEWS } from '../../../news';
import NewsItem from '../../../components/NewsItem/NewsItem';
import { useContext } from 'react';
import { Context } from '../../../App';

const cx = classNames.bind(styles);

function News({ id }) {
    const { language } = useContext(Context);

    return (
        <section className={cx('news')} id={id}>
            <div className={cx('news-container')}>
                <h2 className={cx('news-title')}>
                    {language === 'en' ? 'Lastest News' : 'Tin tức mới nhất'}
                </h2>
                <div className={cx('list-item-container')}>
                    <ul>
                        {NEWS.slice(-5).map((item) => (
                            <li key={item.id}>
                                <NewsItem data={item} />
                            </li>
                        ))}
                    </ul>
                </div>
                <a href="/news">
                    {language === 'en' ? 'Read more' : 'Xem thêm'} {'>>>'}
                </a>
            </div>
        </section>
    );
}

export default News;

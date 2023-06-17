import classNames from 'classnames/bind';
import styles from './NewsItem.module.scss';

const cx = classNames.bind(styles);

const NewsItem = ({ data = {} }) => {
    return (
        <a href={`/news/id=${data.id}`}>
            <div className={cx('container')}>
                <div className={cx('thumbnail')}>
                    <img src={data.thumb} alt={data.title} />
                </div>
                <div className={cx('info')}>
                    <h2>{data.title}</h2>
                    <div className={cx('underline')}></div>
                    <p>{data.openingParagraph}</p>
                </div>
            </div>
        </a>
    );
};

export default NewsItem;

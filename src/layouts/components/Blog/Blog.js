import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDays,
    faTag,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import { BLOGS } from '../../../config';

const cx = classNames.bind(styles);

function Blog({ id }) {
    return (
        <section className={cx('blog')} id={id}>
            <div className={cx('blog-container')}>
                <div className={cx('blog-title')}>
                    <h2 className={cx('blog-title-main')}>
                        Updates From Our Blog
                    </h2>
                    <p className={cx('blog-title-sub')}>
                        CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT
                        AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​
                    </p>
                </div>

                <div className={cx('blog-list')}>
                    {BLOGS.map((blog, index) => (
                        <div className={cx('blog-item')} key={index}>
                            <img src={blog.images_url} alt="blog thumb" />
                            <div className={cx('upload-date')}>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span>{blog.upload_date}</span>
                            </div>
                            <div className={cx('tag')}>
                                <FontAwesomeIcon icon={faTag} />
                                <span>{blog.tag}</span>
                            </div>
                            <div className={cx('blog-content')}>
                                <h3 className={cx('blog-content-name')}>
                                    {blog.name}
                                </h3>
                                <p className={cx('blog-content-description')}>
                                    {blog.description}
                                </p>
                                <a
                                    href="/"
                                    className={cx('continue-reading-btn')}
                                >
                                    Continue reading
                                </a>
                            </div>
                            <div className={cx('blog-author')}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>{`by ${blog.author}`}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;

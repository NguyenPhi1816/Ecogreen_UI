import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';

import { GRID_IMAGES } from '../../../config';

const cx = classNames.bind(styles);

function Gallery() {
    return (
        <section className={cx('gallery')}>
            <div className={cx('gallery-container')}>
                <div className={cx('gallery-title')}>
                    <h2 className={cx('gallery-title-main')}>
                        Explore The Neightborhood​
                    </h2>
                    <p className={cx('gallery-title-sub')}>
                        THERE ARE DIFFERENT PROPERTY OPTIONS TO CHOOSE FROM,
                        EACH SERVING A PURPOSE TO HELP YOU BUILD A FINISHED
                        SITE.​ ​
                    </p>
                </div>
                <div className={cx('gallery-grid')}>
                    {GRID_IMAGES.map((item, index) => (
                        <div
                            className={cx(
                                'gallery-grid-item',
                                `item-${index + 1}`,
                            )}
                            key={index}
                        >
                            <img src={item.url} alt="Grid item" />
                            <div className={cx('gallery-grid-item-title')}>
                                <span
                                    className={cx(
                                        'gallery-grid-item-title-sub',
                                    )}
                                >
                                    {item.subTitle}
                                </span>
                                <h3
                                    className={cx(
                                        'gallery-grid-item-title-main',
                                    )}
                                >
                                    {item.mainTitle}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

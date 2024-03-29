import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import { Context } from '../../../App';
import { gallery, gallery_vi } from '../../../config';

const cx = classNames.bind(styles);

function Gallery({ id }) {
    const { language } = useContext(Context);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(() => (language === 'en' ? gallery : gallery_vi));
    }, [language]);

    return (
        <section className={cx('gallery')} id={id}>
            {
                <div className={cx('gallery-container')}>
                    <div className={cx('gallery-title')}>
                        <h2 className={cx('gallery-title-main')}>
                            {language === 'en'
                                ? 'Modern Furniture For Your Home'
                                : 'Nội thất hiện đại cho mái ấm của bạn'}
                        </h2>
                        <p className={cx('gallery-title-sub')}>
                            {language === 'en'
                                ? 'Enjoy a convenient life with our furniture supply and maintenance service.'
                                : 'Tận hưởng cuộc sống tiện nghi với dịch vụ cung cấp và bảo trì nội thất của chúng tôi.'}
                        </p>
                    </div>
                    <div className={cx('gallery-grid')}>
                        {data.map((item, index) => (
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
                                        {item.desc}
                                    </span>
                                    <h3
                                        className={cx(
                                            'gallery-grid-item-title-main',
                                        )}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </section>
    );
}

export default Gallery;

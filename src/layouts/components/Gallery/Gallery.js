import { useState, useEffect } from 'react';
import { dbRef } from '../../../firebase';
import { get, child } from 'firebase/database';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';

const cx = classNames.bind(styles);

function Gallery({ id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        get(child(dbRef, `gallery`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let images = Object.values(snapshot.val());
                    setData(images);
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className={cx('gallery')} id={id}>
            {
                <div className={cx('gallery-container')}>
                    <div className={cx('gallery-title')}>
                        <h2 className={cx('gallery-title-main')}>
                            Modern Furniture For Your Home
                        </h2>
                        <p className={cx('gallery-title-sub')}>
                            Enjoy a convenient life with our furniture supply
                            and maintenance service.
                        </p>
                    </div>
                    <div className={cx('gallery-grid')}>
                        {data &&
                            data.map((item, index) => (
                                <div
                                    className={cx(
                                        'gallery-grid-item',
                                        `item-${index + 1}`,
                                    )}
                                    key={index}
                                >
                                    <img src={item.url} alt="Grid item" />
                                    <div
                                        className={cx(
                                            'gallery-grid-item-title',
                                        )}
                                    >
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

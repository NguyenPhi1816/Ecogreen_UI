import { useState, useEffect } from 'react';
import { dbRef } from '../../../firebase';
import { get, child } from 'firebase/database';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';

import { GRID_IMAGES } from '../../../config';

const cx = classNames.bind(styles);

function Gallery({ id }) {
    const [data, setData] = useState([]);
    const [currentImages, setCurrentImages] = useState([]);

    useEffect(() => {
        get(child(dbRef, `gallery`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                    setCurrentImages(() => {
                        let images = [];
                        for (let i = 0; i < 7; i++) {
                            images.push(
                                snapshot.val()[Math.floor(Math.random() * 33)],
                            );
                        }
                        return images;
                    });
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        const timerID = setInterval(() => {
            let images = [];
            for (let i = 0; i < 7; i++) {
                images.push(data[Math.floor(Math.random() * 33)]);
            }
            setCurrentImages(images);
        }, 5000);

        return () => {
            clearInterval(timerID);
        };
    }, [data]);

    return (
        <section className={cx('gallery')} id={id}>
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
                    {currentImages.map((item, index) => (
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
                            <div
                                className={cx('overlay')}
                                // style={{
                                //     animation: 'blur 1s linear 4s infinite',
                                // }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

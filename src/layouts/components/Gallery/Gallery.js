import { useState, useEffect } from 'react';
import { dbRef } from '../../../firebase';
import { get, child } from 'firebase/database';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';

const cx = classNames.bind(styles);

function Gallery({ id }) {
    const [data, setData] = useState([]);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        get(child(dbRef, `gallery`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                    setCurrentImages(() => {
                        let images = [];
                        for (let i = 0; i < 7; i++) {
                            images.push(snapshot.val()[i]);
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
            setCurrentImages((prev) => {
                let images = prev;
                let image = data[Math.floor(Math.random() * 33)];
                while (prev.includes(image)) {
                    image = data[Math.floor(Math.random() * 33)];
                }
                images[currentIndex] = image;
                return images;
            });
            setCurrentIndex((prev) => {
                return prev + 1 < 7 ? prev + 1 : 0;
            });
        }, 2000);

        return () => {
            clearInterval(timerID);
        };
    }, [currentIndex, data]);

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
                                className={cx('overlay', {
                                    animate:
                                        index ===
                                        (currentIndex - 1 < 0
                                            ? 6
                                            : currentIndex - 1),
                                })}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

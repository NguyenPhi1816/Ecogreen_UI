import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import { LanguageContext } from '../../../App';
import { child, get } from 'firebase/database';
import { dbRef } from '../../../firebase';

const cx = classNames.bind(styles);

const Feedback = ({ id }) => {
    const { language } = useContext(LanguageContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        get(child(dbRef, 'feedback'))
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
        <section className={cx('feedback')} id={id}>
            <div className={cx('title')}>
                <h2>
                    {language === 'en'
                        ? 'Feed Back About Eco Green SaiGon'
                        : 'Khách Hàng Nói Gì Về Eco Green Sài Gòn'}
                </h2>
                <div className={cx('underline')}></div>
            </div>
            <div className={cx('image-container')}>
                {data &&
                    data.map((item, index) => (
                        <img
                            src={item}
                            alt="feedback"
                            key={index}
                            className={cx(`img-${index}`)}
                        />
                    ))}
            </div>
            <div className={cx('leaf')}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/Lovepik_com-400205005-cartoon-leaves.png?alt=media&token=127f9914-789b-4471-8002-e400b7d17d6a"
                    alt="leaf"
                />
            </div>
        </section>
    );
};

export default Feedback;

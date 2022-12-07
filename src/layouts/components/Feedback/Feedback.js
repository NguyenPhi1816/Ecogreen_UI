import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import { LanguageContext } from '../../../App';
import { child, get } from 'firebase/database';
import { dbRef } from '../../../firebase';
import ImagesModal from '../../../components/ImagesModal';

const cx = classNames.bind(styles);

const Feedback = ({ offsetWidth, id }) => {
    const { language } = useContext(LanguageContext);
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

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
                            onClick={handleShowModal}
                        />
                    ))}
            </div>
            <div className={cx('leaf')}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/Lovepik_com-400205005-cartoon-leaves.png?alt=media&token=127f9914-789b-4471-8002-e400b7d17d6a"
                    alt="leaf"
                />
            </div>

            {showModal && (
                <ImagesModal
                    offsetWidth={offsetWidth}
                    handleClose={handleShowModal}
                    data={{ images: data }}
                    showFullImage={true}
                />
            )}
        </section>
    );
};

export default Feedback;

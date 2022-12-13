import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Utilities.module.scss';
import { LanguageContext } from '../../../App';
import ImagesModal from '../../../components/ImagesModal';
import { utilities } from '../../../config';

const cx = classNames.bind(styles);

const Utilities = ({ offsetWidth, id }) => {
    const { language } = useContext(LanguageContext);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <section className={cx('feedback')} id={id}>
            <div className={cx('title')}>
                <h2>
                    {language === 'en'
                        ? 'Utilities Only For Eco Green Residents'
                        : 'Tiện ích chỉ dành cho cư dân Eco Green'}
                </h2>
                <div className={cx('underline')}></div>
            </div>
            <div className={cx('image-container')}>
                {utilities.thumbs
                    .slice(0, offsetWidth >= 1025 ? 5 : 3)
                    .map((item, index) => (
                        <img
                            src={item}
                            alt="feedback"
                            key={index}
                            className={cx(`img-${index}`)}
                            onClick={handleShowModal}
                        />
                    ))}
            </div>
            <button className={cx('more-btn')} onClick={handleShowModal}>
                {language === 'en' ? 'MORE' : 'THÊM'}
            </button>
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
                    data={{ images: utilities.all }}
                />
            )}
        </section>
    );
};

export default Utilities;

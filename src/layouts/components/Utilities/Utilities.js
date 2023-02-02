import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Utilities.module.scss';
import { Context } from '../../../App';
import ImagesModal from '../../../components/ImagesModal';
import { utilities } from '../../../config';

const cx = classNames.bind(styles);

const Utilities = ({ id }) => {
    const { language, offsetWidth } = useContext(Context);
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
                    src="https://ecogreenq7.vn/rentalservicesg/images/utilities-leaf.png"
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

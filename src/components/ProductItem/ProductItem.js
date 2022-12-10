import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBath,
    faBed,
    faRulerCombined,
    faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { Link } from 'react-router-dom';

let cx = classNames.bind(styles);

function ProductItem({ data, handleExpandClick, className }) {
    const { language } = useContext(LanguageContext);

    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('product-item-container')}>
                <div className={cx('header')}>
                    <div className={cx('image-container')}>
                        <img src={data.thumbs[0]} alt="thumb" />
                    </div>
                    <button
                        className={cx('show-modal')}
                        onClick={handleExpandClick}
                    >
                        <FontAwesomeIcon
                            icon={faUpRightAndDownLeftFromCenter}
                        />
                    </button>
                    <div className={cx('apartment-type')}>
                        <p>{language === 'en' ? 'For rent' : 'Cho Thuê'}</p>
                    </div>
                </div>
                <div className={cx('product-details')}>
                    <h3 className={cx('name')}>{data.name}</h3>
                    <span className={cx('price')}>{data.whoIsInterested}</span>
                    <div className={cx('details-btn-wrapper')}>
                        <Link
                            to={`/productId=${data.id}`}
                            className={cx('details-btn')}
                        >
                            {language === 'en' ? 'Details' : 'Chi tiết'}
                        </Link>
                    </div>
                    <div className={cx('details')}>
                        <div className={cx('details-item')}>
                            <FontAwesomeIcon icon={faBed} />
                            <span>{data.bedrooms}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <FontAwesomeIcon icon={faBath} />
                            <span>{data.bathrooms}</span>
                        </div>
                        <div className={cx('details-item')}>
                            <FontAwesomeIcon icon={faRulerCombined} />
                            <span>
                                {data.area} m<sup>2</sup>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;

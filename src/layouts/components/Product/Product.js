import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import ProductItem from '../../../components/ProductItem';
import ImagesModal from '../../../components/ImagesModal';
import Form from '../../../components/Form';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';
import { Link } from 'react-router-dom';
import { products, products_vi, priceTable } from '../../../config';

const cx = classNames.bind(styles);

function Product({ offsetWidth, id }) {
    const DESKTOP_AMOUNT = 6;
    const MOBILE_AMOUNT = 4;
    const { language } = useContext(LanguageContext);
    const [showImagesSlider, setShowImagesSlider] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(() =>
        offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT,
    );
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        setData(() => (language === 'en' ? products : products_vi));
    }, [language]);

    const handleLoadMore = (e) => {
        if (amount === data.length) {
            setAmount(() =>
                offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT,
            );
        } else {
            e.preventDefault();
            const addition =
                offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT;
            let newAmount = amount + addition;
            if (newAmount > data.length) {
                newAmount = data.length;
            }
            setAmount(newAmount);
        }
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    return (
        <section className={cx('product')} id={id}>
            <div className={cx('product-container')}>
                <div className={cx('price-table')} id="contact">
                    <h2 className={cx('product-title-main')}>
                        {language === 'en'
                            ? 'Price list for sale and rent'
                            : 'Bảng giá bán và cho thuê'}
                    </h2>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('header')}>
                                <th>
                                    {language === 'en' ? 'Area' : 'Diện tích'}
                                    (m<sup>2</sup>)
                                </th>
                                <th>
                                    {language === 'en'
                                        ? 'Bedrooms'
                                        : 'Phòng ngủ'}
                                </th>
                                <th>
                                    {language === 'en'
                                        ? 'Selling Price'
                                        : 'Giá bán'}
                                    <br />
                                    {language === 'en' ? '(b VND)' : '(tỉ VND)'}
                                </th>
                                <th>
                                    {language === 'en'
                                        ? 'Rental Price'
                                        : 'Giá thuê'}
                                    <br />
                                    {language === 'en'
                                        ? '(m VND/month)'
                                        : '(triệu VND/tháng)'}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceTable.map((item, index) => (
                                <tr
                                    className={cx(`row${index + 1}`)}
                                    key={index}
                                >
                                    <td>{item.area}</td>
                                    <td>
                                        {language === 'en'
                                            ? item['bedrooms-en']
                                            : item.bedrooms}
                                    </td>
                                    <td>{item.salePrice}</td>
                                    <td>{item.retalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={cx('note')}>
                    <p>
                        {language === 'en'
                            ? 'Price may not include furniture'
                            : 'Giá có thể không bao gồm nội thất'}
                    </p>
                </div>
                <button
                    className={cx('show-form-btn')}
                    onClick={handleShowForm}
                >
                    {language === 'en'
                        ? 'Contact us for more'
                        : 'Liên hệ với chúng tôi'}
                </button>
                <div className={cx('product-title')}>
                    <h2 className={cx('product-title-main')}>
                        {language === 'en'
                            ? 'Our Finest Apartments'
                            : 'Những căn hộ tốt nhất của chúng tôi'}
                    </h2>
                    <p className={cx('product-title-sub')}>
                        {language === 'en'
                            ? 'Amazing "Green views" with best price only for you​'
                            : 'Một không gian xanh tuyệt vời với giá tốt nhất dành cho bạn'}
                    </p>
                </div>
                <div className={cx('product-grid')}>
                    <div className={cx('product-items')}>
                        {data.slice(0, amount).map((item) => (
                            <Link key={item.id} to={`/productId=${item.id}`}>
                                <ProductItem
                                    data={item}
                                    handleExpandClick={(e) => {
                                        e.preventDefault();
                                        setCurrentItem(item);
                                        setShowImagesSlider(true);
                                    }}
                                />
                            </Link>
                        ))}
                    </div>
                    <a
                        href={`#${id}`}
                        className={cx('load-more')}
                        onClick={(e) => handleLoadMore(e)}
                    >
                        {amount === data.length
                            ? language === 'en'
                                ? 'HIDE'
                                : 'ẨN BỚT'
                            : language === 'en'
                            ? 'LOAD MORE'
                            : 'TẢI THÊM'}
                    </a>
                </div>
            </div>
            {showImagesSlider && (
                <ImagesModal
                    offsetWidth={offsetWidth}
                    handleClose={() => {
                        setShowImagesSlider(false);
                    }}
                    data={currentItem}
                />
            )}
            {showForm && (
                <div className={cx('overlay')}>
                    <div className={cx('form')}>
                        <button
                            onClick={handleShowForm}
                            className={cx('close-form')}
                        >
                            x
                        </button>
                        <Form type="vertical" className={cx('form-custom')} />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Product;

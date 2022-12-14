import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import ProductItem from '../../../components/ProductItem';
import ImagesModal from '../../../components/ImagesModal';
import { useContext } from 'react';
import { LanguageContext } from '../../../App';
import { Link } from 'react-router-dom';
import { products, products_vi, priceTable } from '../../../config';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showSpinner, setShowSpinner] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

    const sendData = async (data, e) => {
        data.phone = `'${data.phone}`;
        setShowSpinner(true);
        await axios.post(
            'https://api.sheetmonkey.io/form/khaKd8gKxtA5cdnhq7MNZJ',
            data,
        );
        setShowSpinner(false);
        setShowSuccessMessage(true);
        e.target.reset();
    };

    useEffect(() => {
        let timerId;
        if (showSuccessMessage) {
            timerId = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
        }
        return () => clearTimeout(timerId);
    }, [showSuccessMessage]);

    return (
        <section className={cx('product')} id={id}>
            <div className={cx('product-container')}>
                <div className={cx('price-table')} id="contact">
                    <h2 className={cx('product-title-main')}>
                        {language === 'en'
                            ? 'Price list for sale and rent'
                            : 'B???ng gi?? b??n v?? cho thu??'}
                    </h2>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('header')}>
                                <th>
                                    {language === 'en' ? 'Area ' : 'Di???n t??ch '}
                                    (m<sup>2</sup>)
                                </th>
                                <th>
                                    {language === 'en'
                                        ? 'Bedrooms'
                                        : 'Ph??ng ng???'}
                                </th>
                                <th>
                                    {language === 'en'
                                        ? 'Selling Price '
                                        : 'Gi?? b??n '}
                                    {offsetWidth > 767 &&
                                        (language === 'en'
                                            ? '(b VND)'
                                            : '(t??? VND)')}
                                </th>
                                <th>
                                    {language === 'en'
                                        ? 'Rental Price '
                                        : 'Gi?? thu?? '}
                                    {offsetWidth > 767 &&
                                        (language === 'en'
                                            ? '(m VND/month)'
                                            : '(tri???u VND/th??ng)')}
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
                            : 'Gi?? c?? th??? kh??ng bao g???m n???i th???t'}
                    </p>
                </div>
                <button
                    className={cx('show-form-btn')}
                    onClick={handleShowForm}
                >
                    {language === 'en'
                        ? 'Contact us for more'
                        : 'Li??n h??? v???i ch??ng t??i'}
                </button>
                <div className={cx('product-title')}>
                    <h2 className={cx('product-title-main')}>
                        {language === 'en'
                            ? 'Our Finest Apartments'
                            : 'Nh???ng c??n h??? t???t nh???t c???a ch??ng t??i'}
                    </h2>
                    <p className={cx('product-title-sub')}>
                        {language === 'en'
                            ? 'Amazing "Green views" with best price only for you???'
                            : 'M???t kh??ng gian xanh tuy???t v???i v???i gi?? t???t nh???t d??nh cho b???n'}
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
                                : '???N B???T'
                            : language === 'en'
                            ? 'LOAD MORE'
                            : 'T???I TH??M'}
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
                        <div className={cx('form-title')}>
                            {language === 'en'
                                ? 'SUPPORT ON DEMAND'
                                : 'H??? TR??? THEO NHU C???U'}
                        </div>
                        <form
                            className={cx('form-container')}
                            onSubmit={handleSubmit((data, e) =>
                                sendData(data, e),
                            )}
                        >
                            <input
                                placeholder={
                                    language === 'en'
                                        ? 'Your name'
                                        : 'H??? v?? t??n'
                                }
                                className={cx('form-name')}
                                {...register('name', {
                                    required: true,
                                })}
                            />
                            {errors.name && (
                                <p className={cx('invalid-message')}>
                                    {language === 'en'
                                        ? 'This field is required'
                                        : 'Th??ng tin n??y l?? b???t bu???c'}
                                </p>
                            )}
                            <input
                                placeholder={
                                    language === 'en'
                                        ? 'Your phone number'
                                        : 'S??? ??i???n tho???i'
                                }
                                className={cx('form-phone-number')}
                                {...register('phone', {
                                    required: true,
                                })}
                            />
                            {errors.phone && (
                                <p className={cx('invalid-message')}>
                                    {language === 'en'
                                        ? 'This field is required'
                                        : 'Th??ng tin n??y l?? b???t bu???c'}
                                </p>
                            )}
                            <div className={cx('form-control')}>
                                <label>
                                    <input
                                        type="radio"
                                        name="type"
                                        value="buy"
                                        {...register('type', {
                                            required: true,
                                        })}
                                    />
                                    {language === 'en'
                                        ? 'I want to buy'
                                        : 'T??m mua c??n h???'}
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="type"
                                        value="rent"
                                        {...register('type', {
                                            required: true,
                                        })}
                                    />
                                    {language === 'en'
                                        ? 'I want to rent'
                                        : 'T??m thu?? c??n h???'}
                                </label>
                            </div>
                            {errors.type && (
                                <p className={cx('invalid-message')}>
                                    {language === 'en'
                                        ? 'This field is required'
                                        : 'Th??ng tin n??y l?? b???t bu???c'}
                                </p>
                            )}
                            <p className={cx('checkbox-title')}>
                                {language === 'en'
                                    ? 'I am interested in:'
                                    : 'Anh/Ch??? ??ang quan t??m t???i c??n h???:'}
                            </p>
                            <div className={cx('form-control')}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="apartment-type"
                                        value="1bed"
                                        {...register('apartmentType', {
                                            required: true,
                                        })}
                                    />
                                    <p>
                                        {language === 'en'
                                            ? '1 Bedroom Apartment: '
                                            : 'C??n h??? 1PN: '}
                                        44 m<sup>2</sup>
                                    </p>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="apartment-type"
                                        value="2bed"
                                        {...register('apartmentType', {
                                            required: true,
                                        })}
                                    />
                                    <p>
                                        {language === 'en'
                                            ? '2 Bedrooms Apartment: '
                                            : 'C??n h??? 2PN: '}
                                        52 - 60 - 67 - 72 m<sup>2</sup>
                                    </p>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="apartment-type"
                                        value="3bed"
                                        {...register('apartmentType', {
                                            required: true,
                                        })}
                                    />
                                    <p>
                                        {language === 'en'
                                            ? '3 Bedrooms Apartment: '
                                            : 'C??n h??? 3PN: '}
                                        75 - 81 - 86 - 95 m<sup>2</sup>
                                    </p>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="apartment-type"
                                        value="shophouse"
                                        {...register('apartmentType', {
                                            required: true,
                                        })}
                                    />
                                    <p>Shophouse</p>
                                </label>
                            </div>
                            {errors.type && (
                                <p className={cx('invalid-message')}>
                                    {language === 'en'
                                        ? 'This field is required'
                                        : 'Th??ng tin n??y l?? b???t bu???c'}
                                </p>
                            )}
                            <button type="submit" className={cx('submit')}>
                                {showSpinner && (
                                    <FontAwesomeIcon
                                        icon={faCircleNotch}
                                        className={cx('spinner')}
                                    />
                                )}
                                {language === 'en'
                                    ? 'SEND MESSAGE'
                                    : 'HO??N T???T ????NG K??'}
                            </button>
                            {showSuccessMessage && (
                                <p className={cx('success-message')}>
                                    Your information was sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Product;

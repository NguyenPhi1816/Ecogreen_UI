import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import ProductItem from '../../../components/ProductItem';
import { PRODUCT_ITEMS } from '../../../config';
import ImagesModal from '../../../components/ImagesModal';

const cx = classNames.bind(styles);

function Product({ offsetWidth, id }) {
    const [showImagesSlider, setShowImagesSlider] = useState(false);
    const [data, setData] = useState(PRODUCT_ITEMS[0]);

    return (
        <section className={cx('product')} id={id}>
            <div className={cx('product-container')}>
                <div className={cx('product-title')}>
                    <h2 className={cx('product-title-main')}>
                        Our Finest Apartments
                    </h2>
                    <p className={cx('product-title-sub')}>
                        Amazing "Green views" with best price only for you​
                    </p>
                </div>
                <div className={cx('product-grid')}>
                    <div className={cx('product-items')}>
                        {PRODUCT_ITEMS.map((item) => (
                            <Link key={item.id} to={`/productId=${item.id}`}>
                                <ProductItem
                                    data={item}
                                    handleExpandClick={(e) => {
                                        e.preventDefault();
                                        setData(item);
                                        setShowImagesSlider(true);
                                    }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={cx('price-table')}>
                    <h2 className={cx('product-title-main')}>
                        Price list for sale and rent
                    </h2>
                    <table className={cx('table')}>
                        <tr className={cx('header')}>
                            <th>
                                Area (m<sup>2</sup>)
                            </th>
                            <th>Bedrooms</th>
                            <th>Selling Price (VND)</th>
                            <th>Rental Price (VND)</th>
                        </tr>
                        <tr className={cx('row1')}>
                            <td>
                                52m<sup>2</sup> to 65m<sup>2</sup>
                            </td>
                            <td>1 bedroom + 1 to 2 bedrooms</td>
                            <td>3.2 to 3.6 billion</td>
                            <td>10 to 12 million/month</td>
                        </tr>
                        <tr className={cx('row2')}>
                            <td>
                                66m<sup>2</sup> to 71m<sup>2</sup>
                            </td>
                            <td>2 bedrooms to 2 bedrooms + 1</td>
                            <td>3.8 to 4.1 billion</td>
                            <td>13 to 14 million/month</td>
                        </tr>
                        <tr className={cx('row3')}>
                            <td>
                                75m<sup>2</sup> to 80m<sup>2</sup>
                            </td>
                            <td>2 bedrooms + 1 to 3 bedrooms</td>
                            <td>4.3 to 4.5 billion</td>
                            <td>15 to 16.5 million/month</td>
                        </tr>
                        <tr className={cx('row4')}>
                            <td>
                                86m<sup>2</sup> to 95m<sup>2</sup>
                            </td>
                            <td>2 bedrooms + 1 to 3 bedrooms</td>
                            <td>4.7 to 5.3 billion</td>
                            <td>17.5 to 19 million/month</td>
                        </tr>
                    </table>
                </div>
            </div>
            {showImagesSlider && (
                <ImagesModal
                    offsetWidth={offsetWidth}
                    handleClose={() => {
                        setShowImagesSlider(false);
                    }}
                    data={data}
                />
            )}
        </section>
    );
}

export default Product;

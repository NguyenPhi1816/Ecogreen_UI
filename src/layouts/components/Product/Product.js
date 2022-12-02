import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { child, get } from 'firebase/database';

import ProductItem from '../../../components/ProductItem';
import ImagesModal from '../../../components/ImagesModal';
import { dbRef } from '../../../firebase';

const cx = classNames.bind(styles);

function Product({ offsetWidth, id }) {
    const DESKTOP_AMOUNT = 3;
    const MOBILE_AMOUNT = 4;
    const [showImagesSlider, setShowImagesSlider] = useState(false);
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(() =>
        offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT,
    );
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        get(child(dbRef, `products`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleLoadMore = () => {
        if (amount === data.length) {
            setAmount(() =>
                offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT,
            );
        } else {
            const addition =
                offsetWidth >= 1024 ? DESKTOP_AMOUNT : MOBILE_AMOUNT;
            let newAmount = amount + addition;
            if (newAmount > data.length) {
                newAmount = data.length;
            }
            setAmount(newAmount);
        }
    };

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
                    <button
                        className={cx('load-more')}
                        onClick={handleLoadMore}
                    >
                        {amount === data.length ? 'HIDE' : 'LOAD MORE'}
                    </button>
                </div>
                <div className={cx('price-table')}>
                    <h2 className={cx('product-title-main')}>
                        Price list for sale and rent
                    </h2>
                    <table className={cx('table')}>
                        <thead>
                            <tr className={cx('header')}>
                                <th>
                                    Area (m<sup>2</sup>)
                                </th>
                                <th>Bedrooms</th>
                                <th>
                                    Selling Price <br /> (b VND)
                                </th>
                                <th>
                                    Rental Price <br /> (m VND/month)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={cx('row1')}>
                                <td>52 to 65</td>
                                <td>1 BR + 1 to 2 BRs</td>
                                <td>3.2 to 3.6</td>
                                <td>10 to 12</td>
                            </tr>
                            <tr className={cx('row2')}>
                                <td>66 to 71</td>
                                <td>2 BRs to 2 BRs + 1</td>
                                <td>3.8 to 4.1</td>
                                <td>13 to 14</td>
                            </tr>
                            <tr className={cx('row3')}>
                                <td>75 to 80</td>
                                <td>2 BRs + 1 to 3 BRs</td>
                                <td>4.3 to 4.5</td>
                                <td>15 to 16.5</td>
                            </tr>
                            <tr className={cx('row4')}>
                                <td>86 to 95</td>
                                <td>2 BRs + 1 to 3 BRs</td>
                                <td>4.7 to 5.3</td>
                                <td>17.5 to 19</td>
                            </tr>
                        </tbody>
                    </table>
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
        </section>
    );
}

export default Product;

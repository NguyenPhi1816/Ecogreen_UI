import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import ProductItem from '../../../components/ProductItem';
import { PRODUCT_ITEMS } from '../../../config';
import ImagesModal from '../../../components/ImagesModal';

const cx = classNames.bind(styles);

function Product({ offsetWidth }) {
    const [showImagesSlider, setShowImagesSlider] = useState(false);
    const [data, setData] = useState(PRODUCT_ITEMS[0]);

    return (
        <section className={cx('product')}>
            <div className={cx('product-container')}>
                <div className={cx('product-title')}>
                    <h2 className={cx('product-title-main')}>
                        Our Featured Exclusives​
                    </h2>
                    <p className={cx('product-title-sub')}>
                        CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT
                        AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​
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

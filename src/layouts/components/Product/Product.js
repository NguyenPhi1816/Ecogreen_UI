import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import ProductItem from '../../../components/ProductItem';
import { PRODUCT_ITEMS } from '../../../config';

const cx = classNames.bind(styles);

function Product() {
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
                            <ProductItem key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;

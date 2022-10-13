import { useParams } from 'react-router-dom';

import Property from '../components/Property';
import PropertyInfo from '../components/PropertyInfo';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';
import { PRODUCT_ITEMS } from '../../config';

function ProductsLayout({ offsetY, offsetWidth }) {
    const productId = useParams().id;

    return (
        <>
            <Property
                offsetWidth={offsetWidth}
                data={PRODUCT_ITEMS[productId]}
            />
            <PropertyInfo
                offsetWidth={offsetWidth}
                offsetY={offsetY}
                data={PRODUCT_ITEMS[productId]}
            />
            <Footer footerForm={false} />
            {offsetY >= 300 && (
                <BackToTop
                    styles={
                        offsetWidth < 768
                            ? {
                                  bottom: '85px',
                                  right: '10px',
                              }
                            : {}
                    }
                />
            )}
        </>
    );
}

export default ProductsLayout;

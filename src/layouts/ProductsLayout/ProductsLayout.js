import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { child, get } from 'firebase/database';

import { dbRef } from '../../firebase';
import Property from '../components/Property';
import PropertyInfo from '../components/PropertyInfo';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';
import { PRODUCT_ITEMS } from '../../config';
import ContactButtons from '../../components/ContactButtons';

function ProductsLayout({ offsetY, offsetWidth }) {
    const productId = parseInt(useParams().id);
    const [data, setData] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        get(child(dbRef, `products`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val());
                    const [item] = snapshot
                        .val()
                        .filter((item) => item.id === productId);
                    setCurrentItem(item);
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            {data && (
                <>
                    <Property offsetWidth={offsetWidth} data={currentItem} />
                    <PropertyInfo
                        offsetWidth={offsetWidth}
                        offsetY={offsetY}
                        currentItem={currentItem}
                        data={data}
                    />
                    <Footer />
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
                    {offsetY >= 300 && <ContactButtons width={offsetWidth} />}
                </>
            )}
        </>
    );
}

export default ProductsLayout;

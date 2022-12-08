import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { child, get } from 'firebase/database';

import { dbRef } from '../../firebase';
import PropertyInfo from '../components/PropertyInfo';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';
import ContactButtons from '../../components/ContactButtons';
import { LanguageContext } from '../../App';
import NavbarMobile from '../../components/NavbarMobile';
import Navbar from '../../components/Navbar';

function ProductsLayout({ offsetY, offsetWidth }) {
    const productId = useParams().id;
    const { language } = useContext(LanguageContext);
    const [data, setData] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        get(child(dbRef, language === 'en' ? 'products' : 'products_vi'))
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
    }, [productId, language]);

    return (
        <>
            {data && (
                <>
                    {offsetWidth < 1000 ? <NavbarMobile /> : <Navbar />}
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

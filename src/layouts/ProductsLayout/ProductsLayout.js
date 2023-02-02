import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyInfo from '../components/PropertyInfo';
import Footer from '../components/Footer';
import BackToTop from '../../components/BackToTop';
import ContactButtons from '../../components/ContactButtons';
import { Context } from '../../App';
import NavbarMobile from '../../components/NavbarMobile';
import Navbar from '../../components/Navbar';
import { products, products_vi } from '../../config';

function ProductsLayout({ offsetY, offsetWidth }) {
    const productId = useParams().id;
    const { language } = useContext(Context);
    const [data, setData] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        setData(() => (language === 'en' ? products : products_vi));
        setCurrentItem(
            () =>
                (language === 'en' ? products : products_vi).filter(
                    (item) => item.id === productId,
                )[0],
        );
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
                    <ContactButtons />
                </>
            )}
        </>
    );
}

export default ProductsLayout;

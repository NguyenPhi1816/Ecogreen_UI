import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
import DefaultLayout from './layouts/DefaultLayout';
import ProductsLayout from './layouts/ProductsLayout';
import NewsLayout from './layouts/NewsLayout';
import NewsList from './layouts/NewsList';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';

const Context = React.createContext();

function App() {
    SwiperCore.use([Autoplay]);
    const [language, setLanguage] = useState('vi');
    const [offsetY, setOffsetY] = useState(0);
    const [offsetWidth, setOffsetWidth] = useState(window.innerWidth);
    function handleScroll() {
        setOffsetY(window.pageYOffset);
    }

    function handleGetWidth() {
        setOffsetWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleGetWidth);

        return () => window.removeEventListener('resize', handleGetWidth);
    }, []);

    return (
        <Router>
            <Context.Provider
                value={{ language, setLanguage, offsetY, offsetWidth }}
            >
                <div className="App">
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<DefaultLayout />} />
                        <Route
                            path="/news"
                            element={<NewsList offsetWidth={offsetWidth} />}
                        />
                        <Route
                            path="/news/id=:id"
                            element={<NewsLayout offsetWidth={offsetWidth} />}
                        />
                        <Route
                            path="/productId=:id"
                            element={
                                <ProductsLayout
                                    offsetY={offsetY}
                                    offsetWidth={offsetWidth}
                                />
                            }
                        />
                        <Route
                            path="/*"
                            element={
                                <DefaultLayout
                                    offsetY={offsetY}
                                    offsetWidth={offsetWidth}
                                />
                            }
                        />
                    </Routes>
                </div>
            </Context.Provider>
        </Router>
    );
}

export { Context };
export default App;

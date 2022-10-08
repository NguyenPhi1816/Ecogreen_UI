import SwiperCore, { Autoplay } from 'swiper';
import DefaultLayout from './layouts/DefaultLayout';
import './App.scss';

function App() {
    SwiperCore.use([Autoplay]);

    return (
        <div className="App">
            <DefaultLayout />
        </div>
    );
}

export default App;

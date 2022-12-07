import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageButton.module.scss';
import { LanguageContext } from '../../App';

const cx = classNames.bind(styles);

const LanguageButton = ({ customClass }) => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChangeLanguage = () => {
        language === 'vi' ? setLanguage('en') : setLanguage('vi');
    };

    return (
        <div className={cx('language-btn-wrapper')}>
            <div
                className={cx('language-btn', customClass)}
                onClick={handleChangeLanguage}
            >
                <span
                    className={cx({
                        vi: language === 'vi',
                        en: language === 'en',
                    })}
                >
                    <img
                        src={
                            language === 'en'
                                ? 'https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/united-states%20(1).png?alt=media&token=b6419243-2aad-4625-887b-788790f830ea'
                                : 'https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/vietnam%20(1).png?alt=media&token=69263a8b-02a2-4ed8-8ee2-18ab47552de9'
                        }
                        alt="flag"
                    />
                </span>
            </div>
        </div>
    );
};

export default LanguageButton;

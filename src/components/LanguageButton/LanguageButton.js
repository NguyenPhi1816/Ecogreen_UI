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
                                ? 'https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/united-states.png?alt=media&token=a6f7e6a3-2c1e-40c4-88a0-c35ad1a7783b'
                                : 'https://firebasestorage.googleapis.com/v0/b/ecogreen-db.appspot.com/o/vietnam.png?alt=media&token=50da4eea-5881-4701-8f95-c36c974cdd62'
                        }
                        alt="flag"
                    />
                </span>
            </div>
        </div>
    );
};

export default LanguageButton;

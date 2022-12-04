import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageButton.module.scss';
import { LanguageContext } from '../../App';

const cx = classNames.bind(styles);

const LanguageButton = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChangeLanguage = () => {
        language === 'vi' ? setLanguage('en') : setLanguage('vi');
    };

    return (
        <div className={cx('language-btn-wrapper')}>
            <div className={cx('language-btn')} onClick={handleChangeLanguage}>
                <span
                    className={cx({
                        vi: language === 'vi',
                        en: language === 'en',
                    })}
                >
                    {language}
                </span>
            </div>
        </div>
    );
};

export default LanguageButton;

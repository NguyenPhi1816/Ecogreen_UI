import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageButton.module.scss';
import { LanguageContext } from '../../App';
import { languageIcon } from '../../config';

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
                                ? languageIcon.en
                                : languageIcon.vi
                        }
                        alt="flag"
                    />
                </span>
            </div>
        </div>
    );
};

export default LanguageButton;

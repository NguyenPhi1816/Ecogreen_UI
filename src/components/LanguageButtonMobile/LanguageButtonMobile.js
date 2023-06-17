import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageButtonMobile.module.scss';
import { Context } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { languageIcon } from '../../config';

const cx = classNames.bind(styles);

const LanguageButtonMobile = () => {
    const { language, setLanguage } = useContext(Context);
    const [icon, setIcon] = useState(languageIcon.vi);
    const [region, setRegion] = useState('VI');
    const [show, setShow] = useState(false);

    useEffect(() => {
        switch (language) {
            case 'vi':
                setIcon(languageIcon.vi);
                setRegion('VI');
                break;
            case 'en':
                setIcon(languageIcon.en);
                setRegion('EN');
                break;
            default:
                setIcon(languageIcon.vi);
                setRegion('VI');
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

    return (
        <div className={cx('language-btn-wrapper')}>
            <div className={cx('language-btn')} onClick={() => setShow(!show)}>
                <div>
                    <img
                        src={icon}
                        alt="Language icon"
                        className={cx('icon')}
                    />
                    <p className={cx('language')}>{region}</p>
                </div>
                <FontAwesomeIcon
                    icon={!show ? faChevronUp : faChevronDown}
                    className={cx('arrow')}
                />
            </div>
            <ul className={cx('languages-container', { show })}>
                <li
                    className={cx('item')}
                    onClick={() => {
                        setLanguage('vi');
                        setShow(false);
                    }}
                >
                    <img
                        src={languageIcon.vi}
                        alt="Language icon"
                        className={cx('icon')}
                    />
                    <p className={cx('language')}>Vietnamese</p>
                </li>
                <li
                    className={cx('item')}
                    onClick={() => {
                        setLanguage('en');
                        setShow(false);
                    }}
                >
                    <img
                        src={languageIcon.en}
                        alt="Language icon"
                        className={cx('icon')}
                    />
                    <p className={cx('language')}>English</p>
                </li>
            </ul>
        </div>
    );
};

export default LanguageButtonMobile;

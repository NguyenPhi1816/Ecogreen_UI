import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageButton.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Context } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { languageIcon } from '../../config';

const cx = classNames.bind(styles);

const LanguageButton = ({ customClass, handleClick }) => {
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
<<<<<<< HEAD
            case 'cn':
                setIcon(languageIcon.cn);
                setRegion('CN');
                break;
=======
            // case 'cn':
            //     setIcon(languageIcon.cn);
            //     setRegion('CN');
            //     break;
>>>>>>> 0641185 (Update)
            default:
                setIcon(languageIcon.vi);
                setRegion('VI');
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

    return (
        <div className={cx('language-btn-wrapper')}>
            <Tippy
                visible={show}
                interactive
                onClickOutside={() => setShow(false)}
                render={(attrs) => (
                    <div className={cx('languages-tooltip')}>
                        <h5 className={cx('languages-title')}>
                            Choose your language
                        </h5>
                        <ul className={cx('languages-container')}>
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
<<<<<<< HEAD
                            <li
=======
                            {/* <li
>>>>>>> 0641185 (Update)
                                className={cx('item')}
                                onClick={() => {
                                    setLanguage('vi');
                                    setShow(false);
                                }}
                            >
                                <img
                                    src={languageIcon.cn}
                                    alt="Language icon"
                                    className={cx('icon')}
                                />
                                <p className={cx('language')}>Chinese</p>
<<<<<<< HEAD
                            </li>
=======
                            </li> */}
>>>>>>> 0641185 (Update)
                        </ul>
                    </div>
                )}
            >
                <div
                    className={cx('language-btn')}
                    onClick={handleClick ? handleClick : () => setShow(!show)}
                >
                    <img
                        src={icon}
                        alt="Language icon"
                        className={cx('icon')}
                    />
                    <p className={cx('language')}>{region}</p>
                    <FontAwesomeIcon
                        icon={!show ? faChevronUp : faChevronDown}
                        className={cx('arrow')}
                    />
                </div>
            </Tippy>
        </div>
    );
};

export default LanguageButton;

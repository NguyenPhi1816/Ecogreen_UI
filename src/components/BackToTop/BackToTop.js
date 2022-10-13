import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';

const cx = classNames.bind(styles);

function BackToTop({ styles = {} }) {
    const handleScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className={cx('back-to-top-btn')} style={styles}>
            <div onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
        </div>
    );
}

export default BackToTop;

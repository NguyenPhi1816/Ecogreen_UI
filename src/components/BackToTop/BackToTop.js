import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';

const cx = classNames.bind(styles);

function BackToTop({ id }) {
    return (
        <div className={cx('back-to-top-btn')}>
            <a href={id}>
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </div>
    );
}

export default BackToTop;

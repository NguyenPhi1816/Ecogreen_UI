import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import ContactButtons from '../ContactButtons';
import styles from './NavbarBottom.module.scss';

const cx = classNames.bind(styles);

const NavbarBottom = ({ offsetWidth, setShowForm }) => {
    return (
        <nav className={cx('navbar-bottom')}>
            <div>
                <ContactButtons width={offsetWidth} onlyIcon={true} />
                <button
                    className={cx('chat')}
                    onClick={() => setShowForm(true)}
                >
                    <FontAwesomeIcon icon={faMessage} />
                </button>
            </div>
        </nav>
    );
};

export default NavbarBottom;

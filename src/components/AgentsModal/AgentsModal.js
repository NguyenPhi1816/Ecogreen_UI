import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AgentsModal.module.scss';

import { logo_url } from '../../config';
import { AGENTS } from '../../config';

const cx = classNames.bind(styles);

function AgentsModal({ handleClose }) {
    return (
        <div className={cx('agents-modal')}>
            <div className={cx('agents-modal-container')}>
                <div className={cx('modal-header')}>
                    <div className={cx('modal-logo')}>
                        <img src={logo_url} alt="logo" />
                    </div>
                    <button
                        className={cx('modal-close-btn')}
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className={cx('modal-body')}>
                    <div className={cx('agents-container')}>
                        <div className={cx('agents-title')}>
                            <h2 className={cx('agents-title-main')}>
                                Meet Our Agents
                            </h2>
                            <p className={cx('agents-title-sub')}>
                                CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY
                                THEM OUT AS LISTS OR GRIDS, FULL-WIDTH OR BOXED
                                ​
                            </p>
                        </div>
                        <div className={cx('agents-list')}>
                            {AGENTS.map((agent, index) => (
                                <div className={cx('agent')} key={index}>
                                    <img
                                        className={cx('avatar')}
                                        src={agent.image_url}
                                        alt={agent.name}
                                    />
                                    <h4 className={cx('name')}>{agent.name}</h4>
                                    <p className={cx('company')}>
                                        {agent.company}
                                    </p>
                                    <p className={cx('description')}>
                                        {agent.description}
                                    </p>
                                    <a className={cx('agent-link')} href="/">
                                        View profile
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentsModal;

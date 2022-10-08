import classNames from 'classnames/bind';
import styles from './Agents.module.scss';

import { AGENTS } from '../../../config';

const cx = classNames.bind(styles);

function Agents() {
    return (
        <section className={cx('agents')}>
            <div className={cx('agents-container')}>
                <div className={cx('agents-title')}>
                    <h2 className={cx('agents-title-main')}>Meet Our Agents</h2>
                    <p className={cx('agents-title-sub')}>
                        CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUT
                        AS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​
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
                            <p className={cx('company')}>{agent.company}</p>
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
        </section>
    );
}

export default Agents;

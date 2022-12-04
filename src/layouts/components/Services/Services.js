import classNames from 'classnames/bind';
import styles from './Services.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

import { SERVICES } from '../../../config';

const cx = classNames.bind(styles);

function Services({ id }) {
    return (
        <section className={cx('services')} id={id}>
            <div className={cx('services-container')}>
                <h2 className={cx('services-title')}>Our Services</h2>
                <div className={cx('services-grid')}>
                    {SERVICES.map((service, index) => (
                        <div className={cx('service')} key={index}>
                            <div className={cx('service-thumb')}>
                                {service.thumb_url}
                            </div>
                            <div className={cx('service-content')}>
                                <h3 className={cx('service-content-main')}>
                                    {service.mainTitle}
                                </h3>
                                <p className={cx('service-content-sub')}>
                                    {service.subTitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

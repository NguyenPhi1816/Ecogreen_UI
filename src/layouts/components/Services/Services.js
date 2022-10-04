import classNames from 'classnames/bind';
import styles from './Services.module.scss';

import { SERVICES } from '../../../config';

const cx = classNames.bind(styles);

function Services() {
    return (
        <section className={cx('services')}>
            <div className={cx('services-container')}>
                <h2 className={cx('services-title')}>Our Services</h2>
                <div className={cx('services-grid')}>
                    {SERVICES.map((service, index) => (
                        <div className={cx('service')} key={index}>
                            <div className={cx('service-thumb')}>
                                <img src={service.thumb_url} alt="thumb" />
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

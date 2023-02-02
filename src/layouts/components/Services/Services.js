import classNames from 'classnames/bind';
import styles from './Services.module.scss';

import { SERVICES, SERVICES_VI } from '../../../config';
import { useContext } from 'react';
import { Context } from '../../../App';

const cx = classNames.bind(styles);

function Services({ id }) {
    const { language } = useContext(Context);

    return (
        <section className={cx('services')} id={id}>
            <div className={cx('services-container')}>
                <h2 className={cx('services-title')}>
                    {language === 'en'
                        ? 'Our Services'
                        : 'Dịch vụ của chúng tôi'}
                </h2>
                <div className={cx('services-grid')}>
                    {(language === 'en' ? SERVICES : SERVICES_VI).map(
                        (service, index) => (
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
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;

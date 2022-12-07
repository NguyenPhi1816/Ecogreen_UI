import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import horizontalStyles from './horizontalForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

function Form({ type, className }) {
    const { language } = useContext(LanguageContext);
    const productId = useParams().id;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            message: productId && `I am interested in ${productId}, ....`,
        },
    });
    const [showSpinner, setShowSpinner] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const cx =
        type === 'vertical'
            ? classNames.bind(styles)
            : classNames.bind(horizontalStyles);

    const onSubmit = async (data, e) => {
        data.phone = `'${data.phone}`;
        setShowSpinner(true);
        await axios.post(
            'https://api.sheetmonkey.io/form/vWyQbvDfWP6WbDYv4BtobT',
            data,
        );
        setShowSpinner(false);
        setShowSuccessMessage(true);
        e.target.reset();
    };

    useEffect(() => {
        let timerId;
        if (showSuccessMessage) {
            timerId = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
        }
        return () => clearTimeout(timerId);
    }, [showSuccessMessage]);

    return (
        <form
            className={cx('form', className)}
            onSubmit={handleSubmit((data, e) => onSubmit(data, e))}
        >
            <label className={cx('name')}>
                {type === 'horizontal' && (
                    <span>{language === 'en' ? 'Name' : 'Họ và tên'}</span>
                )}
                <input
                    type="text"
                    placeholder={language === 'en' ? 'Name' : 'Họ và tên'}
                    {...register('name', {
                        required: true,
                    })}
                />
                {errors.name && (
                    <p className={cx('invalid-message')}>
                        {language === 'en'
                            ? 'This field is required'
                            : 'Thông tin này là bắt buộc'}
                    </p>
                )}
            </label>
            <label className={cx('phone')}>
                {type === 'horizontal' && (
                    <span>{language === 'en' ? 'Phone' : 'Số điện thoại'}</span>
                )}
                <input
                    type="text"
                    placeholder={language === 'en' ? 'Phone' : 'Số điện thoại'}
                    {...register('phone', {
                        required: true,
                    })}
                />
                {errors.phone && (
                    <p className={cx('invalid-message')}>
                        {language === 'en'
                            ? 'This field is required'
                            : 'Thông tin này là bắt buộc'}
                    </p>
                )}
            </label>
            <label className={cx('email')}>
                {type === 'horizontal' && <span>Email</span>}
                <input
                    type="text"
                    placeholder="Email"
                    {...register('email', {
                        pattern:
                            // eslint-disable-next-line no-useless-escape
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        required: true,
                    })}
                />
                {errors.email && (
                    <p className={cx('invalid-message')}>
                        {language === 'en'
                            ? 'Invalid email address'
                            : 'Email không hợp lệ'}
                    </p>
                )}
            </label>
            <label className={cx('message')}>
                {type === 'horizontal' && (
                    <span>
                        {language === 'en' ? 'Message' : 'Để lại lời nhắn'}
                    </span>
                )}
                <textarea
                    type="text"
                    placeholder={
                        language === 'en' ? 'Message' : 'Để lại lời nhắn'
                    }
                    className={cx('message-area')}
                    cols="40"
                    rows="4"
                    {...register('message')}
                />
            </label>
            <label className={cx('select')}>
                {type === 'horizontal' && (
                    <span>{language === 'en' ? 'I want to' : 'Tôi muốn'}</span>
                )}
                <select defaultValue={'DEFAULT'} {...register('type')}>
                    <option value="DEFAULT" disabled hidden>
                        Select
                    </option>
                    <option value="buy">
                        {language === 'en' ? 'I want to buy' : 'Tôi muốn mua'}
                    </option>
                    <option value="rent">
                        {language === 'en' ? 'I want to rent' : 'Tôi muốn thuê'}
                    </option>
                </select>
            </label>
            <label className={cx('terms-of-use')}>
                <div>
                    <input
                        type="checkbox"
                        {...register('acceptTermsOfUse', {
                            required: true,
                        })}
                    />
                    <span>
                        {language === 'en'
                            ? 'By submitting this form I agree to receive email and call'
                            : 'Tôi muốn nhận thông tin về căn hộ qua email và cuộc gọi'}
                    </span>
                </div>
                {errors.acceptTermsOfUse && (
                    <p className={cx('invalid-message')}>
                        {language === 'en'
                            ? 'Please accept our Terms of Use'
                            : 'Vui lòng chấp nhận điều khoản sử dụng'}
                    </p>
                )}
            </label>
            <button className={cx('submit-btn')} type="submit">
                {showSpinner && (
                    <FontAwesomeIcon
                        icon={faCircleNotch}
                        className={cx('spinner')}
                    />
                )}
                <p>Send Message</p>
            </button>
            {showSuccessMessage && (
                <p className={cx('success-message')}>
                    Your information was sent successfully!
                </p>
            )}
        </form>
    );
}

export default Form;

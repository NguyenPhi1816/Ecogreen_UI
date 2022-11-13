import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import horizontalStyles from './horizontalForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Form({ type, className }) {
    const [showSpinner, setShowSpinner] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const cx =
        type === 'vertical'
            ? classNames.bind(styles)
            : classNames.bind(horizontalStyles);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
                {type === 'horizontal' && <span>Name</span>}
                <input
                    type="text"
                    placeholder="Name"
                    {...register('name', {
                        required: true,
                    })}
                />
                {errors.name && (
                    <p className={cx('invalid-message')}>
                        This field is required
                    </p>
                )}
            </label>
            <label className={cx('phone')}>
                {type === 'horizontal' && <span>Phone</span>}
                <input
                    type="text"
                    placeholder="Phone"
                    {...register('phone', {
                        required: true,
                    })}
                />
                {errors.phone && (
                    <p className={cx('invalid-message')}>
                        This field is required
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
                        Invalid email address
                    </p>
                )}
            </label>
            <label className={cx('message')}>
                {type === 'horizontal' && <span>Message</span>}
                <textarea
                    type="text"
                    placeholder="Message"
                    className={cx('message-area')}
                    cols="40"
                    rows="4"
                    {...register('message')}
                />
            </label>
            <label className={cx('select')}>
                {type === 'horizontal' && <span>I'm a</span>}
                <select defaultValue={'DEFAULT'} {...register('type')}>
                    <option value="DEFAULT" disabled hidden>
                        Select
                    </option>
                    <option value="buyer">I'm a buyer</option>
                    <option value="tennant">I'm a tennant</option>
                    <option value="agent">I'm a agent</option>
                    <option value="other">Other</option>
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
                    <span>By submitting this form I agree to Terms of Use</span>
                </div>
                {errors.acceptTermsOfUse && (
                    <p className={cx('invalid-message')}>
                        Please accept our Terms of Use
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

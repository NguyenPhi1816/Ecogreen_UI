import axios from 'axios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import horizontalStyles from './horizontalForm.module.scss';

function Form({ type, className }) {
    const cx =
        type === 'vertical'
            ? classNames.bind(styles)
            : classNames.bind(horizontalStyles);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.phone = `'${data.phone}`;
        axios.post(
            'https://sheet.best/api/sheets/4a162f0b-2e74-44c7-8d17-d5d081ca9b56',
            data,
        );
    };

    return (
        <form
            className={cx('form', className)}
            onSubmit={handleSubmit(onSubmit)}
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
            <input
                type="submit"
                className={cx('submit-btn')}
                value="Send message"
            />
        </form>
    );
}

export default Form;

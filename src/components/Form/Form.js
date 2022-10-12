import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import horizontalStyles from './horizontalForm.module.scss';

function Form({ type, className }) {
    const cx =
        type === 'vertical'
            ? classNames.bind(styles)
            : classNames.bind(horizontalStyles);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(
        'Hello, I am interested in [Modern apartment on the bay]',
    );
    const [customerType, setCustomerType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, phone, email, message, customerType);
    };

    return (
        <form className={cx('form', className)}>
            <label className={cx('name')}>
                {type === 'horizontal' && <span>Name</span>}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label className={cx('phone')}>
                {type === 'horizontal' && <span>Phone</span>}
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <label className={cx('email')}>
                {type === 'horizontal' && <span>Email</span>}
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className={cx('message')}>
                {type === 'horizontal' && <span>Message</span>}
                <textarea
                    type="text"
                    placeholder="Message"
                    className={cx('message-area')}
                    cols="40"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <label className={cx('select')}>
                {type === 'horizontal' && <span>I'm a</span>}
                <select
                    defaultValue={'DEFAULT'}
                    onChange={(e) => setCustomerType(e.target.value)}
                >
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
                <input type="checkbox" />
                <span>By submitting this form I agree to Terms of Use</span>
            </label>
            <button
                className={cx('submit-btn')}
                onClick={(e) => handleSubmit(e)}
            >
                Send Message
            </button>
        </form>
    );
}

export default Form;

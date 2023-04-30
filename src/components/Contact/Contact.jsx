import React, { useState } from 'react'

import css from './Contact.module.css'
import contactJpg from '../../images/contact/contact.jpg'
import contactJpg2x from '../../images/contact/contact@2x.jpg'
import contactWebp from '../../images/contact/contact.webp'
import contactWebp2x from '../../images/contact/contact@2x.webp'

import worning from '../../images/contact/worning.svg'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onSubmitForm = e => {
        e.preventDefault();

        if (name.length && email.length) {
            alert(`Thank you, ${name}! Your form submition has been received.`);
        }

        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
    };

    const onChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            default:
                return;
        }
    };

    return (
        <div id="Contact" className={css.wrapper}>
            <picture>
                <source
                    srcSet={`${contactWebp} 1x, ${contactWebp2x} 2x`}
                    type="image/webp"
                />
                <source
                    srcSet={`${contactJpg} 1x, ${contactJpg2x} 2x`}
                    type="image/jpeg" />
                <img src={contactJpg} className={css.img} alt="contact" />
            </picture>
            <div className={css.formWrapper}>
                <form className={css.form} onSubmit={onSubmitForm}>
                    <h2 className={css.title}>Request Callback</h2>
                    <input
                        className={css.inputPaper}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces"
                        onChange={onChange}
                        value={name}
                        placeholder='Enter your name'
                        required
                    />
                    <input
                        className={css.inputPaper}
                        type="text"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        onChange={onChange}
                        value={email}
                        placeholder='Enter email*'
                        required={`${worning} This is a required field!`}
                    />
                    <div className={css.worningWrapper}>
                        <img className={css.worningIcon} src={worning} alt="worning icon" />
                        <p className={css.worningText}>This is a required field</p>
                    </div>
                    <button className={css.button} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
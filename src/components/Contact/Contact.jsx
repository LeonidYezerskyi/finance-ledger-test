import React from 'react'
import { useMedia } from 'react-use';

import css from './Contact.module.css'
import contact from '../../images/contact/contact.jpg'
import contactTab from '../../images/contact/contactTab.jpg'
import contactDesk from '../../images/contact/contactDesk.jpg'


const Contact = () => {
    const isWide = useMedia('(max-width: 767.9px)');
    const isWide2 = useMedia('(min-width: 1360px)');

    return (
        <div className={css.wrapper}>
            {isWide ? (<img className={css.img} src={contact} alt="contact" />) :
                (<img className={css.img} src={isWide2 ? (contactDesk) : (contactTab)} alt="blog" />)}
            {/* <form className={css.form} onSubmit={onSubmitForm}> */}
            <form className={css.form}>
                <h2 className={css.title}>Request Callback</h2>
                <input
                    className={css.inputPaper}
                    type="text"
                    name="contactName"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    // onChange={onChange}
                    // value={formData.contactName}
                    placeholder='Enter your name'
                    required
                />
                <input
                    className={css.inputPaper}
                    type="text"
                    name="contactEmail"
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    // onChange={onChange}
                    // value={formData.contactNumber}
                    placeholder='Enter email*'
                    required
                />
                <button className={css.button} type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact
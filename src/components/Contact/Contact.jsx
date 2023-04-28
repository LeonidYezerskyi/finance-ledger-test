import React from 'react'
import css from './Contact.module.css'
import contact from '../../images/contact/contact.jpg'

const Contact = () => {
    return (
        <div>
            <img src={contact} alt="contact" />
            <div className={css.formWrapper}>
                {/* <form className={css.form} onSubmit={onSubmitForm}> */}
                <form className={css.form}>
                    <h2 className={css.title}>Request Callback</h2>
                    <label>
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
                    </label>
                    <label>
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
                    </label>

                    <button className={css.button} type="submit">Send</button>
                </form>
                <form action=""></form>
            </div>
        </div>
    )
}

export default Contact
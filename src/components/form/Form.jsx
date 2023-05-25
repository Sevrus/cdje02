import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'uNJ6omJwqTvh-UN0K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <div className="form__lastname">
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastname" maxLength={20} pattern='/^[A-Za-z]+$/i'/>
            </div>
            <div className="form__firstname">
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name='firstname' maxLength={20} pattern='/^[A-Za-z]+$/i'/>
            </div>
            <div className="form__email">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' maxLength={40} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'/>
            </div>
            <div className="form__message">
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="10" name='message' maxLength={200} />
            </div>
            <div className="form__btn">
                <button>Envoyer</button>
            </div>
        </form>
    )
}

export default Form;
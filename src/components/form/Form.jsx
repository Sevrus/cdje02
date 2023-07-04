import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ImageRight from '../../assets/images/image-title-right.png';

const Form = () => {

    const [message, setMessage] = useState("");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'LoB492yO3zEvCzY_C')
            .then(
                (resp) => {
                    setMessage(`L'email a bien été envoyé`)
                },
                (error) => {
                    console.error(error)
                    setMessage(`L'email n'a pas été envoyé. Veuillez réessayer.`)
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <img className='form__imageLeft' src={ImageRight} alt="Image decoration gauche" />
            <img className='form__imageRight' src={ImageRight} alt="Image decoration droite" />
            <div className="form__lastname">
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastname" maxLength={20} required={true} />
            </div>
            <div className="form__firstname">
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name='firstname' maxLength={20} required={true} />
            </div>
            <div className="form__email">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' maxLength={40} required={true} />
            </div>
            <div className="form__message">
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="10" name='message' maxLength={200} required={true} />
            </div>
         
            <p className='form__validate'>{message}</p>

            <div className="form__btn">
                <button>Envoyer</button>
            </div>
        </form>
    )
}

export default Form;
import emailjs from "@emailjs/browser";
import { useState } from "react";


const RequestResetPassword = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById("email").value;

        if (email === "") {
            setMessage("Veuillez entrer votre adresse mail");

            // } else if (email !== b) {
            //     setMessage("Cette adresse mail n'est pas valide");

        } else {
            setMessage("");

            emailjs.sendForm('password_service', 'reset_password', form.current, 'LoB492yO3zEvCzY_C')
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            return <p>Message envoyé</p>;
        };
    };


    return (
        <form className="requestResetPassword" onSubmit={handleSubmit}>

            <div className="requestResetPassword__email">
                <label className="requestResetPassword__email__label" htmlFor="email" >
                    Un email vous sera envoyé pour changer votre mot de passe
                </label>
                <input className="requestResetPassword__email__input" type="email" name="email" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="adresse mail"/>
            </div>

            <p className="requestResetPassword__message">{message}</p>

            <div className="requestResetPassword__btn">
                <button>Envoyez</button>
            </div>
        </form>

    )
}

export default RequestResetPassword;
import { useState } from "react";

const RequestResetPassword = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            setMessage("Veuillez entrer votre adresse mail");

        } else {
            // Envoyer la demande de réinitialisation du mot de passe au backend
            fetch("http://localhost:3000/api/forgot", {
                method: 'POST',
                body: JSON.stringify({
                    email: email
                }),
                headers: {
                    "Content-type": "application/json"
                  },
            })
                .then(resp => {
                    console.log(resp);
                    if (resp.ok) {
                        setMessage('Un e-mail de réinitialisation du mot de passe a été envoyé')
                    } else {
                        setMessage("Veuillez entrer une adresse mail valide");
                    }
                })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="requestResetPassword">

            <div className="requestResetPassword__email">
                <label className="requestResetPassword__email__label" htmlFor="email" >
                    Un email vous sera envoyé pour changer votre mot de passe
                </label>
                <input className="requestResetPassword__email__input" type="email" name="email" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse email" />
            </div>

            <p className="requestResetPassword__message">{message}</p>

            <div className="requestResetPassword__btn">
                <button type="submit">Envoyez</button>
            </div>
        </form>

    )
}

export default RequestResetPassword;
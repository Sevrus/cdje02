import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import fetch from "../../utilities/fetchForAll"

const RequestResetPassword = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/users")
    }, [])

    console.log(datas.data);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            setMessage("Veuillez entrer votre adresse mail");

        } if (email === datas.data) {
            emailjs.sendForm('contact_service', 'reset_password', form.current, 'LoB492yO3zEvCzY_C')
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
        // } else {
        //     setMessage("Veuillez entrer une adresse mail valide")
        // }
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className="requestResetPassword">

            <div className="requestResetPassword__email">
                <label className="requestResetPassword__email__label" htmlFor="email" >
                    Un email vous sera envoyé pour changer votre mot de passe
                </label>
                <input className="requestResetPassword__email__input" type="email" name="email" id="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="adresse mail" />
            </div>

            <p className="requestResetPassword__message">{message}</p>

            <div className="requestResetPassword__btn">
                <button>Envoyez</button>
            </div>
        </form>

    )
}

export default RequestResetPassword;
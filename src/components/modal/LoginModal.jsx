import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {clearErrorAfterDelay} from "../../utilities/clearErrorAfterDelay.js";

const LoginModal = ({ closeModal }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Make a POST request to authenticate user
        fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if (data.token) {
                    // Save the token to localStorage for authentication
                    localStorage.setItem("token", data.token);
                    navigate("/admin");
                } else {
                    setError('Mot de passe incorrect.');
                    clearErrorAfterDelay(setError, 3000);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setError("Échec de la connexion. Veuillez réessayer plus tard.");
                clearErrorAfterDelay(setError, 3000);
            });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('password_service', 'reset_password', form.current, 'LoB492yO3zEvCzY_C')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <div className="modal" onClick={closeModal}>
            </div>

            <form className="modal__content" onSubmit={handleSubmit}>
                <div className="modal__content__close" onClick={closeModal}></div>

                <div className="modal__content__email">
                    <label className="modal__content__email__label" htmlFor="email" >Email</label>
                    <input className="modal__content__email__input" type="email" name="email" id="email" 
                        minLength={8} value={email} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                         onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="modal__content__password">
                    <label className="modal__content__password__label" htmlFor="password">Mot de passe</label>
                    <input className="modal__content__password__input" type="password" name="password" id="password"
                        minLength={8} value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button
                    type="submit"
                    className="modal__content__button"
                    disabled={isLoading}
                >
                    {isLoading ? "Connexion..." : "Se connecter"}
                </button>
                {error && <div className="modal__content__error">{error}</div>}
                <div className="modal__content__lost-password" onClick={sendEmail}>Mot de passe oublié ?</div>
            </form>
        </>
    )
}

export default LoginModal;
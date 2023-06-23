import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearErrorAfterDelay } from "../../utilities/clearErrorAfterDelay.js";


const LoginModal = ({ closeModal }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;

        if (password === "" || email === "") {
            setMessage("Veuillez remplir tous les champs");

        } else if (password !== b || email !== b) {
            setMessage("Le mot de passe ou l'adresse mail n'est pas valide");

        } else {
            setMessage("");
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
                        setMessage('Mot de passe incorrect.');
                        clearErrorAfterDelay(setMessage, 3000);
                    }
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError("Échec de la connexion. Veuillez réessayer plus tard.");
                    clearErrorAfterDelay(setError, 3000);
                });
        };
    };

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div className="modal" onClick={closeModal}>
            </div>

            <form className="modal__content" onSubmit={handleSubmit}>
                <div className="modal__content__close" onClick={closeModal}></div>

                <div className="modal__content__email">
                    <label className="modal__content__email__label" htmlFor="email" >Email</label>
                    <input className="modal__content__email__input" type="email" name="email" id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="modal__content__password">
                    <label className="modal__content__password__label" htmlFor="password">Mot de passe</label>
                    <input className="modal__content__password__input" name="password" id="password"
                        type={showPassword ? "text" : "password"}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="modal__content__password__icon"
                        onClick={toggleShowPassword} />
                </div>

                <p className="modal__content__message">{message}</p>

                <button
                    type="submit"
                    className="modal__content__button"
                    disabled={isLoading}
                >
                    {isLoading ? "Connexion..." : "Se connecter"}
                </button>
                
                {error && <p className="modal__content__error">{error}</p>}

                <Link to={"/request-reset-password"} onClick={closeModal} className="modal__content__lost-password">Mot de passe oublié ?</Link>
            </form>
        </>
    )
}

export default LoginModal;
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utilities/AuthContext.jsx";
import { clearErrorAfterDelay } from "../../utilities/clearErrorAfterDelay.js";

const modalVariants = {
    initial: {
        opacity: 0,
        scale: 0.7,
        x: "-50%"
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: "-50%",
        transition: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
            }
        },
        exit: {
            opacity: 0,
            scale: 0.7,
            x: "100%",
            transition: {
                duration: 0.5
            }
        }
    }
}

const LoginModal = ({ closeModal }) => {
    const { login } = useContext(AuthContext);
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
                        login();
                        navigate("/admin");
                    } else {
                        setError('Mot de passe incorrect');
                        clearErrorAfterDelay(setError, 3000);
                    }
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError("Échec de la connexion. Veuillez réessayer plus tard.");
                    clearErrorAfterDelay(setError, 3000);
                });
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>

            <div className="modal" onClick={closeModal}>

                <AnimatePresence mode="wait" onExitComplete={() => null}>
                    <motion.div className="modal__content"
                        variants={modalVariants} initial="initial" animate="animate" exit="exit">

                        <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                            <div className="modal__content__close" onClick={closeModal}></div>

                            <div className="modal__content__email">
                                <label className="modal__content__email__label" htmlFor="email" >Email</label>
                                <input className="modal__content__email__input" type="email" name="email" id="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="modal__content__password">
                                <label className="modal__content__password__label" htmlFor="password">Mot de passe</label>
                                <div>
                                    <input className="modal__content__password__input" name="password" id="password"
                                        type={showPassword ? "text" : "password"}
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="modal__content__password__icon"
                                        onClick={toggleShowPassword} />
                                </div>
                            </div>

                            <p className="modal__content__message">{message}</p>
                            {error &&
                                <p className="modal__content__message">{error}</p>
                            }

                            <button
                                type="submit"
                                className="modal__content__button"
                                disabled={isLoading}
                            >
                                {isLoading ? "Connexion..." : "Se connecter"}
                            </button>

                            <Link to={"/request-reset-password"} onClick={closeModal} className="modal__content__lost-password">Mot de passe oublié ?</Link>
                        </form>

                    </motion.div>
                </AnimatePresence >

            </div>
        </>
    )
}

export default LoginModal;
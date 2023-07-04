import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form, useParams, useNavigate } from "react-router-dom";
import { clearErrorAfterDelay } from "../../utilities/clearErrorAfterDelay";

const ResetPassword = () => {

    const {resetIdentifier} = useParams();
    const navigate = useNavigate();

    const [passwords, setPasswords] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (passwords === "" || confirmPassword === "") {
            setMessage("Veuillez remplir tous les champs");
            clearErrorAfterDelay(setMessage, 3000);

        } else if (!pattern.test(passwords) || !pattern.test(confirmPassword)) {
            setMessage("Votre mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial");

        } else if (passwords === confirmPassword) {
            fetch("http://localhost:3000/api/reset-password/:resetIdentifier", {
                method: 'POST',
                body: JSON.stringify({
                    resetIdentifier: resetIdentifier, 
                    password: passwords
                }),
                headers: {
                    "Content-type": "application/json"
                  },
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data) {
                    setMessage('Le mot de passe a bien été réinitialiser')
                    navigate('/')
                } else {
                    setMessage('Echec de réinitialisation de mot de passe. Veuillez réessayer dans quelques instants.')
                }
            })
            .catch(() => {
                setMessage('Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer')
            })

        } else {
            setMessage("Les mots de passe ne correspondent pas");
            clearErrorAfterDelay(setMessage, 3000);
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="resetPassword">

            <div className="resetPassword__password">
                <label htmlFor="password">Nouveau mot de passe</label>
                <div>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" value={passwords}
                        onChange={(e) => setPasswords(e.target.value)} placeholder="********" />
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="resetPassword__password__icon"
                        onClick={toggleShowPassword} />
                </div>
            </div>

            <div className="resetPassword__confirmPassword">
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                <div>
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} placeholder="********" />
                    <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} className="resetPassword__confirmPassword__icon"
                        onClick={toggleShowConfirmPassword} />
                </div>
            </div>
            <p className="resetPassword__message">{message}</p>

            <div className="resetPassword__btn">
                <button>Confirmer</button>
            </div>
        </Form>
    )
}

export default ResetPassword;
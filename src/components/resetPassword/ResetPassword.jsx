import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../utilities/clearErrorAfterDelay";

const ResetPassword = () => {

    const [password, setPassword] = useState("");
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
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password === "" || confirmPassword === "") {
            setMessage("Veuillez remplir tous les champs");
            clearErrorAfterDelay(setMessage, 3000);

        } else if (!pattern.test(password) || !pattern.test(confirmPassword)) {
            setMessage("Votre mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial");

        } else if (password === confirmPassword) {
            setMessage("");

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
                    <input type={showPassword ? "text" : "password"} name="password" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="********" />
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
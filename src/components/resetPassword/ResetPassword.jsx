import { useState } from "react";
import { Form } from "react-router-dom";

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password === "" || confirmPassword === "") {
            setMessage("Veuillez remplir tous les champs");

        } else if (!pattern.test(password) || !pattern.test(confirmPassword)) {
            setMessage("Votre mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial");

        } else if (password === confirmPassword) {
            setMessage("Les mots de passe sont corrects");
            
        } else {
            setMessage("Les mots de passe ne correspondent pas");
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="resetPassword">

            <div className="resetPassword__password">
                <label htmlFor="password">Nouveau mot de passe</label>
                <input type="password" name="password" id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="resetPassword__confirmPassword">
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <p className="resetPassword__message">{message}</p>

            <div className="resetPassword__btn">
                <button>Confirmer</button>
            </div>
        </Form>
    )
}

export default ResetPassword;
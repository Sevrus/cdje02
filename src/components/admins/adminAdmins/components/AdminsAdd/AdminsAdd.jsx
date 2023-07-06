import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay.js";

const AdminsAdd = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [message, setMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const [showVerifyPassword, setShowVerifyPassword] = useState(false);
    const toggleShowVerifyPassword = () => {
        setShowVerifyPassword(!showVerifyPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (password !== verifyPassword) {
            setMessage("Les mots de passe ne sont pas identiques");
            clearErrorAfterDelay(setMessage, 3000);
            return;

        } else if (!pattern.test(password) || !pattern.test(verifyPassword)) {
            setMessage("Ce mot de passe ne remplit pas les conditions");
            clearErrorAfterDelay(setMessage, 3000);

        } else {
            fetch("http://localhost:3000/api/users", {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-type": "application/json"
                },
            })
                .then(resp => {
                    if (resp.ok) {
                        setMessage(`L'administrateur a bien été créé.`);
                        ReloadAfterDelay(setMessage, 3000);
                    } else {
                        setMessage(`La création de l'utilisateur a échoué.`);
                        clearErrorAfterDelay(setMessage, 3000);
                        throw new Error("Erreur lors de la création de l'administrateur.");
                    }
                })
                .catch((error) => {
                    console.log('Erreur lors de la requête.', error);
                })
        }
    }

    return (
        <>
            <Form className="addAdmins" onSubmit={handleSubmit}>

                <div className="addAdmins__email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="addAdmins__password">
                    <label htmlFor="password">Mot de passe</label>
                    <div>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="********" required={true} />
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={toggleShowPassword} className="addAdmins__password__icon" />
                    </div>
                    <p>8 Caractères, 1 Majuscule, 1 Nombre et 1 Caractère Spécial(@$!%*?&)</p>
                </div>

                <div className="addAdmins__confirmPassword">
                    <label htmlFor="verifyPassword">Confirmer le mot de passe</label>
                    <div>
                        <input type={showVerifyPassword ? "text" : "password"} name="verifyPassword" id="verifyPassword" value={verifyPassword}
                            onChange={(e) => setVerifyPassword(e.target.value)} placeholder="********" required={true} />
                        <FontAwesomeIcon icon={showVerifyPassword ? faEye : faEyeSlash} onClick={toggleShowVerifyPassword} className="addAdmins__confirmPassword__icon" />
                    </div>
                </div>

                <div className="addAdmins__btn">
                    <button type="submit">Ajouter</button>
                </div>

                <p className="addAdmins__message">{message}</p>
            </Form>
        </>
    )
}

export default AdminsAdd;

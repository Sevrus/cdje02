import { useState } from "react";
import { Form } from "react-router-dom";
import {clearErrorAfterDelay} from "../../../../../utilities/clearErrorAfterDelay";

const AdminsAdd = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== verifyPassword) {
            setError("Les mots de passe ne sont pas identiques");
            clearErrorAfterDelay(setError, 3000);
            return;
        };

        fetch("http://localhost:3000/api/users", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La création de l'utilisateur est effectué`);
                } else {
                    console.log(`La création de l'utilisateur a échoué.`);
                    throw new Error("Erreur lors de la création de l'utilisateur.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }

    return (
        <>
            <Form className="addAdmins" onSubmit={handleSubmit}>
            
                <div className="addAdmins__email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" maxLength={50} required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="addAdmins__password">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" minLength={8} maxLength={50} required={true} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p>8 Caractères, 1 Majuscule, 1 Nombre et 1 Caractère Spécial(@$!%*?&)</p>
                </div>

                <div className="addAdmins__confirmPassword">
                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input type="password" name="confirmPassword" minLength={8} maxLength={50} required={true} value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
                </div>

                <div className="addAdmins__btn">
                    <button type="submit">Ajouter</button>
                </div>
                {error && <div className="addAdmins__error">{error}</div>}
            </Form>
        </>
    )
}

export default AdminsAdd;

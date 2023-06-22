import { useState } from "react";
import { Form } from "react-router-dom";

const ModalAdmins = ({ closeModal, adminData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [email, setEmail] = useState(adminData.email);
    const [password, setPassword] = useState(adminData.password);
    const [verifyPassword, setVerifyPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== verifyPassword) {
            setError("Le mot de passe n'est pas identiques");
            return;
        };

        setIsLoaded(true);
        const updatedData = {
            email: email,
            password: password
        };

        fetch("http://localhost:3000/api/users/" + adminData.id, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                "Content-type": "application/json"
            },
        })
            .then(resp => {
                setIsLoaded(false);
                if (resp.ok) {
                    console.log(`La mise à jour de l'utilisateur est effectué`)
                } else {
                    console.log(`La mise à jour de l'utilisateur a échoué.`);
                    throw new Error("Erreur lors de la mise à jour de l'utilisateur.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }
    return (
        <>
            <div className="modalAdmins" onClick={closeModal}>
            </div>

            <Form className="modalAdmins__content" onSubmit={handleSubmit}>
                <div className="modalAdmins__content__close" onClick={closeModal}></div>

                <div className="modalAdmins__content__email">
                    <label htmlFor="email" className="modalAdmins__content__email__label">Email</label>
                    <input type="text" name="email" id="email" className="modalAdmins__content__email__input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="modalAdmins__content__password">
                    <label htmlFor="password" className="modalAdmins__content__password__label">Mot de Passe</label>
                    <input type="password" name="password" id="password" className="modalAdmins__content__password__input" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="modalAdmins__content__verifPassword">
                    <label htmlFor="verifPassword" className="modalAdmins__content__verifPassword__label">Vérification du Mot de Passe</label>
                    <input type="password" name="verifPassword" id="verifPassword" className="modalAdmins__content__verifPassword__input" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)}/>
                </div>

                <button disabled={isLoaded} type="submit" className="modalAdmins__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>
            </Form>
        </>
    )
}

export default ModalAdmins;
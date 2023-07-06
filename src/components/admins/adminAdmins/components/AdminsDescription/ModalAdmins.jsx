import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay.js";

const ModalAdmins = ({ closeModal, adminData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [email, setEmail] = useState(adminData.email);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoaded(true);
        const updatedData = {
            email: email,
        };

        fetch("http://localhost:3000/api/users/" + adminData.id, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
            },
        })
            .then(resp => {
                setIsLoaded(false);
                if (resp.ok) {
                    setMessage(`L'administrateur a bien été modifié.`);
                    setTimeout(() => {
                        setMessage(null);
                        location.reload();
                    }, 3000);
                } else {
                    setMessage(`La modification de l'admninistrateur a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la modification de l'administrateur.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }
    return (
        <>
            <div className="modalAdmins" onClick={closeModal}></div>

            <Form className="modalAdmins__content" onSubmit={handleSubmit}>
                <div className="modalAdmins__content__close" onClick={closeModal}></div>

                <div className="modalAdmins__content__email">
                    <label htmlFor="email" className="modalAdmins__content__email__label">Email</label>
                    <input type="text" name="email" id="email" className="modalAdmins__content__email__input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <button disabled={isLoaded} type="submit" className="modalAdmins__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>
                
                <p className="modalAdmins__content__message">{message}</p>
 
            </Form>
        </>
    )
}

export default ModalAdmins;
import { useState } from "react";
import { Form } from "react-router-dom";
import {clearErrorAfterDelay} from "../../../../../utilities/clearErrorAfterDelay.js";

const ModalReferees = ({ closeModal, refereeData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [name, setName] = useState(refereeData.name);
    const [title, setTitle] = useState(refereeData.title);
    const [validity, setValidity] = useState(refereeData.validity);
    const [club, setClub] = useState(refereeData.club);

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            name: name,
            title: title,
            validity: validity,
            club: club
        };

        fetch("http://localhost:3000/api/referees/" + refereeData.id, {
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
                    setMessage(`La mise à jour de l'arbitre est effectué`)
                    clearErrorAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La mise à jour de l'arbitre a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la mise à jour de l'arbitre.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }

    return (
        <>
            <div className="modalReferees" onClick={closeModal}>
            </div>

            <Form onSubmit={handleSubmit} className="modalReferees__content">
                <div className="modalReferees__content__close" onClick={closeModal}></div>

                <div className="modalReferees__content__name">
                    <label htmlFor="name" className="modalReferees__content__name__label">Nom</label>
                    <input type="text" name="name" id="name" className="modalReferees__content__name__input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="modalReferees__content__validity">
                    <label htmlFor="validity" className="modalReferees__content__validity__label">Validité</label>
                    <input type="text" name="validity" id="validity" className="modalReferees__content__validity__input" value={validity} onChange={(e) => setValidity(e.target.value)} />
                </div>

                <div className="modalReferees__content__type">
                    <label htmlFor="type" className="modalReferees__content__type__label">Type</label>
                    <input type="text" name="type" id="type" className="modalReferees__content__type__input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="modalReferees__content__club">
                    <label htmlFor="club" className="modalReferees__content__club__label">Club</label>
                    <input type="text" name="club" id="club" className="modalReferees__content__club__input" value={club} onChange={(e) => setClub(e.target.value)}/>
                </div>

                <button disabled={isLoaded} type="submit" className="modalReferees__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

                <p className="addAdmins__validate">{message}</p>
                
            </Form>
        </>
    )
}

export default ModalReferees;
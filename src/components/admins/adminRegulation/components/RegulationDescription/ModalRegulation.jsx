import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay.js";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay.js";

const ModalRegulation = ({ closeModal, regulationData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [title, setTitle] = useState(regulationData.title);
    const [link, setLink] = useState(regulationData.link);

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            title: title,
            link: link
        };

        fetch("http://localhost:3000/api/regulations/" + regulationData.id, {
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
                    setMessage(`Le réglement a bien été modifié.`);
                    ReloadAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La modification du réglement a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la modification du réglement.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }

    return (
        <>
            <div className="modalRegulation" onClick={closeModal}>
            </div>

            <Form className="modalRegulation__content" onSubmit={handleSubmit}>
                <div className="modalRegulation__content__close" onClick={closeModal}></div>

                <div className="modalRegulation__content__title">
                    <label htmlFor="title" className="modalRegulation__content__title__label">Titre</label>
                    <input type="txt" name="title" id="title" className="modalRegulation__content__title__input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="modalRegulation__content__link">
                    <label htmlFor="link" className="modalRegulation__content__link__label">Lien</label>
                    <input type="txt" name="link" id="link" className="modalRegulation__content__link__input" value={link} onChange={(e) => setLink(e.target.value)}/>
                </div>

                <button disabled={isLoaded} type="submit" className="modalRegulation__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

                <p className="modalRegulation__content__message">{message}</p>
                
            </Form>
        </>
    )
}

export default ModalRegulation;
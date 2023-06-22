import { useState } from "react";
import { Form } from "react-router-dom";

const ModalResult = ({ closeModal, resultData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [title, setTitle] = useState(resultData.title);
    const [link, setLink] = useState(resultData.link);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            title: title,
            link: link
        };

        fetch("http://localhost:3000/api/tournaments/" + resultData.id, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                "Content-type": "application/json"
            },
        })
            .then(resp => {
                setIsLoaded(false);
                if (resp.ok) {
                    console.log(`La mise à jour du tournoi est effectué`)
                } else {
                    console.log(`La mise à jour du tournoi a échoué.`);
                    throw new Error("Erreur lors de la mise à jour du tournoi.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }
    return (
        <>
            <div className="modalResult" onClick={closeModal}>
            </div>

            <Form className="modalResult__content" onSubmit={handleSubmit}>
                <div className="modalResult__content__close" onClick={closeModal}></div>

                <div className="modalResult__content__title">
                    <label htmlFor="title" className="modalResult__content__title__label">Titre</label>
                    <input type="text" name="title" id="title" className="modalResult__content__title__input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="modalResult__content__link">
                    <label htmlFor="link" className="modalResult__content__link__label">Lien</label>
                    <input type="text" name="link" id="link" className="modalResult__content__link__input" value={link} onChange={(e) => setLink(e.target.value)} />
                </div>

                <button disabled={isLoaded} type="submit" className="modalResult__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

            </Form>
        </>
    )
}

export default ModalResult;
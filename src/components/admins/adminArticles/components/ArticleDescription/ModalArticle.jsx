import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay.js";

const ModalArticle = ({ closeModal, articleData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [title, setTitle] = useState(articleData.title);
    const [author, setAuthor] = useState(articleData.author);
    const [description, setDescription] = useState(articleData.description);
    const [image, setImage] = useState(articleData.image);
    const [created, setCreated] = useState(articleData.created);

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            title: title,
            author: author,
            description: description,
            image: image,
            created: created,
        };

        fetch("http://localhost:3000/api/news/" + articleData.id, {
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
                    setMessage(`L'article a bien été modifié.`);
                    setTimeout(() => {
                        setMessage(null);
                        location.reload();
                    }, 3000);
                } else {
                    setMessage(`La modification de l'article a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la modification de l'article.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }

    return (
        <>
            <div className="modalArticle" onClick={closeModal}>
            </div>

            <Form className="modalArticle__content" onSubmit={handleSubmit}>
                <div className="modalArticle__content__close" onClick={closeModal}></div>

                <div className="modalArticle__content__title">
                    <label htmlFor="title" className="modalArticle__content__title__label">Titre</label>
                    <input type="text" name="title" id="title" className="modalArticle__content__title__input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="modalArticle__content__author">
                    <label htmlFor="author" className="modalArticle__content__author__label">Auteur</label>
                    <input type="text" name="author" id="author" className="modalArticle__content__author__input" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <div className="modalArticle__content__description">
                    <label htmlFor="description" className="modalArticle__content__description__label">Description</label>
                    <textarea type="text" name="description" id="description" className="modalArticle__content__description__input" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="modalArticle__content__image">
                    <label htmlFor="image" className="modalArticle__content__image__label">Photo de l'auteur</label>
                    <input type="text" name="image" id="image" className="modalArticle__content__image__input" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>

                <div className="modalArticle__content__date">
                    <label htmlFor="date" className="modalArticle__content__date__label">Date</label>
                    <input type="date" name="date" id="date" className="modalArticle__content__date__input" value={created} onChange={(e) => setCreated(e.target.value)} />
                </div>

                <button disabled={isLoaded} type="submit" className="modalArticle__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

                <p className="modalArticle__content__message">{message}</p>

            </Form>
        </>
    )
}

export default ModalArticle;
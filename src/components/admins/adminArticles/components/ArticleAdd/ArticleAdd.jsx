import { Form } from "react-router-dom";
import { useState } from "react";

const ArticleAdd = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/news", {
            method: 'POST',
            body: JSON.stringify({
                title,
                author,
                description,
                image
            }),
            headers: {
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La création de l'article est effectué`);
                } else {
                    console.log(`La création de l'article a échoué.`);
                    throw new Error("Erreur lors de la création de l'article.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }

        return (

            <>
                <Form onSubmit={handleSubmit} className="addArticle">

                    <div className="addArticle__title">
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" maxLength={100} required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="addArticle__author">
                        <label htmlFor="author">Auteur</label>
                        <input type="text" name="author" maxLength={50} required={true} value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    </div>

                    <div className="addArticle__description">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" maxLength={500} required={true} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="addArticle__image">
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" maxLength={500} required={true} value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <div className="addArticle__btn">
                        <button type="submit">Ajouter</button>
                    </div>

                </Form>
            </>
        )
    }

export default ArticleAdd;
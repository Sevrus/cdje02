import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay.js";
import { Editor } from '@tinymce/tinymce-react';

const ArticleAdd = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const [message, setMessage] = useState('');

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
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`L'article a bien été créé.`);
                    ReloadAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création de l'article a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
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
                        {/*<textarea name="description" maxLength={500} required={true} value={description} onChange={(e) => setDescription(e.target.value)} />*/}
                        <Editor
                            apiKey="m0o6mg35hp34hxkeqt7pqfh09ou1meghhv1hnvzpx7dl4w1x"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount',
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help',
                            }}
                            // onChange={(e) => setDescription(e.target.value)}
                            onChange={(content) => setDescription(content)}
                        />
                    </div>

                    <div className="addArticle__image">
                        <label htmlFor="image">Photo de l'auteur</label>
                        <input type="text" name="image" maxLength={500} required={true} value={image} placeholder="Lien/adresse de la photo" onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <div className="addArticle__btn">
                        <button type="submit">Ajouter</button>
                    </div>

                    <p className="addArticle__message">{message}</p>

                </Form>
            </>
        )
    }

export default ArticleAdd;
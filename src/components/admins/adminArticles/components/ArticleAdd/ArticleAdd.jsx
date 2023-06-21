import { Form } from "react-router-dom";
import { fetchForAll } from "../../../../../utilities/functionFetch.js"
import { useEffect, useState } from "react";

const ArticleAdd = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/news/", {
            method: 'POST', body: JSON.stringify(datas)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La création de l'article est effectué`)
                    setDatas(resp);
                } else {
                    console.log(`La création de l'article a échoué.`);
                    throw new Error("Erreur lors de la création de l'article.");
                }
            })
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/news")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <Form onSubmit={handleSubmit} className="addArticle">

                    <div className="addArticle__title">
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" maxLength={100} required={true} />
                    </div>

                    <div className="addArticle__author">
                        <label htmlFor="author">Auteur</label>
                        <input type="text" name="author" maxLength={50} required={true} />
                    </div>

                    <div className="addArticle__description">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" maxLength={500} required={true} />
                    </div>

                    <div className="addArticle__image">
                        <label htmlFor="image">Image</label>
                        <input name="image" maxLength={500} required={true} />
                    </div>

                    <div className="addArticle__btn">
                        <button>Ajouter</button>
                    </div>

                </Form>
            </>
        )
    }
}

export default ArticleAdd;
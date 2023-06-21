import { useEffect, useState } from "react";
import { fetchForAll } from "../../../../../utilities/functionFetch"
import { Form, useParams } from "react-router-dom";

const ModalArticle = ({ closeModal }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [initialDatas, setInitialDatas] = useState([]);
    const { id } = useParams();

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, title: value }))
    }

    const handleAuthorChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, author: value }))
    }

    const handleDescriptionChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, description: value }))
    }

    const handleImageChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, image: value }))
    }

    const handleDateChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, created: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/news/" + id, {
            method: 'PUT', body: JSON.stringify(datas)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La mise à jour de l'article est effectué`)
                    setDatas(datas);
                } else {
                    console.log(`La mise à jour de l'article a échoué.`);
                    throw new Error("Erreur lors de la mise à jour de l'article.");
                }
            })
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setInitialDatas, "api/news")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                <div className="modalArticle" onClick={closeModal}>
                </div>

                {initialDatas.data.map((item) => (
                    <Form className="modalArticle__content" key={item.id} onSubmit={handleSubmit}>
                        <div className="modalArticle__content__close" onClick={closeModal}></div>

                        <div className="modalArticle__content__title">
                            <label htmlFor="title" className="modalArticle__content__title__label">Titre</label>
                            <input type="text" name="title" id="title" className="modalArticle__content__title__input" value={datas.title || item.title} onChange={handleTitleChange} />
                        </div>

                        <div className="modalArticle__content__author">
                            <label htmlFor="author" className="modalArticle__content__author__label">Auteur</label>
                            <input type="text" name="author" id="author" className="modalArticle__content__author__input" value={datas.author || item.author} onChange={handleAuthorChange} />
                        </div>

                        <div className="modalArticle__content__description">
                            <label htmlFor="description" className="modalArticle__content__description__label">Description</label>
                            <textarea type="text" name="description" id="description" className="modalArticle__content__description__input" value={datas.description || item.description} onChange={handleDescriptionChange} />
                        </div>

                        <div className="modalArticle__content__image">
                            <label htmlFor="image" className="modalArticle__content__image__label">Image</label>
                            <input type="text" name="image" id="image" className="modalArticle__content__image__input" value={datas.image || item.image} onChange={handleImageChange} />
                        </div>

                        <div className="modalArticle__content__date">
                            <label htmlFor="date" className="modalArticle__content__date__label">Date</label>
                            <input type="date" name="date" id="date" className="modalArticle__content__date__input" value={datas.created || item.created} onChange={handleDateChange} />
                        </div>

                        <button className="modalArticle__content__button">Confirmer</button>

                    </Form>

                ))}
            </>
        )
    }
}

export default ModalArticle;
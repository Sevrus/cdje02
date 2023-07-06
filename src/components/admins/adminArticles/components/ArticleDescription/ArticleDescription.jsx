import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll"
import ModalArticle from "./ModalArticle.jsx"

const ArticleDescription = () => {
    const [openModal, setOpenModal] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/news/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`L'article a bien été supprimé.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    setDatas(datas => {
                        const datasFilter = datas.data.filter(item => item.id !== id);
                        return {...datas, data: datasFilter}
                    })
                    return resp.json();
                } else {
                    setMessage(`La suppression de l'article a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression de l'article.");
                }
            })
            .then(datas => {
                console.log(`La suppression de l'article a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })         
    }

    const handleOpenModal = (article) => {
        setOpenModal(article)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/news")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminArticle__list">

                    {datas.data.map((item) => (

                        <li className="articleArticle" key={item.id}>

                            <div className="articleArticle__text">
                                <p>{item.title}</p>
                                <p>{item.author}</p>
                            </div>


                            <div className="articleArticle__icon">
                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleArticle__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal === item && createPortal(
                                    <ModalArticle articleData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <span onClick={() => handleDelete(item.id)}>
                                    <FontAwesomeIcon className="articleArticle__icon__trash" icon={faTrash} />
                                </span>
                            </div>

                        </li>


                    ))}
                </ul>

                <p className="articleArticle__message">{message}</p>
            </>
        )
    }
}

export default ArticleDescription;
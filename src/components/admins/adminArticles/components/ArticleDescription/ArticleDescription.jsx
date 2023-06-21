import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import ModalArticle from "./ModalArticle.jsx"
import { fetchForAll } from "../../../../../utilities/functionFetch.js"

const ArticleDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/news/" + id, {
            method: 'DELETE'
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La suppression de l'article ${id} a réussi.`);
                    return resp.json();
                } else {
                    console.log(`La suppression de l'article a échoué.`);
                    throw new Error("Erreur lors de la suppression de l'article.");
                }
            })
            .then(datas => {
                console.log(`La suppression de l'article ${id} a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
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

                {datas.data.map((item) => (

                    <section className="articleArticle" key={item.id}>

                        <div className="articleArticle__text">
                            <p>{item.title}</p>
                            <p>{item.author}</p>
                        </div>


                        <div className="articleArticle__icon">
                            <a onClick={() => setOpenModal(true)}>
                                <FontAwesomeIcon className="articleArticle__icon__pencil" icon={faPencil} />
                            </a>
                            {openModal && createPortal(
                                <ModalArticle closeModal={() => setOpenModal(false)} />, document.body
                            )}

                            <span onClick={() => { handleDelete(item.id) }}>
                                <FontAwesomeIcon className="articleArticle__icon__trash" icon={faTrash} />
                            </span>
                        </div>

                    </section>

                ))}

            </>
        )
    }
}

export default ArticleDescription;
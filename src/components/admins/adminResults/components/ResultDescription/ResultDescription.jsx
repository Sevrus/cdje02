import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalResult from "./ModalResult.jsx"


const ResultDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/tournaments/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le tournoi a bien été supprimé.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    return resp.json();
                } else {
                    setMessage(`La suppression du tournoi a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression du tournoi.");
                }
            })
            .then(datas => {
                console.log(`La suppression du tournoi a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (result) => {
        setOpenModal(result)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/tournaments")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminResult__list">

                    {datas.data.map((item) => (

                        <li className="articleResult" key={item.id}>

                            <div className="articleResult__text">
                                <p>{item.title}</p>
                            </div>


                            <div className="articleResult__icon">
                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleResult__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal == item && createPortal(
                                    <ModalResult resultData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <span onClick={() => { handleDelete(item.id) }}>
                                    <FontAwesomeIcon className="articleResult__icon__trash" icon={faTrash} />
                                </span>
                            </div>

                        </li>

                    ))}
                </ul>

                <p className="articleResult__message">{message}</p>
            </>

        )
    }
}

export default ResultDescription;
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalRegulation from "./ModalRegulation.jsx"
import { dataFilter } from '../../../../../utilities/dataFilter'

const RegulationDescription = () => {

    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/regulations/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le réglement a bien été supprimé.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    dataFilter(setDatas, datas, id);
                    return resp.json();
                } else {
                    setMessage(`La suppression du réglement a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression du réglement.");
                }
            })
            .then(datas => {
                console.log(`La suppression du réglement a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (regulation) => {
        setOpenModal(regulation)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/regulations")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                <ul className="adminRegulation__list">
                    
                    {datas.data.map((item) => (

                        <li className="articleRegulation" key={item.id}>

                            <div className="articleRegulation__text">
                                <p>{item.title}</p>
                            </div>

                            <div className="articleRegulation__icon">
                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleRegulation__icon__pencil" icon={faPencil} />
                                </a>

                                {openModal === item && createPortal(
                                    <ModalRegulation regulationData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <span onClick={() => { handleDelete(item.id) }}>
                                    <FontAwesomeIcon className="articleRegulation__icon__trash" icon={faTrash} />
                                </span>
                            </div>

                        </li>
                    ))}
                </ul>

                <p className="articleRegulation__message">{message}</p>
            </>
        )
    }
}

export default RegulationDescription;
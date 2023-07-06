import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalReferees from './ModalReferees.jsx'
import { dataFilter } from '../../../../../utilities/dataFilter'

const RefereesDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/referees/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`L'arbitre a bien été supprimé.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    dataFilter(setDatas, datas, id);
                    return resp.json();
                } else {
                    setMessage(`La suppression de l'arbitre a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression de l'arbitre.");
                }
            })
            .then(datas => {
                console.log(`La suppression de l'arbitre a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (referee) => {
        setOpenModal(referee)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/referees")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminReferee__list">
                    
                    {datas.data.map((item) => (

                        <li className="articleReferee" key={item.id}>

                            <div className="articleReferee__text">
                                <p>{item.name}</p>
                                <p>{item.club}</p>
                            </div>

                            <div className="articleReferee__icon">

                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleReferee__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal === item && createPortal(
                                    <ModalReferees refereeData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <span onClick={() => { handleDelete(item.id) }}>
                                    <FontAwesomeIcon className="articleReferee__icon__trash" icon={faTrash} />
                                </span>
                            </div>

                        </li>

                    ))}
                </ul>

                <p className="articleReferee__message">{message}</p>
            </>

        )
    }
}

export default RefereesDescription;
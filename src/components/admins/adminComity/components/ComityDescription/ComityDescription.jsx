import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalComity from "./ModalComity.jsx"
import { dataFilter } from '../../../../../utilities/dataFilter'

const ComityDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/comities/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le membre a bien été supprimé.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    dataFilter(setDatas, datas, id);
                    return resp.json();
                } else {
                    setMessage(`La suppression du membre a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression du membre.");
                }
            })
            .then(datas => {
                console.log(`La suppression du membre a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (member) => {
        setOpenModal(member)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/comities")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminComity__list">

                    {datas.data.map((item) => (

                        <li className="articleComity" key={item.id}>

                            <div className="articleComity__text">
                                <p>{item.title}</p>
                                <p>{item.firstName} {item.lastName}</p>
                            </div>


                            <div className="articleComity__icon">
                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleComity__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal === item && createPortal(
                                    <ModalComity comityData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <span onClick={() => { handleDelete(item.id) }}>
                                    <FontAwesomeIcon className="articleComity__icon__trash" icon={faTrash} />
                                </span>

                            </div>

                        </li>

                    ))}
                </ul>

                <p className='articleComity__message'>{message}</p>
            </>

        )
    }
}

export default ComityDescription;
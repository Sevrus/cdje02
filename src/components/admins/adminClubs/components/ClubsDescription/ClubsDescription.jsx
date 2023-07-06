import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalClub from "./ModalClubs.jsx"
import { dataFilter } from '../../../../../utilities/dataFilter'

const ClubsDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/clubs/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le club a bien été supprimé.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    dataFilter(setDatas, datas, id);
                    return resp.json();
                } else {
                    setMessage(`La suppression du club a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression du club.");
                }
            })
            .then(datas => {
                console.log(`La suppression du club a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (club) => {
        setOpenModal(club)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/clubs")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminClubs__list">

                    {datas.data.map((item) => (

                        <li className="articleClub" key={item.id}>

                            <div className="articleClub__text">
                                <p>{item.name}</p>
                                <p>{item.city}</p>
                            </div>


                            <div className="articleClub__icon">
                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleClub__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal === item && createPortal(
                                    <ModalClub clubData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <span onClick={() => { handleDelete(item.id) }}>
                                    <FontAwesomeIcon className="articleClub__icon__trash" icon={faTrash} />
                                </span>

                            </div>

                        </li>

                    ))}
                </ul>

                <p className="articleClub__message">{message}</p>
            </>

        )
    }
}

export default ClubsDescription;
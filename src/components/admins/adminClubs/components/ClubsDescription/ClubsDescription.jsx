import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalClub from "./ModalClubs.jsx"
import ModalChampionDelete from './ModalClubDelete.jsx'

const ClubsDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (club) => {
        setOpenModal(club)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    const handleOpenModalDelete = (item) => {
        setOpenModalDelete(item);
    }

    const handleCloseModalDelete = () => {
        setOpenModalDelete(null);
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

                                <a onClick={() => handleOpenModalDelete(item)}>
                                    <FontAwesomeIcon className="articleClub__icon__trash" icon={faTrash} />
                                </a>
                                {openModalDelete === item && createPortal(
                                    <ModalChampionDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}

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
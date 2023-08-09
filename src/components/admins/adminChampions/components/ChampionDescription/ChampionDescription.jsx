import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalChampion from "./ModalChampion.jsx"
import { dataFilter } from '../../../../../utilities/dataFilter'
import ModalChampionDelete from './ModalChampionDelete'

const ChampionDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (champion) => {
        setOpenModal(champion)
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
        customFetch(setIsLoaded, setError, setDatas, "api/aisnechampions")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminChampion__list">

                    {datas.data.map((item) => (

                        <li className="articleChampion" key={item.id}>

                            <div className="articleChampion__text">
                                <p>{item.name}</p>
                                <p>{item.years}</p>
                            </div>


                            <div className="articleChampion__icon">

                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleChampion__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal === item && createPortal(
                                    <ModalChampion championData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <a onClick={() => { handleOpenModalDelete(item) }}>
                                    <FontAwesomeIcon className="articleChampion__icon__trash" icon={faTrash} />
                                </a>
                                {openModalDelete === item && createPortal(
                                    <ModalChampionDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}
                            </div>

                        </li>

                    ))}
                </ul>

                <p className="articleChampion__message">{message}</p>
            </>

        )
    }
}

export default ChampionDescription;
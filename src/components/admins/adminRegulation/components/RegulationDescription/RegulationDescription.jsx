import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalRegulation from "./ModalRegulation.jsx"
import ModalRegulationDelete from './ModalRegulationDelete'

const RegulationDescription = () => {

    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (regulation) => {
        setOpenModal(regulation)
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

                                <a onClick={() => handleOpenModalDelete(item)}>
                                    <FontAwesomeIcon className="articleRegulation__icon__trash" icon={faTrash} />
                                </a>
                                {openModalDelete === item && createPortal(
                                    <ModalRegulationDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}
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
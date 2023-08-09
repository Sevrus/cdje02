import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalResult from "./ModalResult.jsx"
import ModalResultDelete from './ModalResultDelete.jsx'

const ResultDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (result) => {
        setOpenModal(result)
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

                                <span onClick={() => handleOpenModalDelete(item)}>
                                    <FontAwesomeIcon className="articleResult__icon__trash" icon={faTrash} />
                                </span>
                                {openModalDelete === item && createPortal(
                                    <ModalResultDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}
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
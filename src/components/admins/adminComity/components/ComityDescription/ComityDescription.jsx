import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalComity from "./ModalComity.jsx"
import ModalComityDelete from './ModalComityDelete'

const ComityDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (member) => {
        setOpenModal(member)
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

                                <a onClick={() => handleOpenModalDelete(item)}>
                                    <FontAwesomeIcon className="articleComity__icon__trash" icon={faTrash} />
                                </a>
                                {openModalDelete === item && createPortal(
                                    <ModalComityDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}

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
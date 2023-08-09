import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import customFetch from "../../../../../utilities/fetchForAll"
import ModalAdmins from "./ModalAdmins.jsx"
import ModalAdminsDelete from './ModalAdminsDelete'

const AdminsDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (user) => {
        setOpenModal(user);
    }

    const handleCloseModal = () => {
        setOpenModal(null);
    }

    const handleOpenModalDelete = (item) => {
        setOpenModalDelete(item);
    }

    const handleCloseModalDelete = () => {
        setOpenModalDelete(null);
    }

    useEffect(() => {
        customFetch(setIsLoaded, setError, setDatas, "api/users")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                <ul className="adminAdmins__list">

                    {datas.data.map((item) => (

                        <li className="articleAdmins" key={item.id}>

                            <div className="articleAdmins__text">
                                <p>{item.email}</p>
                            </div>

                            <div className="articleAdmins__icon">

                                <a onClick={() => handleOpenModal(item)}>
                                    <FontAwesomeIcon className="articleAdmins__icon__pencil" icon={faPencil} />
                                </a>
                                {openModal === item && createPortal(
                                    <ModalAdmins adminData={item} closeModal={handleCloseModal} />, document.body
                                )}

                                <a onClick={() => handleOpenModalDelete(item)}>
                                    <FontAwesomeIcon className="articleAdmins__icon__trash" icon={faTrash} />
                                </a>
                                {openModalDelete === item && createPortal(
                                    <ModalAdminsDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}

                            </div>
                        </li>
                    ))}

                </ul>

                <p className="articleAdmins__message">{message}</p>
            </>

        )
    }
}

export default AdminsDescription;
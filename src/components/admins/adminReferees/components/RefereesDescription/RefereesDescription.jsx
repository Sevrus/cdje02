import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay"
import customFetch from "../../../../../utilities/fetchForAll.js"
import ModalReferees from './ModalReferees.jsx'
import { dataFilter } from '../../../../../utilities/dataFilter'
import ModalRefereeDelete from './ModalRefereeDelete'

const RefereesDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [openModalDelete, setOpenModalDelete] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [message, setMessage] = useState('');

    const handleOpenModal = (referee) => {
        setOpenModal(referee)
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

                                <a onClick={() => handleOpenModalDelete(item)}>
                                    <FontAwesomeIcon className="articleReferee__icon__trash" icon={faTrash} />
                                </a>
                                {openModalDelete === item && createPortal(
                                    <ModalRefereeDelete adminData={item} closeModal={handleCloseModalDelete} />, document.body
                                )}
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
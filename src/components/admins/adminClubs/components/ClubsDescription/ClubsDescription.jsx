import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import fetch from "../../../../../utilities/fetchForAll.js"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import ModalClub from "./ModalClubs.jsx"

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
                    setMessage(`La suppression du club ${id} a réussi.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    return resp.json();
                } else {
                    setMessage(`La suppression du club a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression du club.");
                }
            })
            .then(datas => {
                console.log(`La suppression du club ${id} a réussi.`,
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
        fetch(setIsLoaded, setError, setDatas, "api/clubs")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>

                {datas.data.map((item) => (

                    <section className="articleClub" key={item.id}>

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

                    </section>

                ))}

            </>

        )
    }
}

export default ClubsDescription;
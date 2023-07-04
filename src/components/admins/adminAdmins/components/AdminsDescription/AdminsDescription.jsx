import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import customFetch from "../../../../../utilities/fetchForAll"
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import ModalAdmins from "./ModalAdmins.jsx"

const AdminsDescription = () => {
    const [openModal, setOpenModal] = useState(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        console.log(id);
        fetch("http://localhost:3000/api/users/" + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`La suppression de l'utilisateur a réussi.`);
                    // clearErrorAfterDelay(setMessage, 3000);
                    return resp.json();
                } else {
                    setMessage(`La suppression de l'utilisateur a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la suppression de l'utilisateur.");
                }
            })
            .then(datas => {
                console.log(`La suppression de l'utilisateur a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (user) => {
        setOpenModal(user)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
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

                {datas.data.map((item) => (

                    <section className="articleAdmins" key={item.id}>

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

                            <span onClick={() => handleDelete(item.id)}>
                                <FontAwesomeIcon className="articleAdmins__icon__trash" icon={faTrash} />
                            </span>


                        </div>
                    </section>

                ))}

            </>

        )
    }
}

export default AdminsDescription;
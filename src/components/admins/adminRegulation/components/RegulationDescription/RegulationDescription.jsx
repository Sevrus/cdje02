import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ModalRegulation from "./ModalRegulation.jsx"
import { fetchForAll } from "../../../../../utilities/functionFetch.js"

const RegulationDescription = () => {

    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/regulations/" + id, {
            method: 'DELETE'
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La suppression du réglement ${id} a réussi.`);
                    return resp.json();
                } else {
                    console.log(`La suppression du réglement a échoué.`);
                    throw new Error("Erreur lors de la suppression du réglement.");
                }
            })
            .then(datas => {
                console.log(`La suppression du réglement ${id} a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (regulation) => {
        setOpenModal(regulation)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/regulations")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                {datas.data.map((item) => (

                    <section className="articleRegulation" key={item.id}>

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

                            <span onClick={() => { handleDelete(item.id) }}>
                                <FontAwesomeIcon className="articleRegulation__icon__trash" icon={faTrash} />
                            </span>
                        </div>

                    </section>
                ))}
            </>
        )
    }
}

export default RegulationDescription;
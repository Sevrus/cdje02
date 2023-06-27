import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import fetch from "../../../../../utilities/fetchForAll.js"
import ModalResult from "./ModalResult.jsx"


const ResultDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/tournaments/" + id, {
            method: 'DELETE'
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La suppression du tournoi ${id} a réussi.`);
                    return resp.json();
                } else {
                    console.log(`La suppression du tournoi a échoué.`);
                    throw new Error("Erreur lors de la suppression du tournoi.");
                }
            })
            .then(datas => {
                console.log(`La suppression du tournoi ${id} a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (result) => {
        setOpenModal(result)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/tournaments")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>

                {datas.data.map((item) => (

                    <section className="articleResult" key={item.id}>

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

                            <span onClick={() => { handleDelete(item.id) }}>
                                <FontAwesomeIcon className="articleResult__icon__trash" icon={faTrash} />
                            </span>
                        </div>

                    </section>

                ))}

            </>

        )
    }
}

export default ResultDescription;
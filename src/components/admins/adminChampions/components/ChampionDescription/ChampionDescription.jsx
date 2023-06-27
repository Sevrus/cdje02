import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import fetch from "../../../../../utilities/fetchForAll.js"
import ModalChampion from "./ModalChampion.jsx"

const ChampionDescription = () => {
    const [openModal, setOpenModal] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/aisnechampions/" + id, {
            method: 'DELETE'
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La suppression du champion ${id} a réussi.`);
                    return resp.json();
                } else {
                    console.log(`La suppression du champion a échoué.`);
                    throw new Error("Erreur lors de la suppression du champion.");
                }
            })
            .then(datas => {
                console.log(`La suppression du champion ${id} a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    const handleOpenModal = (champion) => {
        setOpenModal(champion)
    }

    const handleCloseModal = () => {
        setOpenModal(null)
    }

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/aisnechampions")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>
                {datas.data.map((item) => (

                    <section className="articleChampion" key={item.id}>

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

                            <span onClick={() => { handleDelete(item.id) }}>
                                <FontAwesomeIcon className="articleChampion__icon__trash" icon={faTrash} />
                            </span>
                        </div>

                    </section>

                ))}
            </>

        )
    }
}

export default ChampionDescription;
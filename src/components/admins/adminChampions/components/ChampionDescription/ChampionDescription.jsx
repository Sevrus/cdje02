import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import ModalChampion from "./ModalChampion.jsx"
import { createPortal } from "react-dom"
import { fetchForAll } from "../../../../../utilities/functionFetch.js"

const ChampionDescription = () => {
    const [openModal, setOpenModal] = useState(false);
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

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/aisnechampions")
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

                            <a onClick={() => setOpenModal(true)}>
                                <FontAwesomeIcon className="articleChampion__icon__pencil" icon={faPencil} />
                            </a>
                            {openModal && createPortal(
                                <ModalChampion closeModal={() => setOpenModal(false)} />, document.body
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
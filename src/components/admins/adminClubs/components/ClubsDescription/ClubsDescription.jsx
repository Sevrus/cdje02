import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ModalClub from "./ModalClubs.jsx"
import { fetchForAll } from "../../../../../utilities/functionFetch.js"

const ClubsDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/clubs/" + id, {
            method: 'DELETE'
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La suppression du club ${id} a réussi.`);
                    return resp.json();
                } else {
                    console.log(`La suppression du club a échoué.`);
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

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/clubs")
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
                            <a onClick={() => setOpenModal(true)}>
                                <FontAwesomeIcon className="articleClub__icon__pencil" icon={faPencil} />
                            </a>
                            {openModal && createPortal(
                                <ModalClub closeModal={() => setOpenModal(false)} />, document.body
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
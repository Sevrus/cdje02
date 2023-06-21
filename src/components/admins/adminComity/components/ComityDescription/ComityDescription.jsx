import dataComity from "./dataComity.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from "react-dom"
import ModalComity from "./ModalComity.jsx"
import { useEffect, useState } from "react"
import { fetchForAll } from "../../../../../utilities/functionFetch.js"

const ComityDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleDelete = (id) => {
        fetch("http://localhost:3000/api/comities/" + id, {
            method: 'DELETE'
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La suppression du membre ${id} a réussi.`);
                    return resp.json();
                } else {
                    console.log(`La suppression du membre a échoué.`);
                    throw new Error("Erreur lors de la suppression du membre.");
                }
            })
            .then(datas => {
                console.log(`La suppression du membre ${id} a réussi.`,
                    datas);
            })
            .catch(error => {
                console.error('Erreur lors de la requête de suppression',
                    error);
            })
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/comities")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>

                {datas.data.map((item) => (

                    <section className="articleComity" key={item.id}>

                        <div className="articleComity__text">
                            <p>{item.title}</p>
                            <p>{item.firstName} {item.lastName}</p>
                        </div>


                        <div className="articleComity__icon">
                            <a onClick={() => setOpenModal(true)}>
                                    <FontAwesomeIcon className="articleComity__icon__pencil" icon={faPencil} />
                            </a>
                            {openModal && createPortal(
                                <ModalComity data={item} closeModal={() => setOpenModal(false)} />, document.body
                            )}

                            <span onClick={() => { handleDelete(item.id) }}>
                                <FontAwesomeIcon className="articleComity__icon__trash" icon={faTrash} />
                            </span>

                        </div>

                    </section>

                ))}

            </>

        )
    }
}

export default ComityDescription;
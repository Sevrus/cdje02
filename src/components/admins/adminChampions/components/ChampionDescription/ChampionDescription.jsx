import dataChampion from "./dataChampion.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import ModalChampion from "./ModalChampion.jsx"
import { createPortal } from "react-dom"

const ChampionDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataChampions, setDataChampions] = useState([])

    // useEffect(() => {
    //     http({ url: "/champions" })
    //         .then(json => setDataChampions(json))
    // })

    const handleDelete = (id) => {
        const temp = dataChampions.filter(champions => champions.id !== id);
        setDataChampions(temp);
        // http({ url: "/champions/" + id, method: 'DELETE' });
    }

    return (

        <>
            {dataChampion.map((item) => (

                <section className="articleChampion" key={item.id}>

                    <div className="articleChampion__text">
                        <p>{item.name}</p>
                        <p>{item.year}</p>
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

export default ChampionDescription;
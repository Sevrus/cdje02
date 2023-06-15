import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalRegulation from "./ModalRegulation.jsx"
import dataRegulation from './dataRegulation.js'

const RegulationDescription = () => {

    const [openModal, setOpenModal] = useState(false);
    const [dataRegulations, setDataRegulations] = useState([])

    // useEffect(() => {
    //     http({ url: "/Regulation" })
    //         .then(json => setDataRegulations(json))
    // })

    const handleDelete = (id) => {
        const temp = dataRegulations.filter(Regulation => Regulation.id !== id);
        setDataRegulations(temp);
        // http({ url: "/Regulation/" + id, method: 'DELETE' });
    }

    return (
        <>
            {dataRegulation.map((item) => (

                <section className="articleRegulation" key={item.id}>

                    <div className="articleRegulation__text">
                        <p>{item.title}</p>
                    </div>

                    <div className="articleRegulation__icon">
                        <a onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon className="articleRegulation__icon__pencil" icon={faPencil} />
                        </a>

                        {openModal && createPortal(
                            <ModalRegulation closeModal={() => setOpenModal(false)} />, document.body
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

export default RegulationDescription;
import dataResult from "./dataResult.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from "react-dom"
import ModalResult from "./ModalResult.jsx"
import { useState } from "react"

const ResultDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataResults, setDataResults] = useState([])

    // useEffect(() => {
    //     http({ url: "/Results" })
    //         .then(json => setDataResults(json))
    // })

    const handleDelete = (id) => {
        const temp = dataResults.filter(results => results.id !== id);
        setDataResults(temp);
        // http({ url: "/Results/" + id, method: 'DELETE' });
    }

    return (

        <>

            {dataResult.map((item) => (

                <section className="articleResult" key={item.id}>

                    <div className="articleResult__text">
                        <p>{item.title}</p>
                    </div>


                    <div className="articleResult__icon">
                        <a onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon className="articleResult__icon__pencil" icon={faPencil} />
                        </a>
                        {openModal && createPortal(
                            <ModalResult closeModal={() => setOpenModal(false)} />, document.body
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

export default ResultDescription;
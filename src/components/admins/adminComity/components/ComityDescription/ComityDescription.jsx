import dataComity from "./dataComity.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from "react-dom"
import ModalComity from "./ModalComity.jsx"
import { useState } from "react"

const ComityDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataComities, setDataComities] = useState([])

    // useEffect(() => {
    //     http({ url: "/Comity" })
    //         .then(json => setDataComities(json))
    // })

    const handleDelete = (id) => {
        const temp = dataComities.filter(Comity => Comity.id !== id);
        setDataComity(temp);
        // http({ url: "/Comity/" + id, method: 'DELETE' });
    }

    return (

        <>

            {dataComity.map((item) => (

                <section className="articleComity" key={item.id}>

                    <div className="articleComity__text">
                        <p>{item.job}</p>
                        <p>{item.lastname} {item.firstname}</p>
                    </div>


                    <div className="articleComity__icon">
                        <a onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon className="articleComity__icon__pencil" icon={faPencil} />
                        </a>
                        {openModal && createPortal(
                            <ModalComity closeModal={() => setOpenModal(false)} />, document.body
                        )}
                        <FontAwesomeIcon className="articleComity__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}

        </>

    )

}

export default ComityDescription;
import dataClub from "./dataClub.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalClub from "./ModalClubs.jsx"

const ClubsDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataClubs, setDataClubs] = useState([])

    // useEffect(() => {
    //     http({ url: "/clubs" })
    //         .then(json => setDataClubs(json))
    // })

    const handleDelete = (id) => {
        const temp = dataClubs.filter(clubs => clubs.id !== id);
        setDataClubs(temp);
        // http({ url: "/clubs/" + id, method: 'DELETE' });
    }

    return (

        <>

            {dataClub.map((item) => (

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

export default ClubsDescription;
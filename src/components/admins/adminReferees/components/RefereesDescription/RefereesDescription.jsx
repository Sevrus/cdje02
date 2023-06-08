import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import dataReferee from "./dataReferee.js"
import ModalReferees from './ModalReferees.jsx'
import { createPortal } from 'react-dom'
import { useState } from 'react'

const RefereesDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataReferees, setDataReferees] = useState([])

    // useEffect(() => {
    //     http({ url: "/Referees" })
    //         .then(json => setDataReferees(json))
    // })

    const handleDelete = (id) => {
        const temp = dataReferees.filter(Referees => Referees.id !== id);
        setDataReferees(temp);
        // http({ url: "/Referees/" + id, method: 'DELETE' });
    }

    return (

        <>
            {dataReferee.map((item) => (

                <section className="articleReferee" key={item.id}>

                    <div className="articleReferee__text">
                        <p>{item.name}</p>
                        <p>{item.club}</p>
                    </div>

                    <div className="articleReferee__icon">
                        
                        <a onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon className="articleReferee__icon__pencil" icon={faPencil} />
                        </a>
                        {openModal && createPortal(
                            <ModalReferees closeModal={() => setOpenModal(false)} />, document.body
                        )}

                        <span onClick={() => { handleDelete(item.id) }}>
                            <FontAwesomeIcon className="articleReferee__icon__trash" icon={faTrash} />
                        </span>
                    </div>

                </section>

            ))}
        </>

    )
}

export default RefereesDescription;
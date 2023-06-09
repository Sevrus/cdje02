import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalAdmins from "./ModalAdmins.jsx"
import dataAdmins from "./dataAdmins.js"

const AdminsDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataAdmin, setDataAdmin] = useState([])

    // useEffect(() => {
    //     http({ url: "/admins" })
    //         .then(json => setDataAdmin(json))
    // })

    const handleDelete = (id) => {
        const temp = dataAdmin.filter(Admins => Admins.id !== id);
        setDataAdmin(temp);
        // http({ url: "/admins/" + id, method: 'DELETE' });
    }

    return (

        <>

            {dataAdmins.map((item) => (

                <section className="articleAdmins" key={item.id}>

                    <div className="articleAdmins__text">
                        <p>{item.lastname} {item.firstname}</p>
                    </div>

                    <div className="articleAdmins__icon">

                        <a onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon className="articleAdmins__icon__pencil" icon={faPencil} />
                        </a>
                        {openModal && createPortal(
                            <ModalAdmins closeModal={() => setOpenModal(false)} />, document.body
                        )}

                        <span onClick={() => { handleDelete(item.id) }}>
                            <FontAwesomeIcon className="articleAdmins__icon__trash" icon={faTrash} />
                        </span>
                    </div>
                </section>

            ))}

        </>

    )

}

export default AdminsDescription;
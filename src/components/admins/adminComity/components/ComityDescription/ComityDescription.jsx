import dataComity from "./dataComity.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ComityDescription = () => {

    return (

        <>

            {dataComity.map((item) => (

                <section className="articleComity" key={item.id}>

                    <div className="articleComity__text">
                        <p>{item.job}</p>
                        <p>{item.lastname} {item.firstname}</p>
                    </div>


                    <div className="articleComity__icon">
                        <FontAwesomeIcon className="articleComity__icon__pencil" icon={faPencil} />
                        <FontAwesomeIcon className="articleComity__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}

        </>

    )

}

export default ComityDescription;
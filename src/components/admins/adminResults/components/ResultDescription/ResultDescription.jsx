import dataResult from "./dataResult.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ResultDescription = () => {

    return (

        <>

            {dataResult.map((item) => (

                <section className="articleResult" key={item.id}>

                    <div className="articleResult__text">
                        <p>{item.title}</p>
                    </div>


                    <div className="articleResult__icon">
                        <FontAwesomeIcon className="articleResult__icon__pencil" icon={faPencil} />
                        <FontAwesomeIcon className="articleResult__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}

        </>

    )

}

export default ResultDescription;
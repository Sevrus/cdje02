import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import dataReferee from "./dataReferee.js"

const RefereesDescription = () => {

    return (

        <>
            {dataReferee.map((item) => (

                <section className="articleReferee" key={item.id}>

                    <div className="articleReferee__text">
                        <p>{item.name}</p>
                        <p>{item.club}</p>
                    </div>


                    <div className="articleReferee__icon">
                        <FontAwesomeIcon className="articleReferee__icon__pencil" icon={faPencil} />
                        <FontAwesomeIcon className="articleReferee__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}
        </>

    )
}

export default RefereesDescription;
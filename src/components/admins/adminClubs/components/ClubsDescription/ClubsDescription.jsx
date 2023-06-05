import dataClub from "./dataClub.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ClubsDescription = () => {

    return (

        <>

            {dataClub.map((item) => (

                <section className="articleClub" key={item.id}>

                    <div className="articleClub__text">
                        <p>{item.name}</p>
                        <p>{item.town}</p>
                    </div>


                    <div className="articleClub__icon">
                        <FontAwesomeIcon className="articleClub__icon__pencil" icon={faPencil} />
                        <FontAwesomeIcon className="articleClub__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}

        </>

    )

}

export default ClubsDescription;
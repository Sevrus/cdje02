import dataChampion from "./dataChampion.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ChampionDescription = () => {

    return (

        <>
            {dataChampion.map((item) => (

                <section className="articleChampion" key={item.id}>

                    <div className="articleChampion__text">
                        <p>{item.name}</p>
                        <p>{item.year}</p>
                    </div>


                    <div className="articleChampion__icon">
                        <FontAwesomeIcon className="articleChampion__icon__pencil" icon={faPencil} />
                        <FontAwesomeIcon className="articleChampion__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}
        </>

    )
}

export default ChampionDescription;
import dataClubs from "./dataClubs.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ClubsDescription = () => {

    return (
        <>
            {dataClubs.map((item) => (

                    <details className="article-clubs" key={item.id}>

                        <summary className="article-clubs__title">
                            <hr className="article-clubs__title__lineLeft" />
                            <h4>{item.name}</h4>
                            <hr className="article-clubs__title__lineRight" />
                            <FontAwesomeIcon className='article-clubs__title__iconChevronDown' icon={faChevronDown} />
                        </summary>

                        <section className="article-clubs__description">
                            <p>{item.city}</p>
                            <p>Président: {item.president}</p>
                            <p>Tél : {item.tel}</p>
                            <p>{item.site}</p>
                            <p>Membres: {item.members}</p>
                        </section>

                    </details>
            ))}
        </>
    )
}

export default ClubsDescription;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ClubsDescription = () => {

    return (
        <section className="article-clubs">

            <details>

                <summary className="article-clubs__title">
                    <hr className="article-clubs__title__lineLeft" />
                    <h4>ECHIQUIER BERNOTOIS</h4>
                    <hr className="article-clubs__title__lineRight" />
                    <FontAwesomeIcon className='article-clubs__title__iconChevronDown' icon={faChevronDown} />
                </summary>

                <div className="article-clubs__description">

                    <div className='article-clubs__description__top'>
                        <p>Commune: BERNOT</p>
                    </div>

                    <div className='article-clubs__description__tab'>

                        <div className='article-clubs__description__tab__left'>
                            <p>Président: Gerard LEROY</p>
                            <p>Tél : 03.23.09.86.47</p>
                        </div>

                        <div className='article-clubs__description__tab__right'>
                            <p>https://bernot.clubeo.com/</p>
                            <p>Membres: 10</p>
                        </div>
                        
                    </div>

                </div>

            </details>

        </section>
    )
}

export default ClubsDescription;
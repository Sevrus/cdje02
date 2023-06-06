import dataArticle from "./dataArticle.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ArticleDescription = () => {

    return (

        <>

            {dataArticle.map((item) => (

                <section className="articleArticle" key={item.id}>

                    <div className="articleArticle__text">
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                    </div>


                    <div className="articleArticle__icon">
                        <FontAwesomeIcon className="articleArticle__icon__pencil" icon={faPencil} />
                        <FontAwesomeIcon className="articleArticle__icon__trash" icon={faTrash} />
                    </div>

                </section>

            ))}

        </>

    )

}

export default ArticleDescription;
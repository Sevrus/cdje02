import dataArticle from "./dataArticle.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from "react-dom"
import { useState } from "react"
import ModalArticle from "./ModalArticle.jsx"

const ArticleDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataArticles, setDataArticles] = useState([])

    // useEffect(() => {
    //     http({ url: "/articles" })
    //         .then(json => setDataArticles(json))
    // })

    const handleDelete = (id) => {
        const temp = dataArticles.filter(articles => articles.id !== id);
        setDataArticles(temp);
        // http({ url: "/articles/" + id, method: 'DELETE' });
    }

    return (

        <>

            {dataArticle.map((item) => (

                <section className="articleArticle" key={item.id}>

                    <div className="articleArticle__text">
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                    </div>


                    <div className="articleArticle__icon">
                        <a onClick={() => setOpenModal(true)}>
                            <FontAwesomeIcon className="articleArticle__icon__pencil" icon={faPencil} />
                        </a>
                        {openModal && createPortal(
                            <ModalArticle closeModal={() => setOpenModal(false)} />, document.body
                        )}

                        <span onClick={() => { handleDelete(item.id) }}>
                            <FontAwesomeIcon className="articleArticle__icon__trash" icon={faTrash} />
                        </span>
                    </div>

                </section>

            ))}

        </>

    )

}

export default ArticleDescription;
import { Link } from "react-router-dom";
import dataArticle from "./dataArticle.js"

const NewsArticle = () => {

    return (
        <>
            {dataArticle.map((item) => (
                <section className="newsArticle" key={item.id}>

                    <div className="newsArticle__title">
                        <hr className="newsArticle__title__lineLeft" />
                        <h4>{item.title}</h4>
                        <hr className="newsArticle__title__lineRight" />
                    </div>

                    <div className="newsArticle__description">
                        <p>{item.description}
                        </p>
                    </div>

                    <div className="newsArticle__link">
                        <Link to={""} 
                        >
                            Lire la suite
                        </Link>
                    </div>

                </section>
            ))}
        </>
    )
}

export default NewsArticle;
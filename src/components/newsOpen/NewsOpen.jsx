import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NewsOpenArticle from "./components/NewsOpenArticle";

const NewsOpen = () => {

    return (
        <section className="newsOpen">

            <div className="newsOpen__title">
                <h2 className="newsOpen__title__upperhead">
                    Votre
                    <span className="newsOpen__title__subhead">article</span>
                </h2>
            </div>

            <NewsOpenArticle />

            <div className="newsOpen__go-back">
                <Link to="/articles">
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='newsOpen__go-back__icon' />
                    retour
                </Link>
            </div>

        </section>
    )
}

export default NewsOpen;
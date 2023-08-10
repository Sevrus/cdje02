import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetch from "../../../utilities/fetchForAll";
import NewsArticle from "../components/NewsArticle";

const AllNews = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/news")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <section className="allNews">

                <div className="allNews__title">
                    <h2 className="allNews__title__upperhead">
                        Tous les
                        <span className="allNews__title__subhead">articles</span>
                    </h2>
                </div>

                <ul className="allNews__list">
                    <NewsArticle data={datas} />
                </ul>

                <div className="allNews__go-back">
                    <Link to="/">
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='allNews__go-back__icon' />
                        retour
                    </Link>
                </div>

            </section>

        )
    }
}

export default AllNews;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetch from "../../utilities/fetchForAll";
import NewsArticle from "./components/NewsArticle";

const News = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/news?limit=3")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <section className="news">

                <div className="news__title">
                    <h2 className="news__title__upperhead">
                        Dernières
                        <span className="news__title__subhead">actualités</span>
                    </h2>
                </div>

                <ul className="news__list">
                <NewsArticle data={datas.data} />
                </ul>

                <div className="news__more-results">
                    <Link to="/articles">Plus d'actualités</Link>
                </div>

            </section>
        )
    }
}

export default News;
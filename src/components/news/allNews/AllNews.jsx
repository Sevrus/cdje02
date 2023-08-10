import { useEffect, useState } from "react";
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

            </section>

        )
    }
}

export default AllNews;
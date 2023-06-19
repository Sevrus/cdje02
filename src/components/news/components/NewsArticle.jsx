import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll"

const NewsArticle = () => {

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
            <>
                {datas.data.map((item) => (
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
}

    export default NewsArticle;
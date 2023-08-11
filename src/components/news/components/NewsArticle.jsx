import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import fetch from "../../../utilities/fetchForAll";
import NewsOpen from "../../newsOpen/NewsOpen";
import HTMLReactParser from "html-react-parser";

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
                            <p>{HTMLReactParser(item.description)}
                            </p>
                        </div>

                        <div className="newsArticle__link">
                            <Link to={`/articles/${item.id}`} >
                                Lire la suite
                            </Link>
                        </div>

                    </section>
                ))}

                <Routes>
                    <Route path="/articles/:id" element={<NewsOpen/>}/>
                </Routes>
            </>
        )
    }
}

export default NewsArticle;
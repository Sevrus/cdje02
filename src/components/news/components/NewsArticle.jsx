import { Link, Route, Routes } from "react-router-dom";
import NewsOpen from "../../newsOpen/NewsOpen";

const NewsArticle = ({ data }) => {

    return (
        <>
            {data &&
                data.map((item) => (
                    <section className="newsArticle" key={item.id}>

                        <div className="newsArticle__title">
                            <hr className="newsArticle__title__lineLeft" />
                            <h3>{item.title}</h3>
                            <hr className="newsArticle__title__lineRight" />
                        </div>

                        <div className="newsArticle__description">
                            <p>{item.description}
                            </p>
                        </div>

                        <div className="newsArticle__link">
                            <Link to={`/articles/${item.id}`} >
                                Lire la suite
                            </Link>
                        </div>

                    </section>
                ))
            }

            <Routes>
                <Route path="/articles/:id" element={<NewsOpen />} />
            </Routes>
        </>
    )
}

export default NewsArticle;
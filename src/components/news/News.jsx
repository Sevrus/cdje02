import NewsOpen from "../newsOpen/NewsOpen";
import NewsArticle from "./components/NewsArticle";

const News = () => {

    return (
        <section className="news">
            <h3 className="news__title__subhead">DERNIÈRES</h3>
            
            <div className="news__title__bigTitle">
                <hr className="news__title__bigTitle__lineLeft" />
                <h2>ACTUALITÉS</h2>
                <hr className="news__title__bigTitle__lineRight" />
            </div>

            <NewsArticle />

        </section>
    )
}

export default News;
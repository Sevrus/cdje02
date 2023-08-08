import NewsArticle from "./components/NewsArticle";

const News = () => {

    return (
        <section className="news">

            <div className="news__title">
                <h2 className="news__title__upperhead">
                    Dernières
                    <span className="news__title__subhead">actualités</span>
                </h2>
            </div>

            <NewsArticle />

        </section>
    )
}

export default News;
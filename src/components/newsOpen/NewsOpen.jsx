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

        </section>
    )
}

export default NewsOpen;
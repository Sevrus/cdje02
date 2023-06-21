import NewsOpenArticle from "./components/NewsOpenArticle";

const NewsOpen = () => {

    return (
        <section className="newsOpen">

            <div className="newsOpen__title__subhead">
                <h3>VOTRE</h3>
            </div>

            <div className="newsOpen__title__bigTitle">
                <hr className="newsOpen__title__bigTitle__lineLeft" />
                <h2>ARTICLE</h2>
                <hr className="newsOpen__title__bigTitle__lineRight" />
            </div>

            <NewsOpenArticle />

        </section>
    )
}

export default NewsOpen;
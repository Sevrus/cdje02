import { useLocation } from "react-router-dom";
import ArticleAdd from "./components/ArticleAdd/ArticleAdd";
import ArticleDescription from "./components/ArticleDescription/ArticleDescription";

const AdminArticles = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/articles" || pathname === "/admin") {
        return (
            <section className="article">

                    <div className="article__title">
                        <hr className="article__title__lineLeft" />
                        <h2>ARTICLES</h2>
                        <hr className="article__title__lineRight" />
                    </div>

                    <div className="article__list">
                        <ArticleDescription />
                    </div>

                    <div className="article__addTitle">

                        <h3 className="article__addTitle__subhead">AJOUTER UN</h3>

                        <div className="article__addTitle__bigTitle">
                            <hr className="article__addTitle__bigTitle__lineLeft" />
                            <h2>ARTICLE</h2>
                            <hr className="article__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ArticleAdd />

                </section>
        )
    }
}

export default AdminArticles;
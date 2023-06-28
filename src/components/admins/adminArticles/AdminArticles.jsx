import { useLocation } from "react-router-dom";
import ArticleAdd from "./components/ArticleAdd/ArticleAdd";
import ArticleDescription from "./components/ArticleDescription/ArticleDescription";

const AdminArticles = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/articles" || pathname === "/admin") {
        return (
            <section className="adminArticle">

                    <div className="adminArticle__title">
                        <hr className="adminArticle__title__lineLeft" />
                        <h2>ARTICLES</h2>
                        <hr className="adminArticle__title__lineRight" />
                    </div>

                    <div className="adminArticle__list">
                        <ArticleDescription />
                    </div>

                    <div className="adminArticle__addTitle">

                        <h3 className="adminArticle__addTitle__subhead">AJOUTER UN</h3>

                        <div className="adminArticle__addTitle__bigTitle">
                            <hr className="adminArticle__addTitle__bigTitle__lineLeft" />
                            <h2>ARTICLE</h2>
                            <hr className="adminArticle__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ArticleAdd />

                </section>
        )
    }
}

export default AdminArticles;
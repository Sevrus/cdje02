import { useLocation } from "react-router-dom";
import ArticleAdd from "./components/ArticleAdd/ArticleAdd";
import ArticleDescription from "./components/ArticleDescription/ArticleDescription";

const AdminArticles = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/articles" || pathname === "/admin") {
        return (
            <section className="adminArticle">

                <h2 className="adminArticle__title">ARTICLES</h2>

                <ArticleDescription />

                <div className="adminArticle__addTitle">
                    <h2 className="adminArticle__addTitle__upperhead">
                        Ajouter un
                        <span className="adminArticle__addTitle__subhead">article</span>
                    </h2>
                </div>

                <ArticleAdd />

            </section>
        )
    }
}

export default AdminArticles;
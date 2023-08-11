import { useEffect, useState } from "react";
import Pagination from "../../../utilities/Pagination";
import fetch from "../../../utilities/fetchForAll";
import NewsArticle from "../components/NewsArticle";

const AllNews = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    //Articles affichés sur la page actuelle
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    //si datas.data vide render un tableau vide pour éviter que le slice ne fonctionne pas
    const currentPosts = datas.data ? datas.data.slice(firstPostIndex, lastPostIndex) : [];
    // const currentPosts = datas.data.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/news");
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <section className="allNews">

                <div className="allNews__title">
                    <h2 className="allNews__title__upperhead">
                        Tous les
                        <span className="allNews__title__subhead">articles</span>
                    </h2>
                </div>

                <ul className="allNews__list">
                    <NewsArticle data={currentPosts} />
                </ul>

                <Pagination
                    totalPosts={datas.data.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />

            </section>

        )
    }
}

export default AllNews;
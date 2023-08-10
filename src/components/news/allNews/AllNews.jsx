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
    const [postsPerPage] = useState(5);
    //Articles affichés sur la page actuelle
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = datas.data.slice(indexOfFirstPost, indexOfLastPost);
    //Changer la page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/news")
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

                <Pagination postsPerPage={postsPerPage}
                    totalPosts={datas.data.length}
                    paginate={paginate}
                />

            </section>

        )
    }
}

export default AllNews;
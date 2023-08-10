import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll";
import Description from "../../description/Description";

const AllTournament = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    // //Pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(6);
    // //Articles affichés sur la page actuelle
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = datas.data.slice(indexOfFirstPost, indexOfLastPost);
    // //Changer la page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/tournaments")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <section className="tournament">

                <h2 className="tournament__title">Résultats</h2>

                <ul className="tournament__list">
                    <Description data={datas} />
                </ul>

                {/* <Pagination postsPerPage={postsPerPage}
                    totalPosts={datas.data.length}
                    paginate={paginate}
                /> */}

            </section>

        )
    }
}

export default AllTournament;
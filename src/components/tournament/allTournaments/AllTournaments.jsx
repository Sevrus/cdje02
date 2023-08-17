import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../utilities/Pagination";
import fetch from "../../../utilities/fetchForAll";
import Description from "../../description/Description";

const AllTournaments = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    //Articles affichés sur la page actuelle
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    //si datas.data vide render un tableau vide pour éviter que le slice ne fonctionne pas
    const currentPosts = datas.data ? datas.data.slice(firstPostIndex, lastPostIndex) : [];

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
                    <Description data={currentPosts} />
                </ul>

                <div className="allTournaments__go-back">
                    <Link to="/activity">
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='allTournaments__go-back__icon' />
                        retour
                    </Link>
                </div>

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

export default AllTournaments;
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetch from "../../../utilities/fetchForAll";
import Description from "../../description/Description";

const AllTournaments = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/tournaments")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <section className="allTournaments">

                <div className="allTournaments__title">
                    <h2 className="allTournaments__title__upperhead">
                        Tous les
                        <span className="allTournaments__title__subhead">résultats</span>
                    </h2>
                </div>

                <ul className="allTournaments__list">
                    <Description data={datas} />
                </ul>

                <div className="allTournaments__go-back">
                    <Link to="/activity">
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='allTournaments__go-back__icon' />
                        retour
                    </Link>
                </div>

            </section>

        )
    }
}

export default AllTournaments;
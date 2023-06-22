import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetch from "../../utilities/fetchForAll";
import Description from "../description/Description";

const Tournament = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/tournaments?limit=6")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <section className="tournament">
                <div className="tournament__title">
                    <hr className="tournament__title__left-line" />
                    <h2>TOURNOIS</h2>
                    <hr className="tournament__title__right-line" />
                </div>

                <div className="tournament__list">
                    <Description data={datas} />
                </div>

                <div className="tournament__more-results">
                    <Link to="/tournaments">Plus de résultats</Link>
                </div>

            </section>
        )
    }
}

export default Tournament;
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

                {/* <div > */}
                    <h2 className="tournament__title">Tournois</h2>
                {/* </div> */}

                <ul className="tournament__list">
                    <Description data={datas} />
                </ul>

                <div className="tournament__more-results">
                    <Link to="/tournaments">Plus de résultats</Link>
                </div>

            </section>
        )
    }
}

export default Tournament;
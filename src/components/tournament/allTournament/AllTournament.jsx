import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll";
import Description from "../../description/Description";

const AllTournament = () => {

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

            <section className="tournament">
                
                <h2 className="tournament__title">Résultats</h2>

                <ul className="tournament__list">
                    <Description data={datas} />
                </ul>

            </section>

        )
    }
}

export default AllTournament;
import { useEffect, useState } from "react";
import Description from "../../description/Description";
import { fetchForAll } from "../../../utilities/functionFetch"

const AllTournament = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/tournaments")
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
                    <h2>RÉSULTATS</h2>
                    <hr className="tournament__title__right-line" />
                </div>

                <div className="tournament__list">
                    <Description data={datas} />
                </div>

            </section>

        )
    }
}

export default AllTournament;
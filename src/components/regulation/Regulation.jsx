import { useState, useEffect } from "react";
import Description from "../description/Description";
import { fetchForAll } from "../../utilities/functionFetch"

const Regulation = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/regulations")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <section className="regulation">
                <div className="regulation__title">
                    <hr className="regulation__title__left-line" />
                    <h2>RÈGLEMENTS</h2>
                    <hr className="regulation__title__right-line" />
                </div>

                <div className="regulation__list">
                    <Description data={datas} />
                </div>
            </section>
        )
    }
}

export default Regulation;
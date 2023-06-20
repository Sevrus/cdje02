import { useEffect, useState } from "react";
import {fetchForAll} from "../../../../utilities/functionFetch"

const ClubsDescription = ({ toogle, selected }) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/clubs")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <>
                {datas.data.map(item => (

                    <li
                        className={selected === item.id ? "article-clubs active" : "article-clubs"}
                        key={item.id}
                        onClick={() => toogle(item.id, item.coordx, item.coordy)}
                    >

                        <div className="article-clubs__title">
                            <h4>{item.name}</h4>
                            <hr className="article-clubs__title__separation" />
                        </div>

                        <div className="article-clubs__description">
                            <p>{item.city}</p>
                            <p>Président: {item.president}</p>
                            <p>Membres: {item.members}</p>
                            <p>{item.site}</p>
                            <p>{item.tel}</p>
                        </div>

                    </li>
                ))}
            </>
        )
    }
}

export default ClubsDescription;
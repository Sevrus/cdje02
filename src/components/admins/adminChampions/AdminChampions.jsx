import { useLocation } from "react-router-dom";
import ChampionDescription from "./components/ChampionDescription/ChampionDescription";
import ChampionAdd from "./components/ChampionAdd/ChampionAdd";

const AdminChampions = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/champions") {
        return (
            <>
                <section className="champion">

                    <div className="champion__title">
                        <hr className="champion__title__lineLeft" />
                        <h2>CHAMPIONS</h2>
                        <hr className="champion__title__lineRight" />
                    </div>

                    <div className="champion__list">
                        <ChampionDescription />
                    </div>

                    <div className="champion__addTitle">

                        <h3 className="champion__addTitle__subhead">AJOUTER UN</h3>

                        <div className="champion__addTitle__bigTitle">
                            <hr className="champion__addTitle__bigTitle__lineLeft" />
                            <h2>CHAMPION</h2>
                            <hr className="champion__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ChampionAdd />

                </section>
            </>
        )
    }

}

export default AdminChampions;
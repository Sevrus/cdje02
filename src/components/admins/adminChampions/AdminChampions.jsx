import { useLocation } from "react-router-dom";
import ChampionAdd from "./components/ChampionAdd/ChampionAdd";
import ChampionDescription from "./components/ChampionDescription/ChampionDescription";

const AdminChampions = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/champions") {
        return (
            <>
                <section className="adminChampion">

                    <div className="adminChampion__title">
                        <hr className="adminChampion__title__lineLeft" />
                        <h2>CHAMPIONS</h2>
                        <hr className="adminChampion__title__lineRight" />
                    </div>

                    <div className="adminChampion__list">
                        <ChampionDescription />
                    </div>

                    <div className="adminChampion__addTitle">

                        <h3 className="adminChampion__addTitle__subhead">AJOUTER UN</h3>

                        <div className="adminChampion__addTitle__bigTitle">
                            <hr className="adminChampion__addTitle__bigTitle__lineLeft" />
                            <h2>CHAMPION</h2>
                            <hr className="adminChampion__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ChampionAdd />

                </section>
            </>
        )
    }

}

export default AdminChampions;
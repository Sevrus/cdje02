import { useLocation } from "react-router-dom";
import ChampionAdd from "./components/ChampionAdd/ChampionAdd";
import ChampionDescription from "./components/ChampionDescription/ChampionDescription";

const AdminChampions = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/champions") {
        return (
            <>
                <section className="adminChampion">

                    <h2 className="adminChampion__title">Champions</h2>

                    <ChampionDescription />

                    <div className="adminChampion__addTitle">
                        <h2 className="adminChampion__addTitle__upperhead">
                            Ajouter un
                            <span className="adminChampion__addTitle__subhead">champion</span>
                            </h2>
                    </div>

                    <ChampionAdd />

                </section>
            </>
        )
    }

}

export default AdminChampions;
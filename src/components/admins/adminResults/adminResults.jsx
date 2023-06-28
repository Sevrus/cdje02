import { useLocation } from "react-router-dom";
import ResultAdd from "./components/ResultAdd/ResultAdd";
import ResultDescription from "./components/ResultDescription/ResultDescription";

const AdminResults = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/results") {
        return (
            <section className="adminResult">

                    <div className="adminResult__title">
                        <hr className="adminResult__title__lineLeft" />
                        <h2>RÉSULTATS</h2>
                        <hr className="adminResult__title__lineRight" />
                    </div>

                    <div className="adminResult__list">
                        <ResultDescription />
                    </div>

                    <div className="adminResult__addTitle">

                        <h3 className="adminResult__addTitle__subhead">AJOUTER UN</h3>

                        <div className="adminResult__addTitle__bigTitle">
                            <hr className="adminResult__addTitle__bigTitle__lineLeft" />
                            <h2>RESULTAT</h2>
                            <hr className="adminResult__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ResultAdd />

                </section>
        )
    }
}

export default AdminResults;
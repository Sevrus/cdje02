import { useLocation } from "react-router-dom";
import ResultAdd from "./components/ResultAdd/ResultAdd";
import ResultDescription from "./components/ResultDescription/ResultDescription";

const AdminResults = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/results") {
        return (
            <section className="adminResult">

                <h2 className="adminResult__title">Résultats</h2>

                <ResultDescription />

                <div className="adminResult__addTitle">
                    <h2 className="adminResult__addTitle__upperhead">
                        Ajouter un
                        <span className="adminResult__addTitle__subhead">résultat</span>
                    </h2>
                </div>

                <ResultAdd />

            </section>
        )
    }
}

export default AdminResults;
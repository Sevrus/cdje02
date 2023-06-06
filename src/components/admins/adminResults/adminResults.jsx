import { useLocation } from "react-router-dom";
import ResultDescription from "./components/ResultDescription/ResultDescription";
import ResultAdd from "./components/ResultAdd/ResultAdd";

const AdminResults = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/results") {
        return (
            <section className="result">

                    <div className="result__title">
                        <hr className="result__title__lineLeft" />
                        <h2>RÉSULTATS</h2>
                        <hr className="result__title__lineRight" />
                    </div>

                    <div className="result__list">
                        <ResultDescription />
                    </div>

                    <div className="result__addTitle">

                        <h3 className="result__addTitle__subhead">AJOUTER UN</h3>

                        <div className="result__addTitle__bigTitle">
                            <hr className="result__addTitle__bigTitle__lineLeft" />
                            <h2>RÉSULTAT</h2>
                            <hr className="result__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ResultAdd />

                </section>
        )
    }
}

export default AdminResults;
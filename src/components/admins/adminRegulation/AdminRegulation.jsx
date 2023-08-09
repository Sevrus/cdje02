import { useLocation } from "react-router-dom";
import RegulationAdd from "./components/RegulationAdd/RegulationAdd";
import RegulationDescription from "./components/RegulationDescription/RegulationDescription";

const AdminRegulation = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/regulation") {
        return (
            <section className="adminRegulation">

                <h2 className="adminRegulation__title">Règlements</h2>

                    <RegulationDescription />

                <div className="adminRegulation__addTitle">
                    <h2 className="adminRegulation__addTitle__upperhead">
                        Ajouter un
                        <span className="adminRegulation__addTitle__subhead">règlement</span>
                        </h2>
                </div>

                <RegulationAdd />

            </section>
        )
    }
}

export default AdminRegulation;
import { useLocation } from "react-router-dom";
import RegulationAdd from "./components/RegulationAdd/RegulationAdd";
import RegulationDescription from "./components/RegulationDescription/RegulationDescription";

const AdminRegulation = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/regulation") {
        return (
            <section className="adminRegulation">

                <div className="adminRegulation__title">
                    <hr className="adminRegulation__title__lineLeft" />
                    <h2>RÈGLEMENTS</h2>
                    <hr className="adminRegulation__title__lineRight" />
                </div>

                    <RegulationDescription />

                <div className="adminRegulation__addTitle">

                    <h3 className="adminRegulation__addTitle__subhead">AJOUTER UN</h3>

                    <div className="adminRegulation__addTitle__bigTitle">
                        <hr className="adminRegulation__addTitle__bigTitle__lineLeft" />
                        <h2>RÈGLEMENT</h2>
                        <hr className="adminRegulation__addTitle__bigTitle__lineRight" />
                    </div>

                </div>

                <RegulationAdd />

            </section>
        )
    }
}

export default AdminRegulation;
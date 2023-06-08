import { useLocation } from "react-router-dom";
import RegulationAdd from "./components/RegulationAdd/RegulationAdd";
import RegulationDescription from "./components/RegulationDescription/RegulationDescription";

const AdminRegulation = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/regulation") {
        return (
            <section className="regulation">

                <div className="regulation__title">
                    <hr className="regulation__title__lineLeft" />
                    <h2>RÈGLEMENTS</h2>
                    <hr className="regulation__title__lineRight" />
                </div>

                <div className="regulation__list">
                    <RegulationDescription />
                </div>

                <div className="regulation__addTitle">

                    <h3 className="regulation__addTitle__subhead">AJOUTER UN</h3>

                    <div className="regulation__addTitle__bigTitle">
                        <hr className="regulation__addTitle__bigTitle__lineLeft" />
                        <h2>RÈGLEMENT</h2>
                        <hr className="regulation__addTitle__bigTitle__lineRight" />
                    </div>

                </div>

                <RegulationAdd />

            </section>
        )
    }
}

export default AdminRegulation;
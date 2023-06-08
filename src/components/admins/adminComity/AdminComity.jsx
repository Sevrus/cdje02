import { useLocation } from "react-router-dom";
import ComityAdd from "./components/ComityAdd/ComityAdd";
import ComityDescription from "./components/ComityDescription/ComityDescription";

const AdminComity = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/comity") {
        return (

                <section className="comity">

                    <div className="comity__title">
                        <hr className="comity__title__lineLeft" />
                        <h2>COMITÉ</h2>
                        <hr className="comity__title__lineRight" />
                    </div>

                    <div className="comity__list">
                        <ComityDescription />
                    </div>

                    <div className="comity__addTitle">

                        <h3 className="comity__addTitle__subhead">AJOUTER UN</h3>

                        <div className="comity__addTitle__bigTitle">
                            <hr className="comity__addTitle__bigTitle__lineLeft" />
                            <h2>MEMBRE</h2>
                            <hr className="comity__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ComityAdd />

                </section>

        )
    }
}

export default AdminComity;
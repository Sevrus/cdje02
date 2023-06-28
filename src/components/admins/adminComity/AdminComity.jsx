import { useLocation } from "react-router-dom";
import ComityAdd from "./components/ComityAdd/ComityAdd";
import ComityDescription from "./components/ComityDescription/ComityDescription";

const AdminComity = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/comity") {
        return (

                <section className="adminComity">

                    <div className="adminComity__title">
                        <hr className="adminComity__title__lineLeft" />
                        <h2>COMITÉ</h2>
                        <hr className="adminComity__title__lineRight" />
                    </div>

                    <div className="adminComity__list">
                        <ComityDescription />
                    </div>

                    <div className="adminComity__addTitle">

                        <h3 className="adminComity__addTitle__subhead">AJOUTER UN</h3>

                        <div className="adminComity__addTitle__bigTitle">
                            <hr className="adminComity__addTitle__bigTitle__lineLeft" />
                            <h2>MEMBRE</h2>
                            <hr className="adminComity__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <ComityAdd />

                </section>

        )
    }
}

export default AdminComity;
import { useLocation } from "react-router-dom";
import ComityAdd from "./components/ComityAdd/ComityAdd";
import ComityDescription from "./components/ComityDescription/ComityDescription";

const AdminComity = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/comity") {
        return (

            <section className="adminComity">

                <h2 className="adminComity__title">Comité</h2>

                <ComityDescription />

                <div className="adminComity__addTitle">
                    <h2 className="adminComity__addTitle__upperhead">
                        Ajouter un
                        <span className="adminComity__addTitle__subhead">membre</span>
                    </h2>
                </div>

                <ComityAdd />

            </section>

        )
    }
}

export default AdminComity;
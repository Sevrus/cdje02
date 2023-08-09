import { useLocation } from "react-router-dom";
import RefereesAdd from "./components/RefereesAdd/RefereesAdd";
import RefereesDescription from "./components/RefereesDescription/RefereesDescription";

const AdminReferees = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/referees") {
        return (
            <>
                <section className="adminReferee">

                    <h2 className="adminAdmins__title">Arbitres</h2>

                    <RefereesDescription />

                    <div className="adminReferee__addTitle">
                        <h2 className="adminReferee__addTitle__upperhead">
                            Ajouter un
                            <span className="adminReferee__addTitle__subhead">arbitre</span>
                        </h2>
                    </div>

                    <RefereesAdd />

                </section>
            </>
        )
    }
}

export default AdminReferees;
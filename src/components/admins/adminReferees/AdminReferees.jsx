import { useLocation } from "react-router-dom";
import RefereesAdd from "./components/RefereesAdd/RefereesAdd";
import RefereesDescription from "./components/RefereesDescription/RefereesDescription";

const AdminReferees = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/referees") {
        return (
            <>
                <section className="adminReferee">

                    <div className="adminReferee__title">
                        <hr className="adminReferee__title__lineLeft" />
                        <h2>ARBITRES</h2>
                        <hr className="adminReferee__title__lineRight" />
                    </div>

                        <RefereesDescription />

                    <div className="adminReferee__addTitle">

                        <h3 className="adminReferee__addTitle__subhead">AJOUTER UN</h3>

                        <div className="adminReferee__addTitle__bigTitle">
                            <hr className="adminReferee__addTitle__bigTitle__lineLeft" />
                            <h2>ARBITRE</h2>
                            <hr className="adminReferee__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <RefereesAdd />

                </section>
            </>
        )
    }
}

export default AdminReferees;
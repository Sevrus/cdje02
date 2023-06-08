import { useLocation } from "react-router-dom";
import RefereesAdd from "./components/RefereesAdd/RefereesAdd";
import RefereesDescription from "./components/RefereesDescription/RefereesDescription";

const AdminReferees = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/referees") {
        return (
            <>
                <section className="referee">

                    <div className="referee__title">
                        <hr className="referee__title__lineLeft" />
                        <h2>ARBITRES</h2>
                        <hr className="referee__title__lineRight" />
                    </div>

                    <div className="referee__list">
                        <RefereesDescription />
                    </div>

                    <div className="referee__addTitle">

                        <h3 className="referee__addTitle__subhead">AJOUTER UN</h3>

                        <div className="referee__addTitle__bigTitle">
                            <hr className="referee__addTitle__bigTitle__lineLeft" />
                            <h2>ARBITRE</h2>
                            <hr className="referee__addTitle__bigTitle__lineRight" />
                        </div>

                    </div>

                    <RefereesAdd />

                </section>
            </>
        )
    }
}

export default AdminReferees;
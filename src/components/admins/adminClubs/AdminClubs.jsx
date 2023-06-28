import { useLocation } from "react-router-dom";
import ClubsAdd from "./components/ClubsAdd/ClubsAdd";
import ClubsDescription from "./components/ClubsDescription/ClubsDescription";

const AdminClubs = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/clubs") {
        return (
            <section className="adminClubs">

                <div className="adminClubs__title">
                    <hr className="adminClubs__title__lineLeft" />
                    <h2>CLUBS</h2>
                    <hr className="adminClubs__title__lineRight" />
                </div>

                <div className="adminClubs__list">
                    <ClubsDescription />
                </div>

                <div className="adminClubs__addTitle">

                    <h3 className="adminClubs__addTitle__subhead">AJOUTER UN</h3>

                    <div className="adminClubs__addTitle__bigTitle">
                        <hr className="adminClubs__addTitle__bigTitle__lineLeft" />
                        <h2>CLUB</h2>
                        <hr className="adminClubs__addTitle__bigTitle__lineRight" />
                    </div>

                </div>

                <ClubsAdd />

            </section>
        )
    }
}

export default AdminClubs;
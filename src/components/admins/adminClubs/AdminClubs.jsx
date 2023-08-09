import { useLocation } from "react-router-dom";
import ClubsAdd from "./components/ClubsAdd/ClubsAdd";
import ClubsDescription from "./components/ClubsDescription/ClubsDescription";

const AdminClubs = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/clubs") {
        return (
            <section className="adminClubs">

                <h2 className="adminClubs__title">Clubs</h2>

                    <ClubsDescription />

                <div className="adminClubs__addTitle">
                    <h2 className="adminClubs__addTitle__upperhead">
                        Ajouter un
                        <span className="adminClubs__addTitle__subhead">club</span>
                    </h2>
                </div>

                <ClubsAdd />

            </section>
        )
    }
}

export default AdminClubs;
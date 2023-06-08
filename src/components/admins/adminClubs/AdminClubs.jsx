import { useLocation } from "react-router-dom";
import ClubsAdd from "./components/ClubsAdd/ClubsAdd";
import ClubsDescription from "./components/ClubsDescription/ClubsDescription";

const AdminClubs = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/clubs") {
        return (
            <section className="clubs">

                <div className="clubs__title">
                    <hr className="clubs__title__lineLeft" />
                    <h2>CLUBS</h2>
                    <hr className="clubs__title__lineRight" />
                </div>

                <div className="clubs__list">
                    <ClubsDescription />
                </div>

                <div className="clubs__addTitle">

                    <h3 className="clubs__addTitle__subhead">AJOUTER UN</h3>

                    <div className="clubs__addTitle__bigTitle">
                        <hr className="clubs__addTitle__bigTitle__lineLeft" />
                        <h2>CLUB</h2>
                        <hr className="clubs__addTitle__bigTitle__lineRight" />
                    </div>

                </div>

                <ClubsAdd />

            </section>
        )
    }
}

export default AdminClubs;
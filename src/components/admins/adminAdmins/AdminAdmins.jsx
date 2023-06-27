import { useLocation } from "react-router-dom";
import AdminsAdd from "./components/AdminsAdd/AdminsAdd";
import AdminsDescription from "./components/AdminsDescription/AdminsDescription";

const AdminAdmins = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/admins") {
        
        return (
            <section className="admins">

                <div className="admins__title">
                    <hr className="admins__title__lineLeft" />
                    <h2>ADMINS</h2>
                    <hr className="admins__title__lineRight" />
                </div>

                <div className="admins__list">
                    <AdminsDescription />
                </div>

                <div className="admins__addTitle">

                    <h3 className="admins__addTitle__subhead">AJOUTER UN</h3>

                    <div className="admins__addTitle__bigTitle">
                        <hr className="admins__addTitle__bigTitle__lineLeft" />
                        <h2>ADMIN</h2>
                        <hr className="admins__addTitle__bigTitle__lineRight" />
                    </div>

                </div>

                <AdminsAdd />

            </section>
        )
    }
}

export default AdminAdmins;
import { useLocation } from "react-router-dom";
import AdminsAdd from "./components/AdminsAdd/AdminsAdd";
import AdminsDescription from "./components/AdminsDescription/AdminsDescription";

const AdminAdmins = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/admins") {
        
        return (
            <section className="adminAdmins">

                <div className="adminAdmins__title">
                    <hr className="adminAdmins__title__lineLeft" />
                    <h2>ADMINS</h2>
                    <hr className="adminAdmins__title__lineRight" />
                </div>

                <div className="adminAdmins__list">
                    <AdminsDescription />
                </div>

                <div className="adminAdmins__addTitle">

                    <h3 className="adminAdmins__addTitle__subhead">AJOUTER UN</h3>

                    <div className="adminAdmins__addTitle__bigTitle">
                        <hr className="adminAdmins__addTitle__bigTitle__lineLeft" />
                        <h2>ADMIN</h2>
                        <hr className="adminAdmins__addTitle__bigTitle__lineRight" />
                    </div>

                </div>

                <AdminsAdd />

            </section>
        )
    }
}

export default AdminAdmins;
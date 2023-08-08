import { useLocation } from "react-router-dom";
import AdminsAdd from "./components/AdminsAdd/AdminsAdd";
import AdminsDescription from "./components/AdminsDescription/AdminsDescription";

const AdminAdmins = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/admins") {

        return (
            <section className="adminAdmins">

                <h2 className="adminAdmins__title">Admins</h2>

                <AdminsDescription />

                <div className="adminAdmins__addTitle">
                    <h2 className="adminAdmins__addTitle__upperhead">
                        Ajouter un
                        <span className="adminAdmins__addTitle__subhead">admin</span>
                    </h2>
                </div>

                <AdminsAdd />

            </section>
        )
    }
}

export default AdminAdmins;
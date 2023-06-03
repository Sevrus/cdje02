import { useLocation } from "react-router-dom";

const AdminReferees = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/referees") {
        return (
            <>
                <h1>Arbitres</h1>
            </>
        )
    }
}

export default AdminReferees;
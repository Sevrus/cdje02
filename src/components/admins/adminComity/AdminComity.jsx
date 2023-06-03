import { useLocation } from "react-router-dom";

const AdminComity = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/comity") {
        return (
            <>
                <h1>Comité</h1>
            </>
        )
    }
}

export default AdminComity;
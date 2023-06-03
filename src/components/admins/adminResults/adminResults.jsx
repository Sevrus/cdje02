import { useLocation } from "react-router-dom";

const AdminResults = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/results") {
        return (
            <>
                <h1>Résultats</h1>
            </>
        )
    }
}

export default AdminResults;
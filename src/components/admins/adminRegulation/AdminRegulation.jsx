import { useLocation } from "react-router-dom";

const AdminRegulation = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/regulation") {
        return (
            <>
                <h1>Règlements</h1>
            </>
        )
    }
}

export default AdminRegulation;
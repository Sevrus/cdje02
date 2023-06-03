import { useLocation } from "react-router-dom";

const AdminClubs = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/clubs") {
        return (
            <>
                <h1>Clubs</h1>
            </>
        )
    }
}

export default AdminClubs;
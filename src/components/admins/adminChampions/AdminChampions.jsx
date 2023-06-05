import { useLocation } from "react-router-dom";

const AdminChampions = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/champions" || pathname === "/admin") {
        return (
            <>
                <h1>Champions</h1>
            </>
        )
    }

}

export default AdminChampions;
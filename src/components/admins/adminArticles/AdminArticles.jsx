import { useLocation } from "react-router-dom";

const AdminArticles = () => {
    const { pathname } = useLocation();

    if (pathname === "/admin/articles") {
        return (
            <>
                <h1>Articles</h1>
            </>
        )
    }
}

export default AdminArticles;
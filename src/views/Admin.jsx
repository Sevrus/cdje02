import AdminArticles from "../components/admins/adminArticles/AdminArticles";
import AdminChampions from "../components/admins/adminChampions/AdminChampions";
import AdminClubs from "../components/admins/adminClubs/AdminClubs";
import AdminComity from "../components/admins/adminComity/AdminComity";
import AdminNav from "../components/admins/adminNav/AdminNav";
import AdminReferees from "../components/admins/adminReferees/AdminReferees";
import AdminRegulation from "../components/admins/adminRegulation/AdminRegulation";
import AdminResults from "../components/admins/adminResults/adminResults";

const Admin = () => {

    return (
        <>
            <AdminNav />

            <AdminChampions />
            <AdminReferees />
            <AdminClubs />
            <AdminComity />
            <AdminArticles />
            <AdminResults />
            <AdminRegulation />
        </>
    )
}

export default Admin;
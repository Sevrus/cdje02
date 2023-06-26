import { useContext } from "react";
import AdminAdmins from "../components/admins/adminAdmins/AdminAdmins";
import AdminArticles from "../components/admins/adminArticles/AdminArticles";
import AdminChampions from "../components/admins/adminChampions/AdminChampions";
import AdminClubs from "../components/admins/adminClubs/AdminClubs";
import AdminComity from "../components/admins/adminComity/AdminComity";
import AdminNav from "../components/admins/adminNav/AdminNav";
import AdminReferees from "../components/admins/adminReferees/AdminReferees";
import AdminRegulation from "../components/admins/adminRegulation/AdminRegulation";
import AdminResults from "../components/admins/adminResults/adminResults";
import { AuthContext } from "../utilities/AuthContext";

const Admin = () => {

    const { isLoggedIn } = useContext(AuthContext);
    return (
        <>
            {isLoggedIn &&
                <>
                    < AdminNav />

                    <AdminArticles />
                    <AdminResults />
                    <AdminClubs />
                    <AdminComity />
                    <AdminReferees />
                    <AdminChampions />
                    <AdminRegulation />
                    <AdminAdmins />
                </>
            }
        </>
    )
}

export default Admin;
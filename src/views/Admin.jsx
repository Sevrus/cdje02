import { useState } from "react";
import AdminAdmins from "../components/admins/adminAdmins/AdminAdmins";
import AdminArticles from "../components/admins/adminArticles/AdminArticles";
import AdminChampions from "../components/admins/adminChampions/AdminChampions";
import AdminClubs from "../components/admins/adminClubs/AdminClubs";
import AdminComity from "../components/admins/adminComity/AdminComity";
import AdminNav from "../components/admins/adminNav/AdminNav";
import AdminReferees from "../components/admins/adminReferees/AdminReferees";
import AdminRegulation from "../components/admins/adminRegulation/AdminRegulation";
import AdminResults from "../components/admins/adminResults/adminResults";

const Admin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {/* {isLoggedIn ? */}
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
                {/* : null} */}
        </>
    )
}

export default Admin;
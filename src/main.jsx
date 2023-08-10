import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import AdminAdmins from './components/admins/adminAdmins/AdminAdmins';
import AdminArticles from './components/admins/adminArticles/AdminArticles';
import AdminChampions from './components/admins/adminChampions/AdminChampions';
import AdminClubs from './components/admins/adminClubs/AdminClubs';
import AdminComity from './components/admins/adminComity/AdminComity';
import AdminReferees from './components/admins/adminReferees/AdminReferees';
import AdminRegulation from './components/admins/adminRegulation/AdminRegulation';
import AdminResults from './components/admins/adminResults/adminResults';
import AllNews from './components/news/allNews/AllNews';
import NewsOpen from './components/newsOpen/NewsOpen';
import Confidentiality from './components/policies/confidentiality/Confidentiality';
import LegalNotice from './components/policies/legalNotice/LegalNotice';
import RequestResetPassword from './components/resetPassword/RequestResetPassword';
import ResetPassword from './components/resetPassword/ResetPassword';
import AllTournament from './components/tournament/allTournament/AllTournament';
import ErrorPage from './ErrorPage';
import { AuthProvider } from "./utilities/AuthContext.jsx";
import ScrollToTop from './utilities/ScrollToTop';
import Activity from './views/Activity';
import Admin from './views/Admin';
import Contact from './views/Contact';
import Index from './views/Index';
import Info from './views/Info';


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider>
                <ScrollToTop />
                <App />
            </AuthProvider>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/articles",
                element: <AllNews />,
            },
            {
                path: "/articles/:id",
                element: <NewsOpen />,
            },
            {
                path: "/info",
                element: <Info />,
            },
            {
                path: "/activity",
                element: <Activity />,
            },
            {
                path: "/tournaments",
                element: <AllTournament />
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/legal-notice",
                element: <LegalNotice />,
            },
            {
                path: "/confidentiality",
                element: <Confidentiality />,
            },
            {
                path: "/reset-password/:resetIdentifier",
                element: <ResetPassword />,
            },
            {
                path: "/request-reset-password",
                element: <RequestResetPassword />,
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        index: true,
                        path: "champions",
                        element: <AdminChampions />
                    },
                    {
                        path: "referees",
                        element: <AdminReferees />
                    },
                    {
                        path: "clubs",
                        element: <AdminClubs />
                    },
                    {
                        path: "comity",
                        element: <AdminComity />
                    },
                    {
                        path: "articles",
                        element: <AdminArticles />
                    },
                    {
                        path: "results",
                        element: <AdminResults />
                    },
                    {
                        path: "regulation",
                        element: <AdminRegulation />
                    },
                    {
                        path: "admins",
                        element: <AdminAdmins />
                    },
                ]
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
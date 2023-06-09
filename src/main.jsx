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
import Confidentiality from './components/policies/confidentiality/Confidentiality';
import LegalNotice from './components/policies/legalNotice/LegalNotice';
import ResetPassword from './components/resetPassword/ResetPassword';
import ErrorPage from './ErrorPage';
import Activity from './views/Activity';
import Admin from './views/Admin';
import Contact from './views/Contact';
import Index from './views/Index';
import Info from './views/Info';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Index />,
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
                path: "/resetPassword",
                element: <ResetPassword />,
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        index: true,
                        path: "/admin/champions",
                        element: <AdminChampions />
                    },
                    {
                        path: "/admin/referees",
                        element: <AdminReferees />
                    },
                    {
                        path: "/admin/clubs",
                        element: <AdminClubs />
                    },
                    {
                        path: "/admin/comity",
                        element: <AdminComity />
                    },
                    {
                        path: "/admin/articles",
                        element: <AdminArticles />
                    },
                    {
                        path: "/admin/results",
                        element: <AdminResults />
                    },
                    {
                        path: "/admin/regulation",
                        element: <AdminRegulation />
                    },
                    {
                        path: "/admin/admins",
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
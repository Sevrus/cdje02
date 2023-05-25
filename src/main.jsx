import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Confidentiality from './components/policies/confidentiality/Confidentiality';
import LegalNotice from './components/policies/legalNotice/LegalNotice';
import ErrorPage from './ErrorPage';
import Activity from './views/Activity';
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
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
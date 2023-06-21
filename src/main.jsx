import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
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
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
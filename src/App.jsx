import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    return (
        <>
            <Header />
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default App;
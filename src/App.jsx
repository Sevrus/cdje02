import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, [])

    useEffect(() => {
        const checkAuthenticationStatus = () => {
          const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    
          if (storedIsLoggedIn) {
            setIsLoggedIn(JSON.parse(storedIsLoggedIn));
          }
        };
    
        checkAuthenticationStatus();
      }, []);
    
      useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, [isLoggedIn]);

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
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

const App = () => {

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
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderChessboard from "./components/headerChessboard/HeaderChessboard.jsx";
import HeaderLogo from "./components/headerLogo/HeaderLogo.jsx";
import HeaderNav from "./components/headerNav/HeaderNav.jsx";
import { shouldChessboardDisappear } from "../../utilities/chessboardUtils.js";

const Header = () => {
    const [resizeHeader, setResizeHeader] = useState(false);
    const { pathname } = useLocation();

    const changeSize = () => {
        setResizeHeader(shouldChessboardDisappear(pathname, window.scrollY))
        // const adminPaths = [
        //     "/admin", "/admin/champions", "/admin/referees", "/admin/clubs",
        //     "/admin/comity", "/admin/articles", "/admin/results",
        //     "/admin/regulation", "/admin/admins"
        // ];
        //
        // const isAdminPath = adminPaths.includes(pathname);
        // const isScrolled = window.scrollY >= 100;
        //
        // setResizeHeader(isAdminPath || isScrolled);
    }

    window.addEventListener('scroll', changeSize);

    return (
        <header className={resizeHeader ? 'header resize' : 'header normal-size'}>
            <HeaderLogo chessboardDisappear={resizeHeader} />
            <HeaderNav chessboardDisappear={resizeHeader} />
            <HeaderChessboard chessboardDisappear={resizeHeader} />
        </header>
    )
}

export default Header;
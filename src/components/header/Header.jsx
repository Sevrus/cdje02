import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderChessboard from "./components/headerChessboard/HeaderChessboard.jsx";
import HeaderLogo from "./components/headerLogo/HeaderLogo.jsx";
import HeaderNav from "./components/headerNav/HeaderNav.jsx";

const Header = () => {
    const [resizeHeader, setResizeHeader] = useState(false);
    const { pathname } = useLocation();

    const changeSize = () => {
        if (pathname === "/admin" || pathname === "/admin/champions" || pathname === "/admin/referees"
            || pathname === "/admin/clubs" || pathname === "/admin/comity" || pathname === "/admin/articles"
            || pathname === "/admin/results" || pathname === "/admin/regulation") {
            setResizeHeader(true);

        } else {
            window.scrollY >= 180 ? setResizeHeader(true) : setResizeHeader(false);
        }
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
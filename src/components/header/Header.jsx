import { useState } from "react";
import HeaderLogo from "./components/headerLogo/HeaderLogo.jsx";
import HeaderNav from "./components/headerNav/HeaderNav.jsx";
import HeaderChessboard from "./components/headerTitle/HeaderChessboard.jsx";

const Header = ({ chessboardDisappear }) => {
    const [resizeHeader, setResizeHeader] = useState(false);
    const changeSize = () => {
        window.scrollY >= 180 ? setResizeHeader(true) : setResizeHeader(false);
    }

    window.addEventListener('scroll', changeSize);

    return (
        <header className={resizeHeader ? 'header resize' : 'header normal-size'}>
            <HeaderLogo chessboardDisappear={resizeHeader}/>
            <HeaderNav chessboardDisappear={resizeHeader}/>
            <HeaderChessboard chessboardDisappear={resizeHeader}/>
        </header>
    )
}

export default Header;
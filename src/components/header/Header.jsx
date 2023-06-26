import { useContext, useState } from "react";
import { AuthContext } from "../../utilities/AuthContext.jsx";
import HeaderChessboard from "./components/headerChessboard/HeaderChessboard.jsx";
import HeaderLogo from "./components/headerLogo/HeaderLogo.jsx";
import HeaderNav from "./components/headerNav/HeaderNav.jsx";

const Header = () => {
    const [resizeHeader, setResizeHeader] = useState(false);
    const { login, logout } = useContext(AuthContext);


    const changeSize = () => {
        if (login) {
            setResizeHeader(true);

        } else if (logout) {
            window.scrollY >= 100 ? setResizeHeader(true) : setResizeHeader(false);
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
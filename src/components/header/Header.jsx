import { useState } from "react";
import HeaderNav from "./components/headerNav/HeaderNav.jsx";
import HeaderTitle from "./components/headerTitle/HeaderTitle.jsx";

const Header = () => {
    const [resizeHeader, setResizeHeader] = useState(false);
    const changeSize = () => {
        window.scrollY >= 280 ? setResizeHeader(true) : setResizeHeader(false);
    }

    window.addEventListener('scroll', changeSize);

    return (
        <header className={resizeHeader ? 'header resize' : 'header normal-size'}>
            <HeaderNav/>
            <HeaderTitle chessboardDisappear={resizeHeader}/>
        </header>
    )
}

export default Header;
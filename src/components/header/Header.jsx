import HeaderNav from "./components/headerNav/HeaderNav.jsx";
import headerImg from '../../assets/images/Image_header.png';
import rightBar from '../../assets/svg/right_bar.svg';
import leftBar from '../../assets/svg/left_bar.svg';

const Header = () => {

    return (
        <header className="header">
            <HeaderNav/>
            <div className="header__title">
                <img src={rightBar} alt="" className="header__title--right-bar"/>
                <img src={leftBar} alt="" className="header__title--left-bar"/>
                <h1>CDJE<span>02</span></h1>
            </div>
            <img src={headerImg} alt="Un échiquier" className="header__chessboard"/>
        </header>
    )
}

export default Header;
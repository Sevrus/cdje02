import { Link } from "react-router-dom";

const FooterNav = () => {

    return (
        <div className="footer__nav">
            <span className="footer__nav__title">PLAN DU SITE</span>
            <div className="footer__nav__links">
                <Link to="/">Accueil</Link>
                <Link to="/info">A Propos</Link>
                <Link to="/activity">Activités</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default FooterNav;
import { Link } from "react-router-dom";

const FooterNav = () => {

    return (
        <div className="footer_nav">
            <div className="footer_nav_index">
                <Link to="/">Accueil</Link>
            </div>
            <div className="footer_nav_info">
                <Link to="/info">A Propos</Link>
            </div>
            <div className="footer_nav_activity">
                <Link to="/activity">Activités</Link>
            </div>
            <div className="footer_nav_contact">
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footer_nav_login">
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default FooterNav;
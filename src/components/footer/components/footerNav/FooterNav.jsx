import { NavLink } from "react-router-dom";


const FooterNav = () => {

    return (
        <nav className="footer__nav">
            <p className="footer__nav__title">Plan du site</p>
            <ul className="footer__nav__links">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/info"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    A Propos
                </NavLink>

                <NavLink
                    to="/activity"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Activités
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Contact
                </NavLink>
            </ul>
        </nav>
    )
}

export default FooterNav;
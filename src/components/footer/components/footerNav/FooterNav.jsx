import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import Modal from "../../../modal/Modal";


const FooterNav = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <nav className="footer__nav">
            <p className="footer__nav__title">PLAN DU SITE</p>
            <ul className="footer__nav__links">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    ACCUEIL
                </NavLink>

                <NavLink
                    to="/info"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    A PROPOS
                </NavLink>

                <NavLink
                    to="/activity"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    ACTIVITÉS
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    CONTACT
                </NavLink>

                <a onClick={() => setOpenModal(true)}>
                    LOGIN
                </a>
                {openModal && createPortal(
                    <Modal closeModal={() => setOpenModal(false)} />, document.body
                )}
            </ul>
        </nav>
    )
}

export default FooterNav;
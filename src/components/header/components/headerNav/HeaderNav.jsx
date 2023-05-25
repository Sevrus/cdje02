import {
    faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import logoCDJE from "../../../../assets/svg/logo_cdje.svg";
import Modal from "../../../modal/Modal";

const HeaderNav = ({ chessboardDisappear }) => {
    const [burgerClass, setBurgerClass] = useState("navbar__burger__line unclicked");
    const [isOpen, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            setBurgerClass("navbar__burger__line clicked");
        } else {
            setBurgerClass("navbar__burger__line unclicked");
        }
        setOpen(!isOpen);
    };

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth);

            if (window.innerWidth > 767) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);

    return (
        <nav className={chessboardDisappear ? 'navbar--scroll' : 'navbar'}>
            <div className="navbar__burger" onClick={handleClick}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            {(isOpen || width > 767) && (
                <ul className={chessboardDisappear ? 'navbar__links--scroll' : 'navbar__links'}>
                    <li className={chessboardDisappear ? 'navbar__links--disappear-site-name' : 'navbar__links--site-name'}>
                        <p>CDJE</p>
                        <p className="navbar__links--site-name__span">02</p>
                    </li>

                    <Link to={`/`}>
                        <img src={logoCDJE} alt="logo CDJE02"
                            className={chessboardDisappear ? 'navbar__links__logo--scroll' : 'navbar__links__logo'} />
                    </Link>

                    <li className={chessboardDisappear ? 'navbar__links__link--scroll' : 'navbar__links__link'}>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            ACCUEIL
                        </NavLink>
                    </li>
                    <li className={chessboardDisappear ? 'navbar__links__link--scroll' : 'navbar__links__link'}>
                        <NavLink
                            to={`/info`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            A PROPOS
                        </NavLink>
                    </li>
                    <li className={chessboardDisappear ? 'navbar__links__link--scroll' : 'navbar__links__link'}>
                        <NavLink
                            to={`/activity`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            ACTIVITÉS
                        </NavLink>
                    </li>
                    <li className={chessboardDisappear ? 'navbar__links__link--scroll' : 'navbar__links__link'}>
                        <NavLink
                            to={`/contact`}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            CONTACT
                        </NavLink>
                    </li>
                    <li className={chessboardDisappear ? 'navbar__links__link--scroll' : 'navbar__links__link'}>
                        <FontAwesomeIcon icon={faRightToBracket}
                            className={chessboardDisappear ? 'navbar__links__link__icon--scroll' : 'navbar__links__link__icon'} />
                        <a onClick={() => setOpenModal(true)}>
                            LOGIN
                        </a>
                        {openModal && createPortal(
                            <Modal closeModal={() => setOpenModal(false)} />, document.body
                        )}
                    </li>
                </ul>
            )}

        </nav>
    )
}

export default HeaderNav;
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../utilities/AuthContext.jsx";
import LoginModal from "../../../modal/LoginModal.jsx";


const HeaderNav = ({ chessboardDisappear }) => {
    const [burgerClass, setBurgerClass] = useState("navbar__burger__line unclicked");
    const [isOpen, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [openModal, setOpenModal] = useState(false);
    const { logout, isLoggedIn } = useContext(AuthContext);

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


    const setLogout = () => {
        localStorage.removeItem("token");
        logout();
    }


    const adminLogin = () => {
        if (isLoggedIn) {
            return (
                <div className="navbar__links__link__admin">
                    <NavLink
                        to={`/admin`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        ADMIN
                    </NavLink>
                    <hr className="navbar__links__link__admin__hr" />
                    <NavLink to={"/"} onClick={setLogout}>
                        Déconnexion
                    </NavLink>
                </div>
            )

        } else {
            return (
                <>
                    <FontAwesomeIcon icon={faRightToBracket}
                        className={chessboardDisappear ? 'navbar__links__link__icon--scroll' : 'navbar__links__link__icon'} />
                    <a onClick={() => setOpenModal(true)}>
                        LOGIN
                    </a>
                    {
                        openModal && createPortal(
                            <LoginModal closeModal={() => setOpenModal(false)} />, document.body
                        )
                    }
                </>
            )
        }
    }


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
                        {adminLogin()}
                    </li>
                </ul>

            )}


        </nav>
    )
}

export default HeaderNav;
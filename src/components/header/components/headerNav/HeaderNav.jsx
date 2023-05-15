import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChessKing,
    faChessKnight,
    faChessQueen,
    faChessRook,
    faRightToBracket
} from "@fortawesome/free-solid-svg-icons";

const HeaderNav = () => {
    const [burgerClass, setBurgerClass] = useState("navbar__burger__line unclicked");
    const [isOpen, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

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
        <nav className="navbar">
            <div className="navbar__burger" onClick={handleClick}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            {(isOpen || width > 767) && (
                <ul className="navbar__links">
                    <li className="navbar__links__link">
                        <FontAwesomeIcon icon={faChessKing} className="navbar__links__link__icon"/>
                        <NavLink
                            to={`/`}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            ACCUEIL
                        </NavLink>
                    </li>
                    <li className="navbar__links__link">
                        <FontAwesomeIcon icon={faChessQueen} className="navbar__links__link__icon"/>
                        <NavLink
                            to={`/info`}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            A PROPOS
                        </NavLink>
                    </li>
                    <li className="navbar__links__link">
                        <FontAwesomeIcon icon={faChessRook} className="navbar__links__link__icon"/>
                        <NavLink
                            to={`/activity`}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            ACTIVITÉS
                        </NavLink>
                    </li>
                    <li className="navbar__links__link">
                        <FontAwesomeIcon icon={faChessKnight} className="navbar__links__link__icon"/>
                        <NavLink
                            to={`/contact`}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            CONTACT
                        </NavLink>
                    </li>
                    <li className="navbar__links__link">
                        <FontAwesomeIcon icon={faRightToBracket} className="navbar__links__link__icon"/>
                        <NavLink
                            to={`/login`}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            LOGIN
                        </NavLink>
                    </li>
                </ul>
            )}

        </nav>
    )
}

export default HeaderNav;
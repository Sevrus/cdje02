import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

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

          if(window.innerWidth > 768) {
              setOpen(false);
          };
        };

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    },[]);

    return (
        <nav className="navbar">
            <div className="navbar__burger" onClick={handleClick}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            {(isOpen || width > 768) && (
                <ul className="navbar__links">
                    <li className="navbar__links__link">
                        <Link to={`/`}>ACCUEIL</Link>
                    </li>
                    <li className="navbar__links__link">
                        <Link to={`/info`}>A PROPOS</Link>
                    </li>
                    <li className="navbar__links__link">
                        <Link to={`/activity`}>ACTIVITÉS</Link>
                    </li>
                    <li className="navbar__links__link">
                        <Link to={`/contact`}>CONTACT</Link>
                    </li>
                    <li className="navbar__links__link">
                        <Link to={`/login`}>LOGIN</Link>
                    </li>
                </ul>
            )}

        </nav>
    )
}

export default HeaderNav;
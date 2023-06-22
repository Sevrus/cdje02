import { Link } from "react-router-dom";

const FooterRules = () => {

    return (
        <div className='footer__rules'>
            <hr className="footer__rules__hr1" />
            <div className="footer__rules__text">
                <div className="footer__rules__text__legal-notice">
                    <Link to="/legal-notice">Mentions légales</Link>
                </div>
                <div className="footer__rules__text__confidentiality">
                    <Link to="/confidentiality">Confidentialité</Link>
                </div>
            </div>
            <hr className="footer__rules__hr2" />
        </div>
    )
}

export default FooterRules;
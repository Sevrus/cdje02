import { Link } from "react-router-dom";

const FooterRules = () => {

    return (
        <div className='footer_rules'>
            <hr className="footer_rules_hr1" />
            <div className="footer_rules_text">
                <div className="footer_rules_text_legal-notice">
                    <Link to="/legal-notice">Mentions légales</Link>
                </div>
                <div className="footer_rules_text_confidentiality">
                    <Link to="/confidentiality">Confidentialité</Link>
                </div>
            </div>
            <hr className="footer_rules_hr2" />
        </div>
    )
}

export default FooterRules;
import {
    faFacebook,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterSocials = () => {

    return (
        <div className='footer__socials'>
            <p className="footer__socials__text">SUIVEZ-NOUS</p>
            <hr />
            <div className="footer__socials__icons">
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} className='footer__socials__icons__facebook' />
                </a>
                <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} className='footer__socials__icons__twitter' />
                </a>
                <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} className='footer__socials__icons__instagram' />
                </a>
            </div >
        </div>
    )
}

export default FooterSocials;
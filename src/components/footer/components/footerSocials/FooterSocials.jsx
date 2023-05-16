import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterSocials = () => {

    return (
        <div className='footer__socials'>
            <p className="footer__socials__text">SUIVEZ-NOUS</p>
            <hr />
            <IconContext.Provider value={{ className: "footer__socials__icons" }}>
                <a href="https://www.facebook.com">
                    <FaFacebook className='footer__socials__icons__facebook' />
                </a>
                <a href="https://www.twitter.com">
                    <FaTwitter className='footer__socials__icons__twitter' />
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram className='footer__socials__icons__instagram' />
                </a>
            </IconContext.Provider >
        </div>
    )
}

export default FooterSocials;
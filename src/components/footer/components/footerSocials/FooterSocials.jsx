import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterSocials = () => {

    return (
        <div className='footer_socials'>
            <p className="footer_socials_text">SUIVEZ-NOUS</p>
            <hr />
            <IconContext.Provider value={{ className: "footer_socials_icons" }}>
                <a href="https://www.facebook.com">
                    <FaFacebook className='footer_socials_icons_facebook' />
                </a>
                <a href="https://www.twitter.com">
                    <FaTwitter className='footer_socials_icons_twitter' />
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram className='footer_socials_icons_instagram' />
                </a>
            </IconContext.Provider >
        </div>
    )
}

export default FooterSocials;
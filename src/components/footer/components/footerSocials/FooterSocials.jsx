import icon_facebook from '../../../../assets/icons/icon_facebook.svg';
import icon_instagram from '../../../../assets/icons/icon_instagram.svg';
import icon_twitter from '../../../../assets/icons/icon_twitter.svg';

const FooterSocials = () => {

    return (
        <div className='footer_socials'>
            <p className="footer_socials_text">SUIVEZ-NOUS</p>
            <hr />
            <div className="footer_socials_icons">
                <a href="https://www.facebook.com">
                    <img src={icon_facebook} alt="facebook" className='footer_socials_facebook' />
                </a>
                <a href="https://www.twitter.com">
                    <img src={icon_twitter} alt="twitter" className='footer_socials_twitter' />
                </a>
                <a href="https://www.instagram.com">
                    <img src={icon_instagram} alt="instagram" className='footer_socials_instagram' />
                </a>
            </div>
        </div>
    )
}

export default FooterSocials;
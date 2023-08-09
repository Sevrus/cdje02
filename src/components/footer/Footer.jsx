import React from 'react';
import FooterCopyright from './components/footerCopyright/FooterCopyright.jsx';
import FooterLinks from './components/footerLinks/FooterLinks.jsx';
import FooterNav from './components/footerNav/FooterNav.jsx';
import FooterRules from './components/footerRules/FooterRules.jsx';
import FooterSocials from './components/footerSocials/FooterSocials.jsx';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer__center'>
                <div className='footer__center__left'>
                    <FooterRules />
                    <FooterSocials />
                </div>
                <FooterLinks />
                <FooterNav />
            </div>

            <div className='footer__bottom'>
                <FooterCopyright />
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react';

import FooterCopyright from './components/footerCopyright/FooterCopyright.jsx';
import FooterLinks from './components/footerLinks/FooterLinks.jsx';
import FooterNav from './components/footerNav/FooterNav.jsx';
import FooterRules from './components/footerRules/FooterRules.jsx';
import FooterSocials from './components/footerSocials/FooterSocials.jsx';

import footer_line_left from '../../../src/assets/lines/footer_line_left.svg';
import footer_line_right from '../../../src/assets/lines/footer_line_right.svg';

const Footer = () => {
    const mobile = window.innerWidth < 768;
    const desktop = window.innerWidth >= 768;

    if (mobile) {
        return (
            <div className='footer'>
                <div className='footer_top'>
                    <FooterLinks />
                </div>

                <div className='footer_center'>
                    <img src={footer_line_left} alt="barre gauche" className="footer_line_left" />
                    <FooterRules />
                    <FooterSocials />
                    <img src={footer_line_right} alt="barre droite" className="footer_line_right" />
                </div>

                <div className='footer_bottom'>
                    <FooterCopyright />
                </div>
            </div>
        )
        
    } else if (desktop) {
        return (
            <div className='footer'>
                <img src={footer_line_left} alt="barre gauche" className="footer_line_left" />
                <FooterRules />
                <FooterSocials />

                <div className='footer_center'>
                    <FooterLinks />
                    <FooterCopyright />
                </div>

                <FooterNav />
                <img src={footer_line_right} alt="barre droite" className="footer_line_right" />
            </div>
        )
    }
}

export default Footer;
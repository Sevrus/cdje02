import React from 'react';

import FooterCopyright from './components/footerCopyright/FooterCopyright.jsx';
import FooterLinks from './components/footerLinks/FooterLinks.jsx';
import FooterNav from './components/footerNav/FooterNav.jsx';
import FooterRules from './components/footerRules/FooterRules.jsx';
import FooterSocials from './components/footerSocials/FooterSocials.jsx';

import footer_line_left from '../../../src/assets/lines/footer_line_left.svg';
import footer_line_left_mobile from '../../../src/assets/lines/footer_line_left_mobile.svg';
import footer_line_right from '../../../src/assets/lines/footer_line_right.svg';
import footer_line_right_mobile from '../../../src/assets/lines/footer_line_right_mobile.svg';

const Footer = () => {
    const mobile = window.innerWidth < 768;
    const desktop = window.innerWidth >= 768;

    if (mobile) {
        return (
            <footer className='footer'>
                <div className='footer_top'>
                    <FooterLinks />
                </div>

                <div className='footer_center'>
                    <img src={footer_line_left_mobile} alt="barre gauche" className="footer_line_left" />
                    <FooterRules />
                    <FooterSocials />
                    <img src={footer_line_right_mobile} alt="barre droite" className="footer_line_right" />
                </div>

                <div className='footer_bottom'>
                    <FooterCopyright />
                </div>
            </footer>
        )

    } else if (desktop) {
        return (
            <footer className='footer'>
                <div className='footer_center'>
                    <div className='footer_center_left'>
                        <FooterRules />
                        <FooterSocials />
                    </div>
                    <FooterLinks />
                    <FooterNav />
                </div>

                <div className='footer_bottom'>
                    <img src={footer_line_left} alt="barre gauche" className="footer_line_left" />
                    <FooterCopyright />
                    <img src={footer_line_right} alt="barre droite" className="footer_line_right" />
                </div>
            </footer>
        )
    }
}

export default Footer;
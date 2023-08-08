import React from 'react';

import FooterCopyright from './components/footerCopyright/FooterCopyright.jsx';
import FooterLinks from './components/footerLinks/FooterLinks.jsx';
import FooterNav from './components/footerNav/FooterNav.jsx';
import FooterRules from './components/footerRules/FooterRules.jsx';
import FooterSocials from './components/footerSocials/FooterSocials.jsx';

import footer_line_left from '../../../src/assets/lines/footer_line_left.svg';
import footer_line_right from '../../../src/assets/lines/footer_line_right.svg';

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
                <img src={footer_line_left} alt="" className="footer__line__left" />
                <FooterCopyright />
                <img src={footer_line_right} alt="" className="footer__line__right" />
            </div>
        </footer>
    )
}

export default Footer;
import logo_ehdf from '../../../../assets/images/logo_ehdf.webp';
import logo_ffe from '../../../../assets/images/logo_ffe.webp';
import logo_fide from '../../../../assets/svg/logo_fide.svg';

const FooterLinks = () => {

    return (
        <div className='footer__links'>
            <a href="http://www.echecs.asso.fr/" target="_blank">
                <img src={logo_ffe} alt="logo ffe" className='footer__links__ffe' />
            </a>
            <a href="https://www.fide.com/" target="_blank">
                <img src={logo_fide} alt="logo fide" className='footer__links__fide' />
            </a>
            <a href="https://ehdf.fr/" target="_blank">
                <img src={logo_ehdf} alt="logo ehdf" className='footer__links__ehdf' />
            </a>
        </div>
    )
}

export default FooterLinks;
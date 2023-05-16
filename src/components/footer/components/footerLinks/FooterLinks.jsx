import logo_comity from '../../../../assets/logos/logo_comity.png';
import logo_ffe from '../../../../assets/logos/logo_ffe.png';
import logo_fide from '../../../../assets/logos/logo_fide.png';

const FooterLinks = () => {

    return (
        <div className='footer__links'>
            <a href="http://www.echecs.asso.fr/">
                <img src={logo_ffe} alt="logo ffe" className='footer__links__ffe' />
            </a>
            <a href="https://www.fide.com/">
                <img src={logo_fide} alt="logo fide" className='footer__links__fide' />
            </a>
            <a href="https://ehdf.fr/">
                <img src={logo_comity} alt="logo comity" className='footer__links__comity' />
            </a>
        </div>
    )
}

export default FooterLinks;
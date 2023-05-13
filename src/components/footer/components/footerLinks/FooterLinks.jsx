import logo_comity from '../../../../assets/images/logo_comity.png';
import logo_ffe from '../../../../assets/images/logo_ffe.png';
import logo_fide from '../../../../assets/images/logo_fide.png';

const FooterLinks = () => {

    return (
        <div className='footer_links'>
            <a href="http://www.echecs.asso.fr/">
                <img src={logo_ffe} alt="logo ffe" className='footer_links_ffe' />
            </a>
            <a href="https://www.fide.com/">
                <img src={logo_fide} alt="logo fide" className='footer_links_fide' />
            </a>
            <a href="https://ehdf.fr/">
                <img src={logo_comity} alt="logo comity" className='footer_links_comity' />
            </a>
        </div>
    )
}

export default FooterLinks;
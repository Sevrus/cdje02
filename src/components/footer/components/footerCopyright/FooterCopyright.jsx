import icon_copyright from '../../../../assets/icons/icon_copyright.svg';

const FooterCopyright = () => {

    return (
        <div className="footer__copyright">
            <img src={icon_copyright} alt="copyright" className='footer__copyright__icon' />
            <p className="footer__copyright__text">Copyright CDJE02</p>
        </div>
    )
}

export default FooterCopyright;
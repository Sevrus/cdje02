import icon_copyright from '../../../../assets/icons/icon_copyright.svg';

const FooterCopyright = () => {

    return (
        <div className="footer_copyright">
            <img src={icon_copyright} alt="copyright" className='footer_copyright_icon' />
            <p className="footer_copyright_text">Copyright CDJE02</p>
        </div>
    )
}

export default FooterCopyright;
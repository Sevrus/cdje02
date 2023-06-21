import { Link } from "react-router-dom";
import logoCDJE from "../../../../assets/svg/logo_cdje.svg";

const HeaderLogo = ({ chessboardDisappear }) => {
    return (
        <>
            <Link to={`/`}>
                <img src={logoCDJE} alt="logo CDJE02"
                    className={chessboardDisappear ? 'logo--scroll' : 'logo'} />
            </Link>
        </>
    )
}

export default HeaderLogo;
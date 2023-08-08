import { useLocation } from "react-router-dom";
import headerImg from "../../../../assets/images/image_header.webp";
import { shouldChessboardDisappear } from "../../../../utilities/chessboardUtils.js";

const HeaderChessboard = ({ chessboardDisappear }) => {
    const { pathname } = useLocation();
    const shouldDisappear = shouldChessboardDisappear(pathname, window.scrollY);

    if(shouldDisappear) {
        return null;
    }

    return (
        <>
            <img src={headerImg} alt="Un échiquier" className={chessboardDisappear ? 'chessboard-disappear' : 'chessboard'} />
        </>
    )
}

export default HeaderChessboard;